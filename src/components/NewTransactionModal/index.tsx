import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import {
  NewTransactionButton,
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { useState } from 'react'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})
type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction
    },
  )

  const {
    control, // controlled component
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }, // TRUE while submitting the form data
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    // defaultValues: {
    //   type: 'income', // start marked
    // },
  })

  function changeModalState() {
    setIsModalOpen(!isModalOpen)
  }

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    const { description, type, price, category } = data

    await createTransaction({ description, type, price, category })

    reset()
    changeModalState()
  }

  return (
    <Dialog.Root onOpenChange={changeModalState} open={isModalOpen}>
      {/* use existing button - use only with button */}
      <Dialog.Trigger asChild>
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </Dialog.Trigger>

      {/* use 'portal' makes the element independent of any parent (MODAL) */}
      <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton>
            <X size={'2.4rem'} />
          </CloseButton>

          <Dialog.Title>Nova transação</Dialog.Title>

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register('description')}
            />
            <input
              type="number"
              placeholder="Preço"
              required
              {...register('price', { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              {...register('category')}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionType
                    onValueChange={field.onChange} // return new value
                    value={field.value}
                  >
                    <TransactionTypeButton variant="income" value="income">
                      <ArrowCircleUp size={'2.4rem'} />
                      Entrada
                    </TransactionTypeButton>

                    <TransactionTypeButton variant="outcome" value="outcome">
                      <ArrowCircleDown size={'2.4rem'} />
                      Saída
                    </TransactionTypeButton>
                  </TransactionType>
                )
              }}
            />

            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

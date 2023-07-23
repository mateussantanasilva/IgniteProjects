import { ReactNode, useEffect, useState, useCallback } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface TransactionsProviderProps {
  children: ReactNode
}

interface CreateTransactionInput {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
}

interface Transaction extends CreateTransactionInput {
  id: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (newTransaction: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query, // name=value
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
    //  define standard how to use function define state - setTransactions
    //  better than create wrapper function
    async (newTransaction: CreateTransactionInput) => {
      const { description, type, price, category } = newTransaction

      const response = await api.post('/transactions', {
        description,
        type,
        price,
        category,
        createdAt: new Date(),
      })

      setTransactions((previusState) => [response.data, ...previusState])
    },
    [], // dependency array works the same as useEffect
  )

  useEffect(() => {
    fetchTransactions() // better run an async function
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

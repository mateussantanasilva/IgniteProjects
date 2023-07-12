import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { PaymentMethodContainer } from "./styles";

const MethodPayment = {
  CreditCard: { title: 'Cartão de crédito', value: 'creditCard' },
  Bank: { title: 'Cartão de débito', value: 'debitCard' },
  Money: { title: 'Dinheiro', value: 'money' },
}

interface PaymentMethodButtonProps {
  type: keyof typeof MethodPayment
}

export function PaymentMethodButton({ type }: PaymentMethodButtonProps) {
  const { title, value } = MethodPayment[type]
  let icon

  switch (type) {
    case 'CreditCard':
      icon = <CreditCard size={'1.6rem'} />
    case 'Bank':
      icon = <Bank size={'1.6rem'} />
    case 'Money':
      icon = <Money size={'1.6rem'} />
  }

  return (
    <PaymentMethodContainer>
      <input type="radio" id={value} name="options" value={value} />
      <label htmlFor={value}>
        {icon}
        {title}
      </label>
    </PaymentMethodContainer>
  )
}
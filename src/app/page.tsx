import { styled } from '@/styles'

const Button = styled('button', {
  backgroundColor: '$green500',
  padding: 14,
})

export default function Home() {
  return <Button>World</Button>
}

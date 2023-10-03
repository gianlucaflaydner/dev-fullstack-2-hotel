import HomeCard from '@/components/home-card/home-card'


import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-between p-32 ${manrope.className} bg-secondaryColor`}
    >
      <HomeCard title="Faça uma reserva" buttonTitle="Reservar" buttonRoute="/reserva" cardImage="quarto-background.png"/>
      <HomeCard title="Fazer checkin" buttonTitle="Checkin" buttonRoute="/checkin" cardImage="quarto-background.png"/>
      <HomeCard title="Fazer checkout" buttonTitle="Checkout" buttonRoute="/checkout" cardImage="quarto-background.png"/>
    </main>

  )
}

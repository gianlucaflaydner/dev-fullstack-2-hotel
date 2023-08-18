import ComponenteExemplo from '@/components/ComponenteExemplo/ComponenteExemplo'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     <h1> ESSA É A Home</h1>
    </main>
  )
}

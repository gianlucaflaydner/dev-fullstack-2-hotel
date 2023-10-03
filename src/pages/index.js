import HomeCard from '@/components/home-card/home-card'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-between p-24 ${manrope.className} bg-secondaryColor`}
    >
      <HomeCard />
    
      
 
    </main>
  )
}

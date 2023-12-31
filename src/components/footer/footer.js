import { Manrope } from 'next/font/google'
import Link from 'next/link';

const manrope = Manrope({ subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className={`w-screen border-t-[1px] border-slate-300 shadow-lg h-[100px] flex flex-col items-center justify-center gap-5 bg-primaryColor py-2 ${manrope.className}`}>
        <div className='w-4/5 h-[1px] bg-secondaryColor ' />
        <h2 className="text-secondaryColor ">Since <Link href="https://internacional.com.br/" >1909</Link></h2>
    </footer>
  );
}

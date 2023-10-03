import { Manrope } from 'next/font/google'
import Link from 'next/link';

const manrope = Manrope({ subsets: ['latin'] })

export default function ButtonCustom({title, route}) {
  return (
    <Link href={route}>
    <button  class="bg-primaryColor text-secondaryColor font-bold py-2 px-4 rounded">
        <h1>{title}</h1>
    
    </button>
    </Link>
  );
}

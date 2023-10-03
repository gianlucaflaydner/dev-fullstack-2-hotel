import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

export default function ButtonCustom({title}) {
  return (
    <button  class="bg-primaryColor hover:bg-white hover:text-primaryColor text-secondaryColor font-bold py-2 px-4 rounded">
        <h1>{title}</h1>
    </button>
  );
}

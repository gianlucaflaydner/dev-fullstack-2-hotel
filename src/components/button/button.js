import Link from 'next/link';

export default function ButtonCustom({title, route}) {
  return (
    <Link href={route}>
    <button className="bg-primaryColor text-secondaryColor font-bold py-2 px-4 rounded">
        <h1>{title}</h1>
    </button>
    </Link>
  );
}

import Image from "next/image";
import LogoHotel from "../../../public/images/logo-hotel.png";

export default function Header() {
  return (
    <header className="w-screen border-b-[1px] border-slate-300 shadow-lg h-auto flex items-center justify-start px-10 gap-8 bg-primaryColor py-2">
      <div className="bg-white rounded-full">
        <Image
          alt="Logo hoteis chimia"
          src={LogoHotel}
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-secondaryColor font-bold text-4xl"> HOTÉIS</h1>
    </header>
  );
}

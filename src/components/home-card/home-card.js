import Image from "next/image";
import backgroundImageTeste from "../../../public/images/quarto-background.png";

export default function HomeCard({title, buttonTitle}) {
  return (
    <div className="bg-white h-[400px] rounded w-[350px] flex items-center justify-center border-2 border-slate-100 border-solid transform hover:scale-[1.05] cursor-pointer transition duration-500 ease-in-out">
    <div className="h-[95%] w-full bg-cover bg-opacity-90 flex justify-center items-center bg-[url('/images/quarto-background.png')] opacity-90">
      <div className="w-full h-[150px] flex flex-col items-center bg-white">
        <h1 className="text-xl mb-2 mt-2">
            teste
        </h1>
        <div className="bg-slate-400 w-[70%] h-[1px]"></div>
        <button>exemplo</button>

      </div>
    </div>
    </div>
  );
};
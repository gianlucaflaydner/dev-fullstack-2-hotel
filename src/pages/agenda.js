import useObterQuartos from "@/services/hooks/useObterQuartos";

export default function Agenda() {
  const { quartos } = useObterQuartos();

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-[#2f2c2c]"></div>
  );
}

export default function RoomsCard({
  capacity,
  roomNumber,
  price,
  isAvailable,
}) {
  return (
    <div
      className={`bg-white h-[170px] rounded w-[250px] flex items-center flex-col justify-between py-2 ${
        isAvailable ? "border-black" : " bg-red-600/20 border-red-600"
      } border-2 border-solid`}
    >
      <div className="flex flex-row w-full justify-between px-2">
        <p className="text-sm">
          Diária <b>R${price}</b>
        </p>
        <p className="font-bold text-sm">{capacity} pessoa(s)</p>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="font-bold text-lg">Quarto {roomNumber}</h2>
      </div>
    </div>
  );
}

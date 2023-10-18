import ButtonCustom from "../button/button";

export default function HomeCard({
  title,
  buttonTitle,
  buttonRoute,
  cardImage,
}) {
  return (
    <div className="bg-white h-[420px] rounded w-[350px] flex items-center justify-center border-2 border-slate-100 border-solid transform hover:scale-[1.03] transition duration-500 ease-in-out">
      <div
        className={`h-[95%] w-full bg-cover flex justify-center items-center opacity-90`}
        style={{ backgroundImage: `url('/images/${cardImage}')` }}
      >
        <div className="w-full h-[150px] flex flex-col items-center bg-white">
          <h1 className="text-xl mb-2 mt-2">{title}</h1>
          <div className="bg-slate-400 w-[70%] h-[1px] mb-5"></div>
          <ButtonCustom
            title={buttonTitle}
            route={buttonRoute}
            isRouterButton={true}
          />
        </div>
      </div>
    </div>
  );
}

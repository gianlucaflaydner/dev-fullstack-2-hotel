export default function SpinnerCustom() {
  return (
    <div className="lds-ring w-80 h-80">
      <div
        className="w-64 h-64 border-8 border-white border-solid rounded-full absolute top-8 left-8 animate-lds-ring"
        style={{ borderColor: "#fff transparent transparent transparent" }}
      ></div>
      <div
        className="w-64 h-64 border-8 border-white border-solid rounded-full absolute top-8 left-8 animate-lds-ring"
        style={{
          borderColor: "#fff transparent transparent transparent",
          animationDelay: "-0.45s",
        }}
      ></div>
      <div
        className="w-64 h-64 border-8 border-white border-solid rounded-full absolute top-8 left-8 animate-lds-ring"
        style={{
          borderColor: "#fff transparent transparent transparent",
          animationDelay: "-0.3s",
        }}
      ></div>
      <div
        className="w-64 h-64 border-8 border-white border-solid rounded-full absolute top-8 left-8 animate-lds-ring"
        style={{
          borderColor: "#fff transparent transparent transparent",
          animationDelay: "-0.15s",
        }}
      ></div>
    </div>
  );
}

import ReservationForm from "@/components/reservation-form";
import {
  transformHospedeForm,
  transformReservationData,
} from "@/utils/transform";

export default function Reserva() {
  const onSubmit = async (data) => {
    const hospedeBody = transformHospedeForm(data);

    const options = {
      method: "POST",
      "Content-Type": "application/json",
    };

    const hospedeResponse = await fetch("/api/hospedes", {
      ...options,
      body: JSON.stringify(hospedeBody),
    }).then((response) => response.json());

    if (!hospedeResponse.success) return hospedeResponse;

    const reservaBody = transformReservationData({
      ...data,
      hospede: hospedeResponse.data._id,
    });

    const reservaResponse = await fetch("/api/reservas", {
      ...options,
      body: JSON.stringify(reservaBody),
    }).then((response) => response.json());

    console.log("reservaResponse", reservaResponse);

    return reservaResponse;
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center px-32 bg-secondaryColor">
      <ReservationForm onSubmit={onSubmit} />
    </div>
  );
}

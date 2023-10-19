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

    const reservaBody = transformReservationData({
      ...data,
      hospede: hospedeBody,
    });

    const reservaResponse = await fetch("/api/reservas", {
      ...options,
      body: JSON.stringify(reservaBody),
    }).then((response) => response.json());

    return reservaResponse;
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center xl:px-32 bg-secondaryColor">
      <ReservationForm onSubmit={onSubmit} />
    </div>
  );
}

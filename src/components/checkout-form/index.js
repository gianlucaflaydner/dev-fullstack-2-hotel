import { useState } from "react";
import { isValidCPF, formatCPF } from "@brazilian-utils/brazilian-utils";
import { transformCPFInOnlyNumbers } from "@/utils/transform";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function CheckoutForm() {
  const [cpfValue, setCpfValue] = useState("");
  const router = useRouter();

  const handleSubmitCpf = async (e) => {
    e.preventDefault();

    const formattedCpfValue = formatCPF(cpfValue);

    if (isValidCPF(formattedCpfValue)) {
      const { success, data } = await fetch(
        `/api/checkout?cpf=${transformCPFInOnlyNumbers(formattedCpfValue)}`,
        { method: "GET" }
      ).then((response) => response.json());
      if (success) {
        Swal.fire({
          title: "Quase lá! Efetue o pagamento: ",
          text: `Sua reserva ficou R$${data.preco}.00, efetue o pagamento do QRCODE!`,
          imageUrl: "/images/pix-qrcode.png",
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "QRCODE",
          confirmButtonText: "Pago!",
        })
          .then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                "Sucesso!",
                "Checkout concluído com sucesso",
                "success"
              );
            }
          })
          .then(() => {
            router.push("/")});
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algum erro ocorreu...",
        });
      }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "CPF inválido, tente novamente.",
          });
    }
  };

  return (
    <section className="bg-slate-100 p-4 bg-opacity-20 px-10 rounded h-[400px] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Formulário de Check-out</h1>

      <form
        action="/processar_checkin"
        method="post"
        className="max-w-sm flex flex-col justify-center items-center"
      >
        <div className="mb-4">
          <label htmlFor="cpf" className="block text-gray-700 font-bold mb-2">
            CPF:
          </label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            minLength={11}
            maxLength={14}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={cpfValue}
            onChange={(e) => setCpfValue(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-primaryColor text-secondaryColor font-bold py-2 px-4 rounded"
          onClick={handleSubmitCpf}
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

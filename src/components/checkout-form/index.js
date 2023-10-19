import { useState } from "react";
import { isValidCPF, formatCPF } from "@brazilian-utils/brazilian-utils";

export default function CheckoutForm() {
  const [cpfValue, setCpfValue] = useState("");

  const handleSubmitCpf = (e) => {
    e.preventDefault();

    const formattedCpfValue = formatCPF(cpfValue);

    if(isValidCPF(formattedCpfValue)){
        // chamada do checout
    } else {
        alert('CPF INVÁLIDO')
    }

  }

  console.log(cpfValue, 'CPF VALUE');
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
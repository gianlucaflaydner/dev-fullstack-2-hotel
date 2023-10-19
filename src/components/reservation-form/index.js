import ButtonCustom from "@/components/button/button";
import useObterQuartos from "@/services/hooks/useObterQuartos";
import React, { useState } from "react";
import RoomsCard from "./rooms-card";
import SpinnerCustom from "../spinner-custom";
import _ from "lodash";

function ReservationForm(props) {
  const { onSubmit } = props;

  const { quartos, setQuantidadeDePessoas, setDataEntrada, setDataSaida } =
    useObterQuartos();

  const [formData, setFormData] = useState({
    nome: "Pedro",
    cpf: "03927129040",
    celular: "51997819168",
    email: "pedro@teste.com",
    quantidadePessoas: "2",
    dataEntrada: "20/10/2023",
    dataSaida: "24/10/2023",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <div className="flex justify-between w-full flex-row items-center">
      <div className="bg-slate-100 p-4 bg-opacity-20 px-10">
        <h2 className="text-2xl font-semibold mb-4">
          Reserva de Quarto de Hotel
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-gray-600 font-medium">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cpf" className="block text-gray-600 font-medium">
              Cpf:
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="celular"
              className="block text-gray-600 font-medium"
            >
              Celular:
            </label>
            <input
              type="text"
              id="celular"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantidadePessoas"
              className="block text-gray-600 font-medium"
            >
              Quantidade de Pessoas:
            </label>
            <input
              type="number"
              id="quantidadePessoas"
              name="quantidadePessoas"
              value={formData.quantidadePessoas}
              defaultValue="1"
              min="1"
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4 flex gap-3 items-center justify-center">
            {/* <div className="flex flex-col gap-1">
              <label htmlFor="data" className="block text-gray-600 font-medium">
                Data de entrada:
              </label>
              <input
                type="date"
                id="data"
                name="data"
                value={formData.dataEntrada}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="data" className="block text-gray-600 font-medium">
                Data de saída:
              </label>
              <input
                type="date"
                id="data"
                name="data"
                value={formData.dataSaida}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
                required
              />
            </div> */}
          </div>
          <div className="mt-4 flex items-center justify-center">
            <ButtonCustom title="Fazer reserva" isRouterButton={false} />
          </div>
        </form>
      </div>
      {_.isEmpty(quartos) ? (
        <SpinnerCustom />
      ) : (
        <div className="grid grid-cols-3 gap-7 items-center">
          {quartos.map((quarto) => {
            return (
              <RoomsCard
                isAvailable={true}
                key={quarto.id}
                roomNumber={quarto.numero}
                capacity={quarto.capacidade}
                price={quarto.preco_por_noite}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ReservationForm;

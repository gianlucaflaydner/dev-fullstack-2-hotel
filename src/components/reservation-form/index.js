import ButtonCustom from "@/components/button/button";
import Swal from "sweetalert2";
import useObterQuartos from "@/services/hooks/useObterQuartos";
import React, { useEffect, useState } from "react";
import RoomsCard from "./rooms-card";
import SpinnerCustom from "../spinner-custom";
import { useRouter } from "next/router";
import {
  isValidCPF,
  formatCPF,

} from "@brazilian-utils/brazilian-utils";
import _ from "lodash";

function ReservationForm(props) {
  const { onSubmit } = props;

  const { quartos, setQuantidadeDePessoas, setDataEntrada, setDataSaida } =
    useObterQuartos();

    const router = useRouter()

  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    celular: "",
    email: "",
    quantidadePessoas: "1",
    dataEntrada: "",
    dataSaida: "",
  });

  const [quartosForMap, setQuartosForMap] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(formData, "FORMDATA");
  console.log(quartosForMap, "quartos");

  useEffect(() => {
    if (isLoading && quartos) {
      setQuartosForMap(quartos);
      setIsLoading(false);
    }
  }, [quartos, isLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (name === "quantidadePessoas") {
      setQuantidadeDePessoas(value);
    }
    if (name === "dataEntrada") {
      setDataEntrada(value);
    }
    if (name === "dataSaida") {
      setDataSaida(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedCpfValue = formatCPF(formData.cpf);

    if (!isValidCPF(formattedCpfValue)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "CPF inválido, tente novamente.",
      });
    } 
  };

  const handleReserva = async (quartoId) => {
    const {success} = await onSubmit({ ...formData, quarto: quartoId });

    if(success){
      Swal.fire(
        "Sucesso!",
        "Sua reserva foi concluída com sucesso!",
        "success"
      ).then(() => router.push('/'));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algum erro ocorreu...",
      });
    }


  };

  return (
    <div className="flex justify-between w-full flex-row items-center gap-6">
      <div className="bg-slate-100 p-4 bg-opacity-20 px-10">
        <h2 className="text-2xl font-semibold mb-4">Dados do hóspede:</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-gray-600 font-medium">
              Nome:
            </label>
            <input
              placeholder="João da Silva"
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
              placeholder="123.456.789-10"
              minLength={11}
              maxLength={14}
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
              placeholder="(51) 999999999"
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
              placeholder="exemplo@gmail.com"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Filtro de busca:</h2>
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
            <div className="flex flex-col gap-1">
              <label htmlFor="data" className="block text-gray-600 font-medium">
                Data de entrada:
              </label>
              <input
                type="text"
                placeholder="dd/mm/aaaa"
                id="dataEntrada"
                name="dataEntrada"
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
                type="text"
                placeholder="dd/mm/aaaa"
                id="dataSaida"
                name="dataSaida"
                value={formData.dataSaida}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
                required
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <ButtonCustom title="Buscar" isRouterButton={false} />
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
                key={quarto._id}
                roomNumber={quarto.numero}
                capacity={quarto.capacidade}
                price={quarto.preco_por_noite}
                onClickReserva={() => handleReserva(quarto._id)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ReservationForm;

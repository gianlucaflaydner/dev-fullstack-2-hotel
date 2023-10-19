import _ from "lodash";
import { useEffect, useState } from "react";

export default function useObterQuartos() {
  const [quartos, setQuartos] = useState([]);
  const [quartosFiltrados, setQuartosFiltrados] = useState([]);

  useEffect(() => {
    const buscarQuartos = async () => {
      const resposta = await fetch("/api/quartos").then((response) =>
        response.json()
      );
      const reservasResposta = await fetch("/api/reservas").then((response) =>
        response.json()
      );

      const quartosComReserva = resposta.data.map((quarto) => {
        const reservas = reservasResposta.data.filter(
          (reserva) => reserva.quarto === quarto._id
        );

        return { ...quarto, reservas: reservas ?? [] };
      });

      if (!_.isEmpty(quartosComReserva)) {
        setQuartos(quartosComReserva);
      } else {
        console.error("Erro ao obter quartos:", resposta.error);
      }
    };

    if (_.isEmpty(quartos)) {
      buscarQuartos();
    }
  }, []);

  const [dataEntrada, setDataEntrada] = useState("");
  const [dataSaida, setDataSaida] = useState("");
  const [quantidadeDePessoas, setQuantidadeDePessoas] = useState(0);

  useEffect(() => {
    if (!_.isEmpty(quartos)) {
      const quartosFiltrados = quartos.filter((quarto) => {
        if (quarto.capacidade < quantidadeDePessoas) return false;

        if (dataEntrada && dataSaida) {
          let quartoVago = true;

          quarto.reservas.forEach((reserva) => {
            const inicioReserva = new Date(reserva.data_inicio);
            const finalReserva = new Date(reserva.data_final);

            const inicioDesejado = new Date(dataEntrada);
            const finalDesejado = new Date(dataSaida);

            if (
              inicioReserva < finalReserva &&
              inicioDesejado < finalDesejado
            ) {
              quartoVago = false;
            }
          });

          return quartoVago;
        }

        return true;
      });

      setQuartosFiltrados(quartosFiltrados);
    }
  }, [quartos, dataEntrada, dataSaida, quantidadeDePessoas]);

  return {
    quartos: quartosFiltrados,
    setDataEntrada,
    setDataSaida,
    setQuantidadeDePessoas,
  };
}

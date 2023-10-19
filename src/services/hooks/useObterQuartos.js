import axios from "axios";
import { useEffect, useState } from "react";

export default function useObterQuartos() {
  const [quartos, setQuartos] = useState();
  const [dataEntrada, setDataEntrada] = useState("");
  const [dataSaida, setDataSaida] = useState("");
  const [quantidadeDePessoas, setQuantidadeDePessoas] = useState(0);

  useEffect(() => {
    const buscarQuartos = async () => {
      const resposta = await axios.get("/api/quartos");
      const reservasResposta = await fetch("/api/reservas");

      console.log("reservasResposta", reservasResposta);
      if (resposta.status === 200) {
        setQuartos(resposta.data);
      } else {
        console.error("Erro ao obter quartos:", resposta.error);
      }
    };

    buscarQuartos();
  }, []);

  useEffect(() => {}, [dataEntrada, dataSaida, quantidadeDePessoas]);

  return { quartos };
}

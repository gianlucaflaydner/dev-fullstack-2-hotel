import axios from "axios";
import { useEffect, useState } from "react";

export default function useObterQuartos() {
  const [quartos, setQuartos] = useState();

  useEffect(() => {
    const buscarQuartos = async () => {
      const resposta = await axios.get("/api/quartos");
      if (resposta.status === 200) {
        setQuartos(resposta.data);
      } else {
        console.error("Erro ao obter quartos:", resposta.error);
      }
    };

    buscarQuartos();
  }, []);

  return { quartos };
}

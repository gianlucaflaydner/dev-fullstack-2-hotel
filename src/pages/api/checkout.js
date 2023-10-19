import Hospede from "@/models/Hospedes";
import connectDatabase from "@/services/database";
import Reserva from "@/models/Reservas";
import Quarto from "@/models/Quartos";

function calcularDiasPassados(dataInicial, dataFinal) {
  const umDiaEmMilissegundos = 24 * 60 * 60 * 1000; // Número de milissegundos em um dia
  const timestampDataInicial = dataInicial.getTime(); // Timestamp da data inicial
  const timestampDataFinal = dataFinal.getTime(); // Timestamp da data final

  const diferencaEmMilissegundos = Math.abs(
    timestampDataFinal - timestampDataInicial
  ); // Diferença em milissegundos
  const diferencaEmDias = Math.floor(
    diferencaEmMilissegundos / umDiaEmMilissegundos
  ); // Diferença em dias

  return diferencaEmDias;
}

export default async function handler(req, res) {
  const { method } = req;

  await connectDatabase();

  if (method === "GET") {
    try {
      const { query } = req;
      const { cpf } = query;

      const hospede = await Hospede.findOne({ cpf });
      const reservas = await Reserva.find({});
      const reservaRespectiva = reservas.find((reserva) =>
        reserva.hospede.equals(hospede._id)
      );

      const quarto = await Quarto.findById(reservaRespectiva.quarto);

      const quantidadeDiasReserva = calcularDiasPassados(
        reservaRespectiva.data_inicio,
        reservaRespectiva.data_final
      );

      const data = {
        preco: quantidadeDiasReserva * quarto.preco_por_noite,
      };

      res.status(200).json({ success: true, data: data });
    } catch (error) {
      res.status(500).json({ success: false, errors: error });
    }
  }
}

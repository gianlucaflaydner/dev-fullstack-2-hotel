import Hospede from "@/models/Hospedes";
import connectDatabase from "@/services/database";
import Reserva from "@/models/Reservas";

export default async function handler(req, res) {
  const { method } = req;

  await connectDatabase();

  if (method === "GET") {
    try {
      const { query } = req;
      const { cpf } = query;

      const hospede = await Hospede.findOne({ cpf });
      const reservas = await Reserva.find({});

      const reservaRespectiva = reservas.find(
        (reserva) => reserva.hospede === hospede._id
      );

      const response =
        reservaRespectiva === undefined
          ? { success: false, errors: "Nenhuma reserva neste CPF" }
          : { success: true };

      res.status(500).json(response);
    } catch (error) {
      res.status(500).json({ success: false, errors: error });
    }
  }
}

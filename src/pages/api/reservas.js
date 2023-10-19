import Hospede from "@/models/Hospedes";
import Reserva from "@/models/Reservas";
import connectDatabase from "@/services/database";

export default async function handler(req, res) {
  const { method } = req;

  await connectDatabase();

  if (method === "GET") {
    try {
      const reservas = await Reserva.find({});

      res.status(200).json({ success: true, data: reservas });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ success: false, errors: error });
    }
  } else {
    try {
      const { body } = req;
      const parsedBody = body && body !== "{}" ? JSON.parse(body) : {};

      const { hospede, quarto, ...reservaData } = parsedBody;

      const createdHospede = await Hospede.create(hospede);
      await Reserva.create({
        ...reservaData,
        quarto,
        hospede: createdHospede._id,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ success: false, errors: error });
    }
  }
}

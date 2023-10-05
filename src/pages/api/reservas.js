import Quartos from "@/models/Quartos";
import Reservas from "@/models/Reservas";
import connectDatabase from "@/services/database";

connectDatabase();

export default async function handler(req, res) {
  const { method, body } = req;

  if (method === "POST") {
    try {
      let parsedBody;
      if (body && body !== "{}") {
        parsedBody = JSON.parse(body);
      } else {
        parsedBody = {};
      }

      const novaReserva = await Reservas.create(parsedBody);
      await Quartos.findByIdAndUpdate(
        parsedBody.quarto,
        { $push: { reservas: novaReserva._id } },
        { new: true }
      );
      res.status(200).json({ success: true });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ success: false, errors: error.errors });
    }
  }
}

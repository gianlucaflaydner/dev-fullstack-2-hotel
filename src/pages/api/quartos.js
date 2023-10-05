import Quartos from "@/models/Quartos";
import connectDatabase from "@/services/database";

connectDatabase();

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    try {
      const quartos = await Quartos.find({});
      res.status(200).json(quartos);
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  }
}

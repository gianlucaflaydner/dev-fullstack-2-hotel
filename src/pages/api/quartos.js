import Quartos from "@/models/Quartos";
import connectDatabase from "@/services/database";

export default async function handler(req, res) {
  const { method } = req;

  await connectDatabase();

  if (method === "GET") {
    try {
      const quartos = await Quartos.find({});
      res.status(200).json({ success: true, data: quartos });
    } catch (error) {
      res.status(500).json({ success: false, errors: error });
    }
  }
}

import Hospedes from "@/models/Hospedes";
import connectDatabase from "@/services/database";

export default async function handler(req, res) {
  const { method, query } = req;

  await connectDatabase();

  if (method === "GET") {
    try {
      const hospede = await Hospedes.findOne({ cpf: query.cpf });
      console.log("hospede", hospede);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, errors: error });
    }
  }
}

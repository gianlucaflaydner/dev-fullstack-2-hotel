import Hospedes from "@/models/Hospedes";
import connectDatabase from "@/services/database";

export default async function handler(req, res) {
  const { method, body } = req;

  await connectDatabase();

  if (method === "POST") {
    try {
      let parsedBody;
      if (body && body !== "{}") {
        parsedBody = JSON.parse(body);
      } else {
        parsedBody = {};
      }

      const novoHospede = await Hospedes.create(parsedBody);
      res.status(200).json({ success: true, data: novoHospede });
    } catch (error) {
      res.status(500).json({ success: false, errors: error });
    }
  }
}

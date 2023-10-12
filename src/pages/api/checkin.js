import Hospede from "@/models/Hospedes";
import connectDatabase from "@/services/database";
import _ from "lodash";

export default async function handler(req, res) {
  await connectDatabase();

  try {
    const { query } = req;
    const { cpf } = query;

    const hospede = await Hospede.findOne({ cpf });
    if (!_.isEmpty(hospede?.reserva)) {
      res.status(200).json({ success: true });
    } else {
      res
        .status(500)
        .json({ success: false, errors: "Nenhuma reserva neste CPF" });
    }
  } catch (error) {
    res.status(500).json({ success: false, errors: error });
  }
}

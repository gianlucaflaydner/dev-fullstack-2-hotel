import mongoose from "mongoose";

const hospedesSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  preferencias: {
    type: [String],
    required: true,
  },
});

const Hospede =
  mongoose.models.hospedes ?? mongoose.model("hospedes", hospedesSchema);

export default Hospede;

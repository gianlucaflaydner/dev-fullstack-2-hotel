import mongoose from "mongoose";

const hospedeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  preferencias: {
    type: [String],
  },
});

const Hospede =
  mongoose.models.hospede ?? mongoose.model("hospede", hospedeSchema);

export default Hospede;

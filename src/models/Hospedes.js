import mongoose from "mongoose";

const hospedesSchema = new mongoose.Schema({
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

const Hospedes =
  mongoose.models.hospedes ?? mongoose.model("hospedes", hospedesSchema);

export default Hospedes;

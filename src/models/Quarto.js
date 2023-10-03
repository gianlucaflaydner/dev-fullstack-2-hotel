import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
  data_inicio: {
    type: Date,
    required: true,
  },
  data_final: {
    type: Date,
    required: true,
  },
  hospede: {
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
    preferences: {
      type: [String],
    },
  },
});

const quartoSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true,
    unique: false,
  },
  capacidade: {
    type: Number,
    required: true,
  },
  preco_por_noite: {
    type: Number,
    required: true,
  },
  reservas: [reservaSchema],
});

const Quarto = mongoose.models.quarto ?? mongoose.model("quarto", quartoSchema);

export default Quarto;

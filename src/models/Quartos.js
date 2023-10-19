import mongoose from "mongoose";

const quartosSchema = new mongoose.Schema({
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
});

const Quarto =
  mongoose.models.quartos ?? mongoose.model("quartos", quartosSchema);

export default Quarto;

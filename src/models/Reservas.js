import mongoose, { Schema } from "mongoose";
import Hospedes from "./Hospedes";
import Quartos from "./Quartos";

const servicosSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
});

const reservasSchema = new mongoose.Schema({
  data_inicio: {
    type: Date,
    required: true,
  },
  data_final: {
    type: Date,
    required: true,
  },
  services: {
    type: [servicosSchema],
    required: true,
  },
  hospede: {
    type: Schema.Types.ObjectId,
    ref: "Hospedes",
    required: true,
  },
  quarto: {
    type: Schema.Types.ObjectId,
    ref: "Quartos",
    required: true,
  },
});

const Reserva =
  mongoose.models.reservas ?? mongoose.model("reservas", reservasSchema);

export default Reserva;


import mongoose from "mongoose";

const {Schema} = mongoose
const {model} = mongoose

const facturaSchema = new Schema(
  {
    nombre: String,
    nombrecliente: String,
    apellidocliente: String,
    direccion: String,
    telefono: Number,
    email: String,
    pais: String,
    iva: Number,
    idfiscal: Number,
    cbu: String,
    nfactura: Number,
    ncliente: Number,
    numeroFacIn: Number,
    moneda: String,
    formato: String,
    pagado: {
        type: Boolean,
        default: false,
    }
  },
  {
    timestamps: true,
  }
);

export default model("factura", facturaSchema);

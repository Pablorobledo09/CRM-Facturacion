import { application, Router } from "express";
import Factura from "../models/Factura.js";

const router = Router();


//pagina principal
router.get("/", (req, res) => {
  res.render("./PagInicial/index", {style: "Inicial.css", style:"cookies.css"});
});

router.get("/cookies",(req,res)=>{
  res.render("./cookies/cookies",{style:"cookies.css" })
});

router.get("/facturacion", (req, res) => {
  res.render("./facturacion/facturacion",{ style: "styleFacturacion.css", js : "mainFacturacion.js"});
});

//pagina listado facturas
router.get("/ListadoFacturas/", async (req, res) => {
  const listaFacturas = await Factura.find().lean();
  res.render("./ListadoFacturas/pro", {style: "styleListFacturas.css", listaFacturas });
});


//enviar en pagina de facturacion
router.post("/facturacion/enviar", async (req, res) => {
  const factura = Factura(req.body);
  await factura.save();
  res.redirect("/facturacion");
});

//actualizar una factura (get)
router.get("/listadofacturas/actualizar/:id", async (req, res) => {
  const factura = await Factura.findById(req.params.id).lean();
  res.render("./listadofacturas/actualizar", {factura, style: "styleFacturacion.css"});
});

//actualizar una factura (post)
router.post("/listadofacturas/actualizar/:id", async (req, res) => {
  const { id } = req.params
  await Factura.updateOne({_id: id}, req.body)
  res.redirect("/listadofacturas", {factura, style: "styleFacturacion.css"});
});

//eliminar una factura
router.get("/listadofacturas/eliminar/:id", async (req, res) => {
  const { id } = req.params;
  await Factura.findByIdAndDelete(id);
  res.redirect("/listadofacturas");
});

//pagar factura
router.get("/listadofacturas/cambiarPagado/:id", async (req, res) => {
  const { id } = req.params;
  const factura = await Factura.findById(id);
  factura.pagado = !factura.pagado;
  await factura.save();
  res.redirect("/listadofacturas");
});

export default router;

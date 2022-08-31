import mongoose from "mongoose";

(async () => {
    try {
const db = await connect("mongodb://localhost:27017/appfacturacion-db");
console.log("DB conectada a", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"
import cors from "cors"

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// Routes ← ¡MOVIDO AQUÍ ANTES de la conexión!
app.use("/api", route);

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

// Conexión a MongoDB
mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("DB connected successfully.");
        app.listen(PORT, () => { // ← Corregí también esta línea
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
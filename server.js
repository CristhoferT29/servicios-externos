import app from "./src/index.js";

process.loadEnvFile('.env');

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
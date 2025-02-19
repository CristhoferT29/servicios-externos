import axios from 'axios';
import { generarUsuarios, generarXML } from '../services/users.service.js';
const headers = {
    'Content-Type': 'text/xml; charset=utf-8',
    'SOAPAction': 'http://tempuri.org/saveEntity'
  };
const userController = async(req, res)=>{
    try{
        const { Proceso, Cantidad} = req.body;
        let usuarios = generarUsuarios(Cantidad, Proceso);
        let xml = generarXML(usuarios);
        const response = await axios.post(process.env.CONTRATO, xml, { headers });
        const data = response.data;
        const status = response.status;
        console.log(data);
        console.log(status);
        res.status(status).json({
            status: status.toString(),
            message: "Registros atados correctamente",
            data: data
        });
        
    }catch(error){
        const statusCode = error.response ? error.response.status : 500;
        res.status(statusCode).json({
            status: statusCode.toString(),
            message: "Error al procesar la solicitud",
            data: error.response? error.response.data : error.message
        });
    }
} 

export { userController }
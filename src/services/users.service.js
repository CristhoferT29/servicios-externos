import { faker } from "@faker-js/faker";
import xml2js from 'xml2js';

function generarUsuarios(cantidad,idProceso){
    const usuarios = [];
    for(let i = 0; i < cantidad; i++){
        let objUser = {
            sNombreCompleto : faker.person.fullName(),
            sEmail: faker.internet.email(),
            sTelefono: faker.phone.number(),
            ServiciosExternosConNode: idProceso
        }
        usuarios.push(objUser);
    }
    return usuarios;

}

function generarXML(usuarios){
    let builder = new xml2js.Builder({ headless: true });
    let M_Usuarios = usuarios
    let obj = { 
            "soap:Envelope": {
                "$": {"xmlns:soap":"http://schemas.xmlsoap.org/soap/envelope/"},
                    "soap:Header":{},
                    "soap:Body":{
                        "tem:saveEntity":{
                            "$":{
                                "xmlns:tem":"http://tempuri.org/"
                            },
                            "tem:entityInfo":{
                                "BizAgiWSParam":{
                                    "Entities":{
                                        M_Usuarios
                                    }
                                }
                            }
                        }
                    }
                }
            }
    let xml = builder.buildObject(obj);
    return xml
    
}

export { generarUsuarios, generarXML }
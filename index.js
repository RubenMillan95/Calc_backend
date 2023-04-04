//1. crear un obketo express

const express=require('express');

//2. Crear un objtero que represente nuestra aplicación

const app=express();
app.use(express.json());

//2.5 Definir los entry point de la API
//Definir la ruta (la url) en donde va a responder nuestra API
//http://localhost:3000/ruta

 app.post(
   '/api/sumar',
   //Se requiere dos objetos que representan la petición
   //y la respuesta
   (req, res)=>{ 
    //To Do: Aquí va el procesamiento de la petición a esta ruta
    console.log("Alguien está conectandose a esta ruta!!");
    res.json(req.body); 
   }
 );

 app.post(
    '/api/restar',
    (req, res)=>{
        //console.log(req.body.numero_1);
        //res.json("ok");
        
        //forma corta
        const {numero_1, numero_2}=req.body;

        //forma larga 
        //const n1= req.body.numero_1;
        //const n2= req.body.numero_2;
        const resultado=numero_1-numero_2;
        res.json(resultado);
    }

 );

//cómo queda la ruta para dividir?
 app.post(
    '/api/dividir',
    (req, res)=>{

        try{
        const {numero_1,numero_2}= req.body;
        let resultado;
        //if(numero_2!=0){
        resultado=numero_1/numero_2;}
        catch(error){resultado=error;
        }
        //gestionar el error con if o try/catch
        //else{resultado="error";}
        res.json(resultado);
    }
)

//Taller:como crear una ruta que yo le pueda pasar un numero indeterminado de datos


//3. Crear un servicio para escuchar peticiones

app.listen(
     3000,
     ()=>{
        console.log("Servidor ejecutandose en el puerto 3000");
     } 
); 

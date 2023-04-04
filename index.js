//1. crear un obketo express

const express=require('express');

//2. Crear un objtero que represente nuestra aplicación

const app=express();
app.use(express.json());

app.use( function(req, res, next){
   res.header("Access-Control-Allow-Origin","*"); //desde cualquier url * las acepta
   res.header("Access-Control-Allow-Methods","POST");
   res.header("Access-Control-Allow-Headers","Content-Type");
   next();
});


//2.5 Definir los entry point de la API
//Definir la ruta (la url) en donde va a responder nuestra API
//http://localhost:3000/ruta

 app.post(
   '/api/sumar',
   //Se requiere dos objetos que representan la petición
   //y la respuesta
   (req, res)=>{ 
    const {numero_1, numero_2}=req.body;
    const resultado=parseFloat(numero_1) + parseFloat(numero_2);
    //To Do: Aquí va el procesamiento de la petición a esta ruta
    //console.log("Alguien está conectandose a esta ruta!!");
    //res.json(req.body);
    res.json(resultado); 
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
        const resultado=parseFloat(numero_1)-parseFloat(numero_2);
        res.json(resultado);
    }
);

 app.post(
    '/api/multiplicar',
    (req, res)=>{
        const {numero_1, numero_2}=req.body;
        const resultado=parseFloat(numero_1)*parseFloat(numero_2);
        res.json(resultado);
    }

 );

//cómo queda la ruta para dividir?
 app.post(
    '/api/dividir',
    (req, res)=>{
        let resultado;
        try{
        const {numero_1,numero_2}= req.body;
        //if(numero_2!=0){
        resultado=parseFloat(numero_1)/parseFloat(numero_2);}
        catch(error){resultado=error;}
        //gestionar el error con if o try/catch
        //else{resultado="error";}
        res.json(resultado);
    }
);

//Taller:como crear una ruta que yo le pueda pasar un numero indeterminado de datos


//3. Crear un servicio para escuchar peticiones

app.listen(
     3000,
     ()=>{
        console.log("Servidor ejecutandose en el puerto 3000");
     } 
); 

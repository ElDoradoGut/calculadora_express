import express from "express";

const app = express();

app.use(express.json());

app.get('/sumar', (req, res)=>{
    const x = req.body.num1;
    const y = req.body.num2;

    const result = x + y;

    return res.status(200).json({result});
})

app.get('/restar', (req, res)=>{
    const x = req.body.num1;
    const y = req.body.num2;

    const result = x - y;

    return res.status(200).json({result});
})

app.get('/multiplicar', (req, res)=>{
    const x = req.body.num1;
    const y = req.body.num2;

    const result = x * y;

    return res.status(200).json({result});
})

app.get('/dividir', (req, res)=>{
    const x = req.body.num1;
    const y = req.body.num2;

    if( y!= 0){
        const result = x / y;
        return res.status(200).json({result});
    } else {
        return res.status(400).json({"result": "DIVIDE BY ZERO"});
    }    
})

app.listen(4000,()=>{
    console.log("Conexion exitosa.")
})
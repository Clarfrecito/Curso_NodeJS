const express = require('express');
const app = express();
const dittoJSon = require('../pokemon/ditto.json');
app.disable('x-powered-by'); // Deshabilitar el encabezado x-powered-by
const PORT = process.env.PORT ?? 3000;
// app.use(express.json()); // Middleware para analizar JSON
app.use((req, res, next) => {
    if (req.method != 'POST') return next();
    if (req.headers['content-type'] != 'application/json') return next();
    let body = "";
    req.on("data", (chunk) => {
        body += chunk.toString(); // Convertir Buffer a string
    });
    req.on("end", () => {
        const data = JSON.parse(body);
        data.timestamp = Date.now();
        req.body = data; // Agregar el cuerpo analizado a req
        next();
    });
})
app.get('/pokemon/ditto', (req, res) => {
    res.json(dittoJSon); // Cambiado de res.send a res.json
})
app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body); // Cambiado de res.send a res.json
})
app.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
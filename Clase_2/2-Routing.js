const http = require("node:http");
const dittoJSon = require("../pokemon/ditto.json");
const processRequest = (req, res) => {
    const { method, url } = req;

    switch (method) {
        case "GET":
            switch (url) {
                case "/pokemon/ditto":
                    res.setHeader("Content-Type", "apllication/json; charset=utf-8");
                    return res.end(JSON.stringify(dittoJSon));
                    break
                default:
                    res.statusCode = 404; // Not Found
                    res.setHeader("Content-Type", "text/html; charset=utf-8");
                    return res.end("<h1>404 Not Found</h1>");
                    break
            }
        case "POST":
            switch (url) {
                case "/pokemon": {
                    let body = ""; // Cambiado de const a let
                    req.on("data", (chunk) => {
                        body += chunk.toString(); // Convertir Buffer a string
                    });
                    req.on("end", () => {
                        try {
                            const data = JSON.parse(body); // Analiza el JSON recibido
                            res.writeHead(201, {
                                "Content-Type": "application/json; charset=utf-8",
                            });
                            data.timestamp = Date.now(); // Agrega un timestamp al objeto
                            res.end(JSON.stringify(data)); // Responde con el mismo JSON
                        } catch (err) {
                            console.error("Error parsing JSON:", err);
                            res.writeHead(400, {
                                "Content-Type": "application/json; charset=utf-8",
                            });
                            res.end(JSON.stringify({ error: "Invalid JSON" }));
                        }
                    });
                    break
                }
                default:
                    res.statusCode = 404; // Not Found
                    res.setHeader("Content-Type", "text/html; charset=utf-8");
                    return res.end("<h1>404 Not Found</h1>");
                    break
            }
    }
};
const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
    console.log("Press Ctrl+C to stop the server");
});

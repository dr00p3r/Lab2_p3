const express = require('express');

const app = express();

//Endpoint que responde un mensaje
app.get('/', (_req, res) => {
        res.send('Integración continua funcionando');
    }
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
        console.log(`Servidor en puerto ${PORT}`);
    }
);
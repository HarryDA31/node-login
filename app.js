
/**
	* Node.js Login Boilerplate
	* https://node-login.braitsch.io
	* (c) 2013-2021 Stephen Braitsch
**/

//	https://www.npmjs.com/package/@braitsch/express
const express = require('@braitsch/express');

const app = express();

// Configurar el puerto
const PORT = process.env.PORT || 3000;

// Iniciar Express
express.log('./logs');
express.http(app);
express.init(__dirname, app, 'node-login', true);

// Asegurarse de que la aplicación escuche en todas las interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

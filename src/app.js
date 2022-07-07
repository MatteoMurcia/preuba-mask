const express = require("express");
const app = express();
const PORT = process.eventNames.PORT || 3000;
const path = require("path");

const frontRoutes = require('./routes/frontRoutes');

app.use('/', frontRoutes);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(PORT, function () { console.log(`Servidor corriendo en el puerto ${PORT}`) });
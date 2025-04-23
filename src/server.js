require ('dotenv').config()
const express = require('express');
const connectDB = require ('./config/client')
const chalk = require('chalk')
const carRoutes = require('./routes/CarRoute')

const app = express();
app.use(express.json());


app.get('/', (req, res) =>{
    res.end('Hola Mundo Node')
})
connectDB()

app.use('/api', carRoutes);

const PORT = 3000;
const IP = "localhost"

app.listen(PORT, IP, ()=> {
    try {
        console.log(chalk.green('...Iniciando Servidor...'));
        console.log(chalk.blue(`✅Servidor iniciado en ${IP}:${PORT}`));
      } catch (error) {
        console.error(chalk.red('❌ Error al iniciar el Servidor:'), error);
      }
    
})
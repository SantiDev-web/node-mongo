require('dotenv').config()
const mongoose = require('mongoose')
const chalk = require('chalk')

const mongo_URI = process.env.mongo_URI

const connectDB = async() =>{
    try{
        console.log(chalk.blue('🔌Conectando a la base de datos'))
        await mongoose.connect(mongo_URI, {dbName:'cardatabase'})
        console.log(chalk.green('✅ Conectado a la base de datos'))
    }catch(error){
        console.error(chalk.red('❌ Error al conectar a la base de datos:', error))
        process.exit(1);
    }
}

module.exports = connectDB;
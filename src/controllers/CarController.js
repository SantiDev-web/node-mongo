const car = require('../models/CarModel');
const chalk = require('chalk')

const CreatenewCar = async (req, res) =>{
    const {marca, modelo, color, combustible} = req.body

    try{
        const existingCar = await car.findOne({modelo})

        if(existingCar){
            return res.status(400).json({message: 'El coche ya existe'})
        }

        const newCar = new car({marca, modelo, color, combustible});
        const savedCar = await newCar.save();

        res.status(201).json(savedCar);
        console.log(chalk.yellow('Coche creado con exito', savedCar))
    }catch(error){
        res.status(500).json({message:'Error al guardar el coche', error: error.message});
    }
};

const getAllCars = async (req, res) =>{
    try{
        const cars = await car.find();

        if(cars.length ===0){
            return res.status(404).json({message: 'No se encontraron coches'});
        }

        res.status(200).json({cars});
        console.log(chalk.green('Coches obtenidos con exito', cars));
    }catch(error){
        res.status(500).json({message: 'Error al obtener los coches', error: error.message});
        console.error(chalk.red('Error al obtener los coches:', error.message));
    }
};

module.exports= {CreatenewCar, getAllCars};
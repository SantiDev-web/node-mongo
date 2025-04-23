# Conexión a MongoDB con Node.js y Express

Este repositorio tiene como objetivo enseñarte a configurar de manera adecuada una conexión a MongoDB utilizando Node.js y Express, con un enfoque en mantener el código limpio y bien estructurado.

---

## ✨ Características principales

- ⚙️ **Configuración profesional**: Aprende a estructurar tu proyecto para escalar con facilidad.
- 📚 **Uso de Mongoose**: Integra MongoDB con el ODM Mongoose.
- 🗂️ **Separación de responsabilidades**: Organización clara en carpetas y archivos.
- 🛠️ **Buenas prácticas**

---

## 🌐 Tecnologías utilizadas

- 🟢 [Node.js](https://nodejs.org/): Entorno de ejecución para JavaScript.
- 🚀 [Express](https://expressjs.com/): Framework minimalista para Node.js.
- 🍃 [MongoDB](https://www.mongodb.com/): Base de datos NoSQL.
- 📘 [Mongoose](https://mongoosejs.com/): ODM para MongoDB.

---

## ⚖️ Estructura del proyecto

```plaintext
project/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── CarModel.js
│   ├── routes/
│   │   └── CarRoute.js
│   ├── controllers/
│   │   └── CarController.js
│   ├── Middlewares/
│   └── server.js
└── package.json
```

---

## 📖 Instalación y configuración

1. 🛠️ **Clona el repositorio**:

   ```bash
   git clone https://github.com/tuusuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. 📦 **Instala las dependencias**:

   ```bash
   npm install
   ```

3. 🔧 **Configura las variables de entorno**:

   Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

   ```env
   mongo_URI=tu_cadena_de_conexion_a_mongodb
   ```

4. ▶️ **Inicia el servidor**:

   Navega hasta /src e introduce el siguiente comando en la terminal:

   ```bash
   npm run dev
   ```

---

## 🌄 Uso

Accede a `http://localhost:3000` para comenzar a interactuar con tu API. Explora las rutas proporcionadas y personalízalas según tus necesidades.

---

## ☑️ Ejemplos de uso

- En este caso he usado PostMan para interactuar con la API:
   - GET `http://localhost:3000/api/cars` (Obtendremos todos los vehiculos)
   - POST `http://localhost:3000/api/newcar` le pasamos al body en formato json nuestro modelo ejemplo:

   ## Ejemplo de JSON

```json
{
  "marca": "Ford",
  "modelo": "Transit Custom",
  "color": "Azul",
  "combustible": {
    "tipo": "Diesel",
    "litros": 50
  }
}
```

---

## 🔧 Contribución

¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes alguna idea para mejorar el proyecto, abre un issue o envía un pull request.

---

## 🎉 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más información.


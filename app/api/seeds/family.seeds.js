const mongoose = require('mongoose');
const dotenv =require("dotenv")
dotenv.config();
const Family =require('../models/family.model');

const habitats = [
    {
        id: 1,
        name:"prueba" ,
        livingInGroup:true ,
        habitat:"Tierra"
    },
    {
        id: 2,
        name:"prueba2" ,
        livingInGroup:false ,
        habitat:"Tierra"
    },
    {
        id: 3,
        name:"prueba3" ,
        livingInGroup:true ,
        habitat:"Tierra"
    },
    {
        id: 4,
        name:"prueba4" ,
        livingInGroup:false ,
        habitat:"Tierra"
    },

  ];

const movieArr=habitats.map(m=>new Family(m))

  mongoose
  .connect("mongodb+srv://root:root@cluster0.dzgss.mongodb.net/jungla?retryWrites=true&w=majorit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		// Utilizando Character.find() obtendremos un array con todos los personajes de la db
    const allMovies = await Family.find();
		 
		// Si existen personajes previamente, dropearemos la colección
    if (allMovies.length) {
      await Family.collection.drop(); //La función drop borra la colección
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la db de los personajes, usaremos el array characterDocuments
		// para llenar nuestra base de datos con todas los personajes.
		await Family.insertMany(movieArr);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());
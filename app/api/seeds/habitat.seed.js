const mongoose = require('mongoose');
const dotenv =require("dotenv")
dotenv.config();
const Habitat =require('../models/habitat.model');


const habitats = [
    {
        id: 1,
        name:"Amazonas" ,
        location:"8 00 N, 66 00 W" ,
        mode:"Tierra"
    },
    {
        id: 2,
        name:"Amazonas2" ,
        location:"8 00 N, 66 00 W" ,
        mode:"Tierra"
    },
    {
        id: 3,
        name:"Amazonas3" ,
        location:"8 00 N, 66 00 W" ,
        mode:"Tierra"
    },
    {
        id: 4,
        name:"Amazonas4" ,
        location:"8 00 N, 66 00 W" ,
        mode:"Tierra"
    },

  ];

const movieArr=habitats.map(m=>new Habitat(m))

  mongoose
  .connect("mongodb+srv://root:root@cluster0.dzgss.mongodb.net/jungla?retryWrites=true&w=majorit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		// Utilizando Character.find() obtendremos un array con todos los personajes de la db
    const allMovies = await Habitat.find();
		 
		// Si existen personajes previamente, dropearemos la colección
    if (allMovies.length) {
      await Habitat.collection.drop(); //La función drop borra la colección
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la db de los personajes, usaremos el array characterDocuments
		// para llenar nuestra base de datos con todas los personajes.
		await Habitat.insertMany(movieArr);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());
const mongoose = require('mongoose');

const main = async() => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nts2hfn.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("Conectado ao banco!");
        
    } catch(err) {
        console.log(`Erro na conexão do banco de dados: ${err}`)
    }
}

module.exports = main;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@wordle.xcwww.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const testDb = function (req, res, next) {
    client.connect(err => {
        if (err) throw err;
        console.log("Bhai connect ho gya!!!!");
        const collection = client.db().collection("test");
        client.close();
        next();
    });
}

module.exports = testDb;
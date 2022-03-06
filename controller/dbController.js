const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@wordle.xcwww.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const testDb = function (req, res, next) {
    client.connect(connectionErr => {
        if (connectionErr) throw connectionErr;
        const collection = client.db("WordleDB").collection("test");
        collection.findOne({}, (fetchError, result) => {
            if (fetchError) throw fetchError;
            console.log(result);
            client.close();
            next();
        })
    });

}

module.exports = testDb;
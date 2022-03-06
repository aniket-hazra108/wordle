const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ritwik:0zQzdbpPSpkUKsK0@cluster0.qv9hd.mongodb.net/WordleDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err) throw err;
    const collection = client.db("WordleDB").collection("test");
    console.log(collection);
    // perform actions on the collection object
    client.close();
});
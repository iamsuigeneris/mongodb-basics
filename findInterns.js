var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// Query to find the first document
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("myMovies").findOne({}, function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});

// Query to find the ratings of 7
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    var query = { rating: 7 };

    dbo.collection("myMovies").find(query).toArray(function(err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});

// Query to return only movie title
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("myMovies").find({}, { projection: { movie: 1 } }).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});

// Query to find the all document
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("myMovies").find({}).toArray(function (err, res) {
        if (err) throw err;
        console.log(`Updated myMovies collection`)
        console.log(res);
        db.close();
    });
});
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mydb')

    // dbo.createCollection('interns', function(err, res) {
    //     if (err) throw err;
    //     console.log('Interns collection successfully created!')
    //     db.close();

    dbo.createCollection('myMovies', function (err, res) {
        if (err) throw err;
        console.log(`MyMovies collection was successfully created!`)
        db.close();
    })

    var movies = [
        { movie: 'The Banker', year: '2020', rating: 8 },
        { movie: 'Bad Boys', year: '2020', rating: 7 },
        { movie: 'The Hunt', year: '2020', rating: 7 },
        { movie: 'Bloodshot', year: '2020', rating: 7.5 },
        { movie: 'First Cow', year: '2020', rating: 6.5 }
    ]

    dbo.collection('myMovies').insertMany(movies, function (err, res) {
        if (err) throw err;
        console.log(res)
        db.close();
    })
})

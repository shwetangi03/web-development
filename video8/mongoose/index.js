var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1',{useNewUrlParser:true,useUnifiedTopology:true});

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function(){
//     //we're Connected!
//     console.log("We are Connected Bro...")
// });

var kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function () {
    var greeting = "My name is " + this.name
    console.log(greeting);
  }  

var Kitten = mongoose.model('shwetangiKitty',kittySchema);

var shwetangiKitty= new Kitten({ name: 'shwetangiKitty' });
// console.log(shwetangiKitty.name); // 'Silence'

// shwetangikitty.speak();

shwetangiKitty.save(function (err, shwetangiKitty) {
    if (err) return console.error(err);
    shwetangiKitty.speak();
  });


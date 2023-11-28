// use shwetangiKart
// insert
db.items.insertOne({name:"samsung 30s",price:22000,rating:4.5,qty:233,sold:98})  

db.items.insertMany({name:"samsung 30s",price:22000,rating:4.5,qty:233,sold:98},{name:"redmi",price:20000,rating:4.0,qty:230,sold:90},{name:"iphone 14 pro max",price:220000,rating:4.5,qty:23,sold:19},{name:"1+",price:32000,rating:4.5,qty:200,sold:99})
// find 
// db.items.find({rating:($gt:3.5)})

db.items.find({rating:{$gt:3.5},price:{$gt:23000}})

db.items.find({$or:[{rating:{$lt:3.5}},{price:{$gt:32000}}]})

db.items.find({rating:{$gt:4}},{rating:1})

db.items.find({rating:{$gt:4}},{rating:1,qty:1})

db.items.deleteOne({price:22000})

// crud create read update delete 

db.items.updateOne({name:"samsung 30s"},{$set:{price:2}})

db.items.updateMany({name:"redmi"},{$set:{price:4}},{$set:{rating:3}})

// compass
// steps for terminal to run website 
// mpm    /npm init  /npm install mongoose

const {MongoClient} = require("mongodb");


const client = new MongoClient(process.env.url);

module.exports ={
  //complete conection
    db:null,

    //connection to particular collections
    events:null,
    users:null,

     async connect(){
      //connection to database
     await client.connect();
     console.log("Connected to URL:",process.env.url);

     //select the database
     this.db=client.db(process.env.DB_Name);
     console.log("Selected Database:",process.env.DB_Name);

      //select the collection
     this.events = this.db.collection("events");
     this.users = this.db.collection("users");
  },
};



const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId=require("mongodb").ObjectId
const uri = "mongodb+srv://abskawser:abskawser@cluster0.zguyzcy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });
client.connect(async (err) => {
    const db = client.db("baby_shop_db");
    const userCollections = db.collection("users");
// all data dakher jonno 
    const allUser = await userCollections.find().toArray();

 //insert new data use insertone
//    let data={
//     name:"Ethian",
//     address:"narayan gonj"
//    }
//  let newCollection=await useCollections.insertOne(data)
//     console.log(newCollection,data);


// insertMany 
//  const dataList =[{
//      name:"Ethian",
//      address:"narayan gonj",
     
//  },
//  {
//     name:"kawser",
//     address:"dhaka",
//  },
//  {
//     name:"ali",
//     address:"tongi",
//  },
//  {
//     name:"humayon",
//     address:"gazipur"
//  }

// ]
//     let insertManydata=await useCollections.insertMany(dataList)
//     console.log(insertManydata);
//     console.log(dataList);

// fin data
// let findData= await userCollections.findOne({
//    //name:'Ethian',
// //    find by id
//    _id:ObjectId("63abe847ab9907361c2a0e9c"),
// })
// console.log(findData);


//update data 
// let updateData={
//      name:"bali",
//      address:"tongi-cherag-ali",
// }

//  let updateStatus= await userCollections.updateOne({

//    _id:ObjectId("63abe847ab9907361c2a0e9c"
//     ),
// },{
//     $set:updateData
// });
// console.log(updateData,updateStatus);

 









    // perform actions on the collection object
    client.close();
});


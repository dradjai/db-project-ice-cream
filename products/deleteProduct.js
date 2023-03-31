import {client, productsCollection} from "../mongoConnect.js";

const deleteProd = async () => {

  try {
    await client.connect();
    const deleteProdRes = await productsCollection.deleteOne({name: 'banana split'});
    console.log(deleteProdRes);
    
  } catch (error) {
    console.log(error);
  }
  finally{
    await client.close();
  }

}

deleteProd();
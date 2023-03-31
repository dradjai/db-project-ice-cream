import { client, productsCollection } from "../mongoConnect.js"


const getAllProducts = async () => {

  try {
    await client.connect();
    const allProducts = await productsCollection.find().toArray();
    console.log(allProducts);
  
    
  } catch (error) {
    console.log(error);
  }
  finally{
    await client.close();

  }

}

getAllProducts();
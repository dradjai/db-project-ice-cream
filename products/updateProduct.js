import {client, productsCollection} from "../mongoConnect.js";


const updateProduct = async () => {
  
  try {
      await client.connect();
      const editProduct = await productsCollection.findOneAndUpdate(
        {name: 'banana split'}, 
        {$set: {name: 'milkshake'}})
        console.log(editProduct);
      
    } catch (error) {
      console.log(error);
    }
    finally{
      await client.close();
    }

}

updateProduct();
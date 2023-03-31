import { client, productsCollection } from "../mongoConnect.js";



const addProduct = async () => {
  try {
  await client.connect();

  const myProduct = {
    name: 'banana split',
    size: 'medium',
    price: 10,
    isDelicious: true  
  }

  const addMyProduct = await productsCollection.insertOne(myProduct);
  console.log(addMyProduct);
  
} catch (error) {
  console.log(error);
  
} finally{
  await client.close();
}
}

addProduct();
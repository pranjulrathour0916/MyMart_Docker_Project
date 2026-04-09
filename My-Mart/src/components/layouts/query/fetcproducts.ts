import axios from "axios";

export interface cartItem {
  prodId: Number;
  quantity: Number;
}

export const fectProducts = async (category?: number) => {
  console.log("query", category);
  const productsList = await axios.get(
    "https://martdb-2.onrender.com/prod/getallProd/",
    {
      params: category ? { category } : {},
    },
  );
  return productsList.data;
};

export const fectProductsById = async (id: any) => {
  console.log("params", id);
  const productsList = await axios.get(
    `https://martdb-2.onrender.com/prod/getProdById/${id}`,
  );
  console.log("works");
  return productsList.data;
};

export const addtocart = async (item: cartItem) => {
  console.log("item. ", item);
  const addItem = await axios.post("https://martdb-2.onrender.com/prod/cart", item, {
    withCredentials: true,
  });
  console.log("added item", addItem);
  return addItem;
};

export const getCartItem = async () => {
  const carItem = await axios.get("https://martdb-2.onrender.com/prod/cartItem", {
    withCredentials: true,
  });
  console.log("cartItem are ", carItem.data[0]);
  return carItem.data;
};

export const deleteCartItem = async (prod_id: any) => {
  const deletItem = await axios.delete(
    "https://martdb-2.onrender.com/prod/deletecartitem",
    {
      data: {
        prod_id 
      },
      withCredentials: true,
    },
  );
  console.log("item deleted", deletItem)
  return deletItem.data;
};

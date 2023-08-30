// import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  items: [],
  datas:[],
  

  addItem: (item) => {
    let currentItems = get().items;

    // const duplicateItem = currentItems.find(
    //   (existingItem) => existingItem.id === item.id
    // );
    // if (duplicateItem) {
    //   alert("Item already exists in the list.");
    //   return;
    // }

    let totalItems = [item];
    set({
      items: totalItems,
    });

    // setCookie("addToCartProducts", JSON.stringify(totalItems));
  },


  addData: (item) => {
    let data = get().datas;

    let Totaldata = [...data, item];
    set({
      datas: Totaldata,
    });

   
  },

  // removeItem: (id) => {
  //   console.log(id);
  //   let remainingProducts = [...get().items].filter((prod) => prod.id !== id);
  //   deleteCookie("addToCartProducts");
  //   setCookie("addToCartProducts", JSON.stringify(remainingProducts));
  //   return set({
  //     items: remainingProducts,
  //   });
  // },

  // increment: (id) => {
  //   console.log(id);
  //   let newData = [];
  //   get().items.map((i) => {
  //     if (i.id === id) {
  //       i.quantity += 1;
  //     }
  //     newData.push(i);
  //   });
  //   set({
  //     items: newData,
  //   });
  //   setCookie("addToCartProducts", JSON.stringify(newData));
  // },

  // decrement: (id) => {
  //   console.log(id);
  //   let newData = [];
  //   get().items.map((i) => {
  //     if (i.id === id) {
  //       // Prevent the quantity from going below 0
  //       i.quantity = Math.max(1, i.quantity - 1);
  //     }
  //     newData.push(i);
  //   });
  //   set({
  //     items: newData,
  //   });
  //   setCookie("addToCartProducts", JSON.stringify(newData));
  // },

  // setItemFromCookie: () => {
  //   let _ = [];
  //   const CookieData = getCookie("addToCartProducts"); // => 'value'
  //   if (CookieData) {
  //     _ = JSON.parse(CookieData);
  //   }

  //   return set({
  //     items: _,
  //   });
  // },
}));

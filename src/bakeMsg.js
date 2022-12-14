export function messageJusto(o) {
  const datos = o.data.order;
  const productos = [];
  const price = [];

  // use "For" for the products array

  for (let i = 0; i < datos.items.length; i++) {
    const item = datos.items[i];
    const producto = item.product;
    const priceProduct = item.productPrice;
    const amount = item.amount;
    price.push(`$${priceProduct}`);
    productos.push(
      `${producto.name}, ${amount} ${item.amount === 1 ? "unit" : "units"} x $${
        priceProduct * amount
      };`
    );
  }

  const details = productos.join(`\n> `);

  const msg = `
   #### EDIT YOUR MSG ####
  **---------------------------------------**
   orderID: **${datos.fullCode}**
  \n  |--->*Client data*<---|
  \n> **${datos.buyerName}**\n> **${datos.phone}**\n> **${datos.email}**
  \n  |--->*Products*<---|
  \n> ${details} 
  \n  |--->*go o Delivery*<---|
  \n> **${datos.deliveryType === "delivery" ? "delivery" : "go"}**
  \n  |--->*Prices*---<|
  \n> Delivery + tip ---> ${datos.tipAmount + datos.deliveryFee}
  > Products ---> ${datos.itemsPrice}
  > **Total ---> ${datos.totalPrice}**
  > **CUPON --->${datos.couponName}**
  **---------------------------------------**
  
  `;
  return { msg };
}

let number = 1000;

console.log(
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    number
  )
);

console.log(`Rp. ${number.toLocaleString()},00`);

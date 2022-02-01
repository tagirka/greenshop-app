// module.exports = () => {
//   const data = { users: [] };
//   // Create 1000 users
//   for (let i = 0; i < 1000; i++) {
//     data.users.push({ id: i, name: `user${i}` });
//   }
//   return data;
// };

// Load Chance
const Chance = require("chance");

// Instantiate Chance so it can be used
const chance = new Chance();

// Use Chance here.
// const my_random_string = chance.string();

const getUniq = (prefix) => {
  return prefix + chance.string({ numeric: true, length: 20, alpha: true });
};

module.exports = () => {
  const data = { product: [], category: [], size: [] };

  const category = [
    {
      _id: getUniq("category"),
      title: "House Plants",
    },
    {
      _id: getUniq("category"),
      title: "Potter Plants",
    },
    {
      _id: getUniq("category"),
      title: "Seeds",
    },
    {
      _id: getUniq("category"),
      title: "Bid Plants",
    },
    {
      _id: getUniq("category"),
      title: "Succulents",
    },
    {
      _id: getUniq("category"),
      title: "Terrariums",
    },
    {
      _id: getUniq("category"),
      title: "Gardening",
    },
    {
      _id: getUniq("category"),
      title: "Accessories",
    },
  ];

  const size = [
    {
      _id: getUniq("size"),
      title: "Small",
    },
    { _id: getUniq("size"), title: "Medium" },
    { _id: getUniq("size"), title: "Large" },
  ];

  const product = [...Array(100)].map((_, idx) => ({
    _id: idx + "__" + chance.string({ numeric: true, length: 8 }),
    title: chance.name({ length: 5 }),
    image: "/product" + chance.integer({ min: 2, max: 4 }) + ".png",
    cost: chance.integer({ min: 0, max: 1000 }),
    categories: chance.pickset(
      category,
      Math.ceil(Math.random() * 3).toFixed()
    ),
    size: chance.pickset(size, Math.ceil(Math.random() * 2).toFixed()),
  }));

  const sale = [...Array(20)].map((_, idx) => ({
    _id: idx + "__" + chance.string({ numeric: true, length: 8 }),
    product: chance.pickset(product, 1).shift(),
    dateStart: null,
    dateEnd: null,
    costOnSale: chance.integer({ min: 100, max: 1000 }),
    costOnSalePercent: !chance.integer({ min: 0, max: 20 })
      ? null
      : chance.integer({ min: 0, max: 20 }),
  }));

  return { ...data, product, category, size, sale };
};

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

const countProducts = 100;
const hotProducts = 30;

const getUniq = (prefix) => {
  return `${prefix}__${chance.string({
    numeric: true,
    length: 20,
    alpha: true,
  })}`;
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
      short: "S",
    },
    { _id: getUniq("size"), title: "Medium", short: "M" },
    { _id: getUniq("size"), title: "Large", short: "L" },
    { _id: getUniq("size"), title: "XLarge", short: "XL" },
  ];

  const product = [...Array(countProducts)].map((_, idx) => ({
    _id: idx + "__" + chance.string({ numeric: true, length: 8 }),
    title: chance.name({ length: 5 }),
    image: "/product" + chance.integer({ min: 1, max: 4 }) + ".png",
    cost: chance.integer({ min: 0, max: 1000 }),
    categories: chance.pickset(
      category,
      Math.ceil(Math.random() * 3).toFixed()
    ),
    size: chance.pickset(size, Math.ceil(Math.random() * 2).toFixed()),
    sku: chance.string({ casing: true, numeric: true, length: 12 }),
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

  const hot = [...Array(hotProducts)].map((_, idx) => ({
    _id: idx + "__" + chance.string({ numeric: true, length: 8 }),
    product: chance.pickset(product, 1).shift(),
  }));

  const rating = [...Array(250)].map((item, idx) => ({
    _id: getUniq("rating"),
    product: chance.pickset(product, 1).shift(),
    rating: {
      date: chance.date({ year: 2022 }),
      count: chance.integer({ min: 1, max: 5 }),
      user: chance.name(),
    },
  }));

  const description = product.map((p) => {
    return {
      product: p._id,
      short:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
      long:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.\n" +
        "Living Room:\n" +
        "\n" +
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
        "Dining Room:\n" +
        "\n" +
        "The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.\n" +
        "Office:\n" +
        "\n" +
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };
  });

  return { ...data, product, category, size, sale, rating, description };
};

export const products = [
  {
    id: 1,
    name: "Asafoetida Powder",
    slug: "asafoetida-powder",
    description: `
      LTK Asafoetida Powder

      A Dash of Aroma, A World of Flavor
      
      LTK Asafoetida Powder brings the authentic essence of traditional Indian cooking to your kitchen. 
      Known for its unique aroma and health benefits, this premium-quality spice is a must-have 
      for enhancing the flavor of your dishes.
      
      - Pure & Potent: Made from high-grade asafoetida for unmatched flavor and aroma.
      - Digestive Aid: Naturally supports digestion and promotes gut health.
      - Versatile Ingredient: Perfect for tempering dals, curries, and pickles, and elevating
        the taste of vegetarian and vegan recipes.
      - No Additives or Preservatives: 100% natural and free from artificial ingredients.`,
    reviews: [
      {
        id: '1',
        name: "Deepa Nair",
        description:
          "The quality of this asafoetida is exceptional. Its freshness and purity perfectly align with the brand's commitment to excellence.",
      },
      {
        id: '2',
        name: "Dr. Vivek Gupta",
        description:
          "This product stands out for its quality and authenticity. As a trusted brand, they've retained the traditional medicinal essence of asafoetida.",
      },
      {
        id: '3',
        name: "Kavitha Rao",
        description:
          "I’ve tried many brands, but this one truly elevates my cooking. You can tell it’s made with care and premium ingredients.",
      },
    ],
    image_url: "/assets/asafoetida-powder.png",
    discount_price: 60.0,
    mrp: 80.0,
    quantity: ["50", "75", "100", "150"],
    weight: 50.0,
    available: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Millet Instant Mix",
    slug: "millet-instant-mix",
    description: `
    LTK Millet Dosa Mix
    Wholesome Goodness in Every Bite
    
    Experience the perfect blend of nutrition and flavor with LTK Millet Dosa Mix. 
    Crafted using a variety of nutrient-rich millets, this mix is your go-to solution for a 
    quick, healthy, and delicious dosa.
    
    -100% Natural Ingredients: Made with high-quality millets, rich in fiber and essential nutrients.
    ~Gluten-Free & Vegan-Friendly: Suitable for all dietary preferences, ensuring everyone
     can enjoy a hearty meal.
    ~Quick & Easy Preparation: Just add water, mix, and your batter is ready in minutes.
    Perfect for All Ages: A wholesome choice for breakfast, dinner, or a quick snack.`,
    reviews: [
      {
        id: '1',
        name: "Anjali Singh",
        description:
          "The Millet Instant Mix reflects the brand's focus on quality. It's a wholesome and trustworthy choice for my clients.",
      },
      {
        id: '2',
        name: "Rohit Malhotra",
        description:
          "This mix truly upholds the brand’s promise of nutrition and taste. The millets are of top-notch quality, and the flavor is outstanding.",
      },
      {
        id: '3',
        name: "Sonia Dutta",
        description:
          "The brand has nailed it with this product! It’s healthy, convenient, and of unmatched quality—perfect for my hectic schedule.",
      },
    ],
    image_url: "/assets/millets-powder.png",
    discount_price: 90.0,
    mrp: 100.0,
    quantity: [
      "50",
      // "75",
      "100",
      "150",
    ],
    weight: 75.0,
    available: true,
    created_at: new Date().toISOString(),
  },
  // {
  //   id: 3,
  //   name: "Turmeric Powder",
  //   slug: "turmeric-powder",
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   image_url: "/assets/turmericPowder.jpg",
  //   discount_price: 40.0,
  //   mrp: 50.0,
  //   quantity: [
  //     // "50",
  //     "75",
  //     "100",
  //     "150",
  //   ],
  //   weight: 100.0,
  //   available: true,
  //   created_at: new Date().toISOString(),
  // },
  // {
  //   id: 4,
  //   name: "Ginger Powder",
  //   slug: "ginger-powder",
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   image_url: "/assets/gingerPowder.webp",
  //   discount_price: 55.0,
  //   mrp: 70.0,
  //   quantity: [
  //     "50",
  //     "75",
  //     "100",
  //     // "150",
  //   ],
  //   weight: 75.0,
  //   available: false,
  //   created_at: new Date().toISOString(),
  // },
  // {
  //   id: 5,
  //   name: "Chilli Powder",
  //   slug: "chilli-powder",
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   image_url: "/assets/chilliPowder.webp",
  //   discount_price: 45.0,
  //   mrp: 55.0,
  //   quantity: [
  //     "50",
  //     "75",
  //     // "100",
  //     "150",
  //   ],
  //   weight: 50.0,
  //   available: true,
  //   created_at: new Date().toISOString(),
  // },
  // {
  //   id: 6,
  //   name: "Cumin Powder",
  //   slug: "cumin-powder",
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   image_url: "/assets/cuminPowder.jpg",
  //   discount_price: 80.0,
  //   mrp: 100.0,
  //   quantity: [
  //     // "50",
  //     "75",
  //     "100",
  //     "150",
  //   ],
  //   weight: 100.0,
  //   available: true,
  //   created_at: new Date().toISOString(),
  // },
  // Additional products can be added here...
];

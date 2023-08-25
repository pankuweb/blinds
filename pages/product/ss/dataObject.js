export const productData = {
  status: "success",
  message: "Product data fetched successfully",
  product: {
    id: 1,
    sku: "Faux Wood fdsfdf",
    title: "Faux Wood Bldsdsdinds",
    short_description:
      "Affordable cordless faux wood blind option offered in modern, popular colors",
    long_description:
      "Affordable cordless faux wood blind option offered in modern, popular colors",
    image: "http://localhost:4000/uploads/image-1692018328939.png",
    gallery: [
      "http://localhost:4000/uploads/image-1692018806320.png",
      "http://localhost:4000/uploads/image-1692018806319.png",
      "http://localhost:4000/uploads/image-1692018806320.png",
    ],
    product_template: "Faux Wood Blinds",
    type: "blind",
    material: "xyzFaux Wood Blinds",
    weight: 80,
    barcode: "90879",
    unit_price: 25,
    discount_price: 10,
    meta_title: "about product",
    meta_description: "product details",
    unit_weight: 40,
    unit_in_stock: 50,
    shot_order: 20,
    width_from: 10,
    width_to: 110,
    height_from: 14,
    height_to: 80,
    category_id: 1,
    colorCategoery_id: '["1","2"]',
    added_at: "2023-08-16T11:07:13.000Z",
    updated_at: "2023-08-16T11:07:13.000Z",
    category: {
      id: 1,
      sku: "Clothing, Shoes & Jewelry..",
      title: "Clothing, Shoes & Jewelry",
      short_description:
        "Product category marketing helps brands focus their promotional efforts effectively by group",
      long_description:
        "Product category marketing helps brands focus their promotional efforts effectively by groupi",
      meta_title: "This is a Meta Title.",
      meta_description: "This is meta Description",
      parent_id: 0,
      banner:
        '["http://localhost:4000/uploads/1692084087312-389939027.webp","http://localhost:4000/uploads/1692084087313-401666901.webp"]',
      added_at: "2023-08-08T09:39:50.000Z",
      update_at: "2023-08-15T07:21:27.000Z",
    },
    color: [
      {
        id: 1,
        name: "Blue",
        price: 200,
        image: "",
        parent_id: "",
        status: "0",
        added_at: "2023-08-16T11:05:08.000Z",
        updated_at: "2023-08-16T11:05:08.000Z",
        colors: [
          {
            id: 1,
            name: "Yellow",
            price: 150,
            image:
              "https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop",
            cat_id: "1",
            status: "1",
            added_at: "2023-08-16T11:05:13.000Z",
            updated_at: "2023-08-16T11:05:13.000Z",
          },
          {
            id: 2,
            name: "Blue",
            price: 200,
            image:
              "https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop",
            cat_id: "1",
            status: "1",
            added_at: "2023-08-16T11:05:39.000Z",
            updated_at: "2023-08-16T11:05:39.000Z",
          },
          {
            id: 6,
            name: "Grey",
            price: 65,
            image:
              "https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop",
            cat_id: "1",
            status: "1",
            added_at: "2023-08-16T11:09:04.000Z",
            updated_at: "2023-08-16T11:09:04.000Z",
          },
        ],
      },
      {
        id: 2,
        name: "Green",
        price: 250,
        image:
          "https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop",
        parent_id: "",
        status: "0",
        added_at: "2023-08-16T11:06:10.000Z",
        updated_at: "2023-08-16T11:06:10.000Z",
        colors: [
          {
            id: 3,
            name: "Pink",
            price: 100,
            image:
              "https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop",
            cat_id: "2",
            status: "1",
            added_at: "2023-08-16T11:06:30.000Z",
            updated_at: "2023-08-16T11:06:30.000Z",
          },
          {
            id: 4,
            name: "Red",
            price: 80,
            image:
              "https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop",
            cat_id: "2",
            status: "1",
            added_at: "2023-08-16T11:06:48.000Z",
            updated_at: "2023-08-16T11:06:48.000Z",
          },
          {
            id: 5,
            name: "Grey",
            price: 65,
            image:
              "https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop",
            cat_id: "2",
            status: "1",
            added_at: "2023-08-16T11:08:35.000Z",
            updated_at: "2023-08-16T11:08:35.000Z",
          },
        ],
      },
    ],
  },
};

export const leftControl = [
  {
    id: 1,
    name: "Continuous Cord Loop",
    price: 10.36,
    offPrice: 58.28,
    description:
      "Continuous cord loop is a standard lift choice. The beaded chain pulley system raises and lowers your shade with ease.",
    image:
      "http://localhost:3000/_next/static/media/banner-image.214d651c.webp",
  },
  {
    id: 2,
    name: "Cordless",
    price: 10.36,
    offPrice: 58.28,
    description:
      "Motorized shades allow you to adjust the height of your shades, controlling the light, with a simple touch of a button, without getting up. Ultimate in convenience for hard to reach shades.",
    image:
      "http://localhost:3000/_next/static/media/banner-image.214d651c.webp",
  },
  {
    id: 3,
    name: "Geared Clutch",
    price: 10.36,
    offPrice: 58.28,
    description:
      "Cordless shades are a sleek choice, since there are no free hanging cords. Shade is raised by gently tugging once, then tugging again to stop the shade at the desired position. Safer choice for homes with small children and pets.",
    image:
      "http://localhost:3000/_next/static/media/banner-image.214d651c.webp",
  },
  {
    id: 4,
    name: "Pull Motor",
    price: 10.36,
    offPrice: 58.28,
    description:
      "A pull motor lift system uses a beaded chain to lift and lower the the shade with a simple tug.",
    image:
      "http://localhost:3000/_next/static/media/banner-image.214d651c.webp",
  },
  {
    id: 5,
    name: "Reverse Roll",
    price: 10.36,
    offPrice: 58.28,
    description:
      "With a reverse roll, the fabric hangs toward the room, away from the glass. Not available with a valance.",
    image:
      "http://localhost:3000/_next/static/media/banner-image.214d651c.webp",
  },
];

export const fabricRollDirection = [
  {
    id: 1,
    name: "Standard Roll",
    description:
      "With a standard roll, the fabric hangs toward the back of the window, closer to the glass, for better privacy and light blockage.",
    image:
      "http://localhost:3000/_next/static/media/banner-image.214d651c.webp",
  },
  {
    id: 2,
    name: "Reverse Roll",
    description:
      "With a reverse roll, the fabric hangs toward the room, away from the glass. Not available with a valance.",
    image:
      "http://localhost:3000/_next/static/media/banner-image.214d651c.webp",
  },
];

export const multiShades = [
  {
    id: 1,
    name: "Standard Roll",
    description:
      "With a standard roll, the fabric hangs toward the back of the window, closer to the glass, for better privacy and light blockage.",
    image:
      "http://localhost:3000/_next/static/media/banner-image.214d651c.webp",
  },
];

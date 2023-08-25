export const constrols = [
  {
    id: 1,
    title: "Cord",
    description:
      "Cords are a standard lift choice. Corded products have multiple free-hanging pull cords and are not recommended in homes with children and pets.",
    image:
      "https://www.blinds.com/product-images/e676a4a2-fcff-e911-9476-0a986990730e.jpg",
    price: null,
    offPrice: null,
    child_controls: [
      {
        title: "Choose your tilt",
        tilt_obj: [
          {
            id: 1,
            title: "Wand",
            description: `A tilt wand is a standard choice for opening and closing your blinds' slats. It is a safer tilt choice for homes with children and pets.`,
            price: "",
            offPrice: "",
            block_light_id: 1,
            image:
              "https://www.blinds.com/product-images/d1868f0f-dcff-e911-9476-0a986990730e.jpg",
          },
          {
            id: 2,
            title: "Cord",
            description: `Cords are a standard lift choice. Corded products have multiple free-hanging pull cords and are not recommended in homes with children and pets.`,
            price: "",
            offPrice: "",
            block_light_id: 1,
            image:
              "https://www.blinds.com/product-images/e676a4a2-fcff-e911-9476-0a986990730e.jpg",
          },
          {
            id: 3,
            title: "Ring",
            description: `Ring Tilt will have a small ring attached to the tilter instead of a wand.  A control pole can be used to tilt your blind.`,
            price: "",
            offPrice: "",
            image:
              "https://www.blinds.com/product-images/f72d126e-6b0d-ea11-9476-0a986990730e.jpg",
            child_controls: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Ring Pull",
    description:
      "Ring Pull is a corded product without long dangling cords.  There is a ring attached to the pull cord and can be used with a control pole.",
    image:
      "https://www.blinds.com/product-images/f72d126e-6b0d-ea11-9476-0a986990730e.jpg",
    price: "10.36",
    offPrice: "14.80",
    child_controls: [
      {
        id: 1,
        title: "Choose your tilt",
        tilt_obj: [
          {
            id: 1,
            title: "Wand",
            description: `A tilt wand is a standard choice for opening and closing your blinds' slats. It is a safer tilt choice for homes with children and pets.`,
            price: "",
            offPrice: "",
            block_light_id: 2,
            extended_control_pool_id: 1,
            image:
              "https://www.blinds.com/product-images/d1868f0f-dcff-e911-9476-0a986990730e.jpg",
          },
          {
            id: 2,
            title: "Cord",
            description: `Cords are a standard lift choice. Corded products have multiple free-hanging pull cords and are not recommended in homes with children and pets.`,
            price: "",
            offPrice: "",
            block_light_id: 1,
            image:
              "https://www.blinds.com/product-images/e676a4a2-fcff-e911-9476-0a986990730e.jpg",
            child_controls: [],
          },
          {
            id: 3,
            title: "Ring",
            description: `Ring Tilt will have a small ring attached to the tilter instead of a wand.  A control pole can be used to tilt your blind.`,
            price: "",
            offPrice: "",
            image:
              "https://www.blinds.com/product-images/f72d126e-6b0d-ea11-9476-0a986990730e.jpg",
            child_controls: [],
            extended_control_pool_id: 1,
          },
        ],
      },
      {
        id: 1,
        title: "asdfasdf",
        extended_pool_obj: [
          {
            id: 1,
            title: "No Control Pole Needed",
            description: ``,
            price: "",
            offPrice: "",
            image:
              "https://www.blinds.com/product-images/0a8798d2-d311-e811-946d-0a986990730e.jpg",
          },
          {
            id: 2,
            title: "6' Control Pole",
            description: ``,
            price: "15.29",
            offPrice: "25.48",
            image:
              "https://www.blinds.com/product-images/5b1ad3f3-0e5a-e411-9457-0e6de736083d.jpg",
          },
          {
            id: 3,
            title: "9' Control Pole",
            description: ``,
            price: "25.18",
            offPrice: "41.97",
            image:
              "https://www.blinds.com/product-images/5b1ad3f3-0e5a-e411-9457-0e6de736083d.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Cordless",
    description:
      "Cordless blinds are the peak in style and function. They are the safer choice for homes with children and pets.",
    image:
      "https://www.blinds.com/product-images/023538af-daff-e911-9476-0a986990730e.jpg",
    price: "40.80",
    offPrice: "58.28",
    child_controls: [
      {
        title: "Choose your tilt",
        tilt_obj: [
          {
            id: 1,
            title: "Wand",
            description: `A tilt wand is a standard choice for opening and closing your blinds' slats. It is a safer tilt choice for homes with children and pets.`,
            price: "",
            offPrice: "",
            image:
              "https://www.blinds.com/product-images/d1868f0f-dcff-e911-9476-0a986990730e.jpg",
            child_controls: [],
          },
        ],
      },
    ],
  },
];

export const extendedControlPole = [
  {
    id: 1,
    lable: "",
    block_light_obj: [
      {
        id: 1,
        title: "No Control Pole Needed",
        description: ``,
        price: "",
        offPrice: "",
        image:
          "https://www.blinds.com/product-images/0a8798d2-d311-e811-946d-0a986990730e.jpg",
      },
      {
        id: 2,
        title: "6' Control Pole",
        description: ``,
        price: "15.29",
        offPrice: "25.48",
        image:
          "https://www.blinds.com/product-images/5b1ad3f3-0e5a-e411-9457-0e6de736083d.jpg",
      },
      {
        id: 3,
        title: "9' Control Pole",
        description: ``,
        price: "25.18",
        offPrice: "41.97",
        image:
          "https://www.blinds.com/product-images/5b1ad3f3-0e5a-e411-9457-0e6de736083d.jpg",
      },
    ],
  },
];

export const titlBlockLight = [
  {
    id: 1,
    label: "Block Light / Add Privacy",
    block_light_obj: [
      {
        id: 1,
        title: "Standard",
        description: `A standard slat will have small holes that allow light to pass through. Upgrade to a product with privacy slats if you are looking for more light control.`,
        price: "",
        offPrice: "",
        image:
          "https://www.blinds.com/product-images/ebc0d254-a40f-ea11-9476-0a986990730e.jpg",
        child_controls: [
          {
            id: 1,
            title: "Choose your headrail style",
            headrail_obj: [
              {
                id: 1,
                title: "Standard",
                description: `A standard slat will have small holes that allow light to pass through. Upgrade to a product with privacy slats if you are looking for more light control.`,
                price: "",
                offPrice: "",
                image:
                  "https://www.blinds.com/product-images/2b50926f-6b02-ea11-9476-0a986990730e.jpg?height=178&width=120",
                child_controls: [],
              },
              {
                id: 2,
                title: "2 on 1",
                description: `A standard slat will have small holes that allow light to pass through. Upgrade to a product with privacy slats if you are looking for more light control.`,
                price: "52.46",
                offPrice: "",
                image:
                  "https://www.blinds.com/product-images/e067897f-6b02-ea11-9476-0a986990730e.jpg?height=178&width=120",
                child_controls: [],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Privacy Slats",
        description: `Privacy slats reduce the light that passes through a closed blind. A great choice for a classic look with enhanced light control. Not recommended when mounting on a door.`,
        price: "10.50",
        offPrice: "",
        image:
          "https://www.blinds.com/product-images/bdd35a67-a40f-ea11-9476-0a986990730e.jpg",
        child_controls: [],
      },
      {
        id: 3,
        title: "Cloth Tapes",
        description: `Cloth tape adds style and minimizes the light that can pass through a closed blind. Coordinate to your room design to achieve just the look you want.`,
        price: "10.50",
        offPrice: "",
        image:
          "https://www.blinds.com/product-images/7db06c31-a40f-ea11-9476-0a986990730e.jpg",
        child_controls: [],
      },
    ],
  },
  {
    id: 2,
    label: "Block Light / Add Privacy",
    block_light_obj: [
      {
        id: 1,
        title: "Standard",
        description: `A standard slat will have small holes that allow light to pass through. Upgrade to a product with privacy slats if you are looking for more light control.`,
        price: "",
        offPrice: "",
        image:
          "https://www.blinds.com/product-images/ebc0d254-a40f-ea11-9476-0a986990730e.jpg",
        child_controls: [
          {
            id: 1,
            title: "Choose your headrail style",
            headrail_obj: [
              {
                id: 1,
                title: "Standard",
                description: `A standard slat will have small holes that allow light to pass through. Upgrade to a product with privacy slats if you are looking for more light control.`,
                price: "",
                offPrice: "",
                image:
                  "https://www.blinds.com/product-images/2b50926f-6b02-ea11-9476-0a986990730e.jpg?height=178&width=120",
                child_controls: [],
              },
              {
                id: 2,
                title: "2 on 1",
                description: `A standard slat will have small holes that allow light to pass through. Upgrade to a product with privacy slats if you are looking for more light control.`,
                price: "52.46",
                offPrice: "",
                image:
                  "https://www.blinds.com/product-images/e067897f-6b02-ea11-9476-0a986990730e.jpg?height=178&width=120",
                child_controls: [],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Privacy Slats",
        description: `Privacy slats reduce the light that passes through a closed blind. A great choice for a classic look with enhanced light control. Not recommended when mounting on a door.`,
        price: "10.50",
        offPrice: "",
        image:
          "https://www.blinds.com/product-images/bdd35a67-a40f-ea11-9476-0a986990730e.jpg",
        child_controls: [],
      },
      {
        id: 3,
        title: "Cloth Tapes",
        description: `Cloth tape adds style and minimizes the light that can pass through a closed blind. Coordinate to your room design to achieve just the look you want.`,
        price: "10.50",
        offPrice: "",
        image:
          "https://www.blinds.com/product-images/7db06c31-a40f-ea11-9476-0a986990730e.jpg",
        child_controls: [],
      },
    ],
  },
];

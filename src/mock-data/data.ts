const navbarLinks = {};

let products = [
  {
    id: 1,
    name: "Gold Neckless",
    price: 399,
    shipping: 5.99,
    subTitle: "Sem sed vestibulum, donec tortor ullamcorper cursus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sollicitudin donec fringilla nunc vel. Pharetra est enim amet venenatis, sapien mauris at. Sem sed vestibulum, donec tortor ullamcorper cursus. A est morbi scelerisque at. Odio molestie senectus leo morbi dictum. Ultricies vitae, consectetur leo pharetra accumsan.",
    img: "https://images.unsplash.com/photo-1613498510372-8901cad084a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
  },
  {
    id: 2,
    name: "Channel Perfume",
    price: 99,
    shipping: 8.99,
    subTitle: "Sem sed vestibulum, donec tortor ullamcorper cursus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sollicitudin donec fringilla nunc vel. Pharetra est enim amet venenatis, sapien mauris at. Sem sed vestibulum, donec tortor ullamcorper cursus. A est morbi scelerisque at. Odio molestie senectus leo morbi dictum. Ultricies vitae, consectetur leo pharetra accumsan.",
    img: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80",
  },
  {
    id: 3,
    name: "Pink Wrist Chain",
    price: 199,
    shipping: 5.99,
    subTitle: "Sem sed vestibulum, donec tortor ullamcorper cursus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sollicitudin donec fringilla nunc vel. Pharetra est enim amet venenatis, sapien mauris at. Sem sed vestibulum, donec tortor ullamcorper cursus. A est morbi scelerisque at. Odio molestie senectus leo morbi dictum. Ultricies vitae, consectetur leo pharetra accumsan.",
    img: "https://images.unsplash.com/photo-1623680604940-848c86b7d589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxhY2Nlc3Nvcmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Red Hand Bag",
    price: 199,
    shipping: 3.99,
    subTitle: "Sem sed vestibulum, donec tortor ullamcorper cursus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sollicitudin donec fringilla nunc vel. Pharetra est enim amet venenatis, sapien mauris at. Sem sed vestibulum, donec tortor ullamcorper cursus. A est morbi scelerisque at. Odio molestie senectus leo morbi dictum. Ultricies vitae, consectetur leo pharetra accumsan.",
    img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 5,
    name: "Designer Watch",
    price: 1399,
    shipping: 5.99,
    subTitle: "Sem sed vestibulum, donec tortor ullamcorper cursus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sollicitudin donec fringilla nunc vel. Pharetra est enim amet venenatis, sapien mauris at. Sem sed vestibulum, donec tortor ullamcorper cursus. A est morbi scelerisque at. Odio molestie senectus leo morbi dictum. Ultricies vitae, consectetur leo pharetra accumsan.",
    img: "https://images.unsplash.com/photo-1623998021446-45cd9b269056?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Red Hand Bag",
    price: 99,
    shipping: 5.99,
    subTitle: "Sem sed vestibulum, donec tortor ullamcorper cursus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sollicitudin donec fringilla nunc vel. Pharetra est enim amet venenatis, sapien mauris at. Sem sed vestibulum, donec tortor ullamcorper cursus. A est morbi scelerisque at. Odio molestie senectus leo morbi dictum. Ultricies vitae, consectetur leo pharetra accumsan.",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 7,
    name: "Prada Silver Bag",
    price: 399,
    shipping: 5.99,
    subTitle: "Sem sed vestibulum, donec tortor ullamcorper cursus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sollicitudin donec fringilla nunc vel. Pharetra est enim amet venenatis, sapien mauris at. Sem sed vestibulum, donec tortor ullamcorper cursus. A est morbi scelerisque at. Odio molestie senectus leo morbi dictum. Ultricies vitae, consectetur leo pharetra accumsan.",
    img: "https://images.unsplash.com/photo-1585218356055-e1bbc5891162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    name: "Headphones",
    price: 199,
    shipping: 5.99,
    subTitle: "Sem sed vestibulum, donec tortor ullamcorper cursus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sollicitudin donec fringilla nunc vel. Pharetra est enim amet venenatis, sapien mauris at. Sem sed vestibulum, donec tortor ullamcorper cursus. A est morbi scelerisque at. Odio molestie senectus leo morbi dictum. Ultricies vitae, consectetur leo pharetra accumsan.",
    img: "https://images.unsplash.com/photo-1614860243518-c12eb2fdf66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export { navbarLinks, products };

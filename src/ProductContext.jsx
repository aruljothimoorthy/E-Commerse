import { useState, createContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      productName: "Balck T-Shirt",
      UID: "1",
      productImage:
        "https://dcassetcdn.com/design_img/3967256/873177/26980232/nc1bz6p9hdhx6srxek80cw9qas_image.jpg",
      title: "Mens Wears",
      description:
        'Stay stylish and comfortable with our "Sensei Says Athletica" graphic T-shirt. Featuring a bold design of a martial arts sensei holding a sword, surrounded by futuristic, sleek typography, this shirt is perfect for those who appreciate discipline, strength, and minimalist fashion.',
      price: 500,
      quantity: 1,
    },
    {
      productName: " Adidas T-Shirt",
      UID: "2",
      productImage:
        "https://i.ebayimg.com/images/g/SrUAAOSwfcxj2r~T/s-l1200.webp",
      title: "Mens Wears",
      description:
        'Stay stylish and comfortable with our "Sensei Says Athletica" graphic T-shirt. Featuring a bold design of a martial arts sensei holding a sword, surrounded by futuristic, sleek typography, this shirt is perfect for those who appreciate discipline, strength, and minimalist fashion.',
      price: 540,
      quantity: 1,
    },
    {
      productName: "Polo T-Shirt",
      UID: "3",
      productImage:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/293503654/original/f21c0051af026fe71b3a87da7417c96e7b2dce1a/make-design-t-shirt.png",
      title: "Mens Wears",
      description:
        'Stay stylish and comfortable with our "Sensei Says Athletica" graphic T-shirt. Featuring a bold design of a martial arts sensei holding a sword, surrounded by futuristic, sleek typography, this shirt is perfect for those who appreciate discipline, strength, and minimalist fashion.',
      price: 620,
      quantity: 1,
    },
    {
      productName: "T-Shirt",
      UID: "4",
      productImage:
        "https://m.media-amazon.com/images/I/B1HVVUyLAhL._CLa%7C2140%2C2000%7C51two1Wc9FL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
      title: "Mens Wears",
      description:
        'Stay stylish and comfortable with our "Sensei Says Athletica" graphic T-shirt. Featuring a bold design of a martial arts sensei holding a sword, surrounded by futuristic, sleek typography, this shirt is perfect for those who appreciate discipline, strength, and minimalist fashion.',
      price: 680,
      quantity: 1,
    },
    {
      productName: " Casual Printed Shirt",
      UID: "5",
      productImage:
        "https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010836444-Blue-NAVY-1000010836444-29122021_01-1200.jpg",
      title: "Mens Wears",
      description:
        'Stay stylish and comfortable with our "Sensei Says Athletica" graphic T-shirt. Featuring a bold design of a martial arts sensei holding a sword, surrounded by futuristic, sleek typography, this shirt is perfect for those who appreciate discipline, strength, and minimalist fashion.',
      price: 900,
      quantity: 1,
    },
    {
      productName: "Plain Brown Shirt",
      UID: "6",
      productImage:
        "https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010821426-Red-MAROON-1000010821426-08022022_01-1200.jpg",
      title: "Mens Wears",
      description:
        'Stay stylish and comfortable with our "Sensei Says Athletica" graphic T-shirt. Featuring a bold design of a martial arts sensei holding a sword, surrounded by futuristic, sleek typography, this shirt is perfect for those who appreciate discipline, strength, and minimalist fashion.',
      price: 870,
      quantity: 1,
    },
    {
      productName: "Pale Blue Shirt",
      UID: "7",
      productImage:
        "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000011287856-Blue-LightBlue-1000011287856_01-1200.jpg",
      title: "Mens Wears",
      description:
        'Stay stylish and comfortable with our "Sensei Says Athletica" graphic T-shirt. Featuring a bold design of a martial arts sensei holding a sword, surrounded by futuristic, sleek typography, this shirt is perfect for those who appreciate discipline, strength, and minimalist fashion.',
      price: 750,
      quantity: 1,
    },
    {
      productName: "Light Orange Shirt",
      UID: "8",
      productImage:
        "https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010870625-Yellow-YELLOW-1000010870625-2022022_01-1200.jpg",
      title: "Mens Wears",
      description:
        'Stay stylish and comfortable with our "Sensei Says Athletica" graphic T-shirt. Featuring a bold design of a martial arts sensei holding a sword, surrounded by futuristic, sleek typography, this shirt is perfect for those who appreciate discipline, strength, and minimalist fashion. Made from 100% high-quality cotton, this shirt offers a relaxed fit, ideal for both casual wear and workouts. The monochromatic black and white design enhances versatility, making it easy to pair with jeans, shorts, or athletic wear.',
      price: 700,
      quantity: 1,
    },
    {
      productName: "Casual Shirt",
      UID: "9",
      productImage:
        "https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010060805-Blue-Navy-1000010060805-4092021_01-1200.jpg",
      title: "Mens Wears",
      description:
        'Stay stylish and comfortable with our "Sensei Says Athletica" graphic T-shirt. Featuring a bold design of a martial arts sensei holding a sword, surrounded by futuristic, sleek typography, this shirt is perfect for those who appreciate discipline, strength, and minimalist fashion.',
      price: 850,
      quantity: 1,
    },
    {
      productName: "Pale Pink Shirt",
      UID: "10",
      productImage:
        "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010486339-Pink-Pink-1000010486339_01-1200.jpg",
      title: "Mens Wears",
      description:
        'Stay stylish and comfortable with our "Sensei Says Athletica" graphic T-shirt. Featuring a bold design of a martial arts sensei holding a sword, surrounded by futuristic, sleek typography, this shirt is perfect for those who appreciate discipline, strength, and minimalist fashion.',
      price: 980,
      quantity: 1,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // const addtoCart = (e) => {
  //   setCartItems((prev) => [...prev, e]);
  // };
  const addtoCart = (e) => {
    setCartItems((prev) => {
      const productExist = prev.find((item) => item.UID === e.UID);
      if (productExist) {
        return prev.map((item) => {
          if (item.UID === e.UID) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...prev, e];
      }
    });
  };

  const removeProduct = (UID) => {
    setCartItems((prev) => prev.filter((e) => e.UID !== UID));
  };

  const updateQuantity = (UID, number) => {
    setCartItems((prev) =>
      prev.map((e) => {
        if (e.UID === UID) {
          let tempValue = e.quantity + number;
          if(tempValue >=10){
            tempValue = 10;
          }
          if (tempValue < 1) {
            tempValue = 1;
          }
          return { ...e, quantity: tempValue };
        }
        return e;
      })
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        setSelectedProduct,
        cartItems,
        addtoCart,
        removeProduct,
        updateQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContext;

import React from "react";

const products = [
  {
    name: "Little Hearts",
    img: "https://i.pinimg.com/736x/78/c9/1d/78c91d941bd391ad11ab6b10cb10fd86.jpg",
    bgClass: "banner-card-bg-pink",
  },
  {
    name: "Good Day",
    img: "https://i.pinimg.com/736x/d7/d7/b4/d7d7b45ee250f40f075d3beb2607b8ea.jpg",
    bgClass: "banner-card-bg-orange",
  },
  {
    name: "Toastea",
    img: "https://images.unsplash.com/photo-1612165133778-b1fe8631e561?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9hc3QlMjB0ZWElMjBpbWFnZSUyMHdpdGhvdXQlMjBiZyUyMGFuZCUyMGJnJTIwY29sb3IlMjBpcyUyMG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
    bgClass: "banner-card-bg-green",
  },
];

export default function NewBanner() {
  return (
    <div className="banner-center-container">
      <style>{`
        .banner-center-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          box-sizing: border-box;
        }
        .banner-cards-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          width: 100%;
        }
        .banner-card {
          flex: 1;
          height: 300px;
          border-radius: 25px;
          overflow: hidden; /* ensures image respects card border-radius */
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          min-width: 0;
          position: relative;
        }
        // .banner-card-bg-pink {
        //   background: #f85b8f;
        // }
        // .banner-card-bg-orange {
        //   background: #e54729;
        // }
        // .banner-card-bg-green {
        //   background: #94da52ff;
        // }
        .banner-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover; 
          display: block;
          transition: transform 0.3s;
        }
        .banner-card-img:hover {
          transform: scale(1.08);
          z-index: 2;
        }
      `}</style>
      <div className="banner-cards-row">
        {products.map((prod) => (
          <div key={prod.name} className={`banner-card ${prod.bgClass}`}>
            <img src={prod.img} alt={prod.name} className="banner-card-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

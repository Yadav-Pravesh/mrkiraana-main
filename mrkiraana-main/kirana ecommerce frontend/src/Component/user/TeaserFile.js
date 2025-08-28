import React from "react";

// Unique class prefix, e.g., ef-teaser-
const teaserClass = "ef-teaser";

const TeaserFile = () => (
  <div
    className={`${teaserClass}-wrapper`}
    style={{
      background: "#fff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100vw",
      margin:" 0 auto",
      padding: "30px",
      fontFamily: "'Segoe UI', Arial, sans-serif",
    }}
  >
    {/* Left Illustration */}
    <div
      className={`${teaserClass}-left-img`}
      style={{
        flex: "1 1 0%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {/* Replace below with actual SVG/image */}
      <img
        src="https://i.pinimg.com/1200x/97/15/38/971538548bab22d0db18f03b4974e55f.jpg"
        alt="Mobile shopping illustration"
        style={{
          width: "300px",
          maxWidth: "100%",
        //   marginLeft: "-60px",
          mixBlendMode: "multiply", 
          background: "transparent",

        }}
      />
    </div>

    {/* Center Content */}
    <div
      className={`${teaserClass}-center`}
      style={{
        flex: "2 1 0%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1
        className={`${teaserClass}-title`}
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#232a34",
          textAlign: "center",
          margin: "0"
        }}
      >
        Get Your Daily Needs From Our <br /> mrkirana.com
      </h1>
      <p
        className={`${teaserClass}-subtitle`}
        style={{
          fontSize: "1.17rem",
          color: "#444b53",
          textAlign: "center",
          margin: "30px 0 0 0",
          lineHeight: "1.5",
          maxWidth: "550px"
        }}
      >
        There are many products you will find in our shop. Choose your daily necessary product from our mrkirana shop and get some special offers.
      </p>
      <div
        className={`${teaserClass}-button-row`}
        style={{
          display: "flex",
          gap: "24px",
          marginTop: "50px"
        }}
      >
        {/* Google Play Button */}
        <a
          href="#googleplay"
          className={`${teaserClass}-gplay-btn`}
          style={{
            display: "flex",
            alignItems: "center",
            background: "#000",
            color: "#fff",
            borderRadius: "10px",
            padding: "16px 24px",
            textDecoration: "none",
            fontSize: "1.2rem"
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            style={{ height: "32px", marginRight: "14px" }}
          />
          Google Play
        </a>


{/* App Store Button  */}


        <a
  href="#"
  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "8px 16px",
    borderRadius: "8px",
    // background: "#f5f5f5",
    textDecoration: "none",
  }}
>
  <img
    src="https://res.cloudinary.com/dum5kwik3/image/upload/v1700858767/easymart/app-store_cyyc0f.svg"
    alt="App Store"
    style={{
       width: "100%",  
      height: "100%", 
      objectFit: "cover", 
      borderRadius:"8px",
    }}
  />
</a>

      </div>
    </div>

    {/* Right Illustration & Cart Info */}


    <div
      className={`${teaserClass}-right-img`}
      style={{
        flex: "1 1 0%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "12px"
      }}
    >
      {/* Replace below with actual SVG/image */}
      <img
  src="https://i.pinimg.com/736x/05/a9/6a/05a96af7f104001e467e028d830d6eed.jpg"
  alt="Woman shopping"
  style={{
    width: "300px",
    maxWidth: "100%",
    // marginRight: "-60px",
    mixBlendMode: "multiply", 
    background: "transparent", 
  }}
/>
      {/* Cart info */}

      
      <div
        className={`${teaserClass}-cart-info`}
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          marginRight: "50px"
        }}
      >
      </div>
    </div>
  </div>
);

export default TeaserFile;

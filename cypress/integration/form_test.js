import React from "react";
import StyledPage from "./Style.js";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <StyledPage>
      <div className="HeaderContainer">
        <div className="Logo">
          <h1>Lambda Eats</h1>
        </div>
        <div className="Navigation">
          <Link to="/">Home</Link>
          <Link id="order-pizza" to="/pizza">
            Order a Pizza!
          </Link>
        </div>
      </div>
      <div className="TextContainer">
        <div className="TextTitle">
          <h2>
            {" "}
            Simply, the best pizzas!
            <br />
            -Gordon Ramsey{" "}
          </h2>
        </div>
        <div className="TextParagraph">
          <p>
            Pizza from Lambda with love.
            <br /> Every pizza is crafted by our chef Carlos <br /> Please click
            the <span>Order Now</span> button to place your order now.
          </p>
        </div>
      </div>
    </StyledPage>
  );
};
export default HomePage;
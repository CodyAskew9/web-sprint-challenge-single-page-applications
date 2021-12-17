import React from "react";

export default function Completion(props) {
  const { pizza } = props;

  return (
    <div className="review">
      <h3>Review Your Order</h3>
      {pizza.map((myPizza) => {
        return (
          <div key={myPizza.id}>
            <h4> Name: {myPizza.name} </h4>
            <p> Size: {myPizza.size} </p>
            <p>Toppings:</p>
            {myPizza.ham && <p>Ham</p>}
            {myPizza.bacon && <p>Bacon</p>}
            {myPizza.chicken && <p>Chicken</p>}
            {myPizza.fetacheese && <p>Feta Cheese</p>}
            <p> Special Instructions: {myPizza.specialrequest} </p>
          </div>
        );
      })}
    </div>
  );
}
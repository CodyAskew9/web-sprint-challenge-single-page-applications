import React, { useState } from "react";
import StyledPage from "./Style";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import * as yup from "yup";
import axios from "axios";

const FormStyle = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 0.2%;
	color: #66FF33;
	background: #000000;
  .errorName {
    color: red;
  }
  `;

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .min(2, "name must be at least 2 characters"),
  size: yup.boolean().oneOf([true], "You must select a pizza size"),
  Pepperoni: yup.boolean(),
  Ham: yup.boolean(),
  Pineapple: yup.boolean(),
  Mushrooms: yup.boolean(),
  Bacon: yup.boolean(),
  Peppers: yup.boolean(),
  Onions: yup.boolean(),

  ExtraCheese: yup.boolean(),
  siInput: yup.string(),
});

function FormPage() {
  const [form, setForm] = useState({
    name: "",
    size: "0",
    Pepperoni: false,
    Ham: false,
    Pineapple: false,
    Mushrooms: false,
    Bacon: false,
    Peppers: false,
    Onions: false,
    ExtraCheese: false,
    siInput: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    Pepperoni: "",
    Ham: "",
    Pineapple: "",
    Mushrooms: "",
    Bacon: "",
    Peppers: "",
    Onions: "",
    ExtraCheese: "",
    siInput: "",
  });

  const [user, setUser] = useState({
    setForm,
  });

  const submit = (event) => {
    event.preventDefault();
    const newUser = {
      name: form.name,
      size: form.size,
      Pepperoni: form.Pepperoni,
      Ham: form.Ham,
      Pineapple: form.Pineapple,
      Mushrooms: form.Mushrooms,
      Bacon: form.Bacon,
      Peppers: form.Peppers,
      Onions: form.Onions,
      ExtraCheese: form.ExtraCheese,
      siInput: form.siInput,
    };

    axios
      .post("https://reqres.in/api/orders", newUser)
      .then((res) => {
        setForm({
          name: "",
          size: "0",
          Pepperoni: false,
          Ham: false,
          Pineapple: false,
          ExtraCheese: false,
          Mushrooms: false,
          Bacon: false,
          Peppers: false,
          Onions: false,
          siInput: "",
        });
        setUser({
          name: form.name,
          size: form.size,
          Pepperoni: form.Pepperoni,
          Ham: form.Ham,
          Pineapple: form.Pineapple,
          Mushrooms: form.Mushrooms,
          Bacon: form.Bacon,
          Peppers: form.Peppers,
          Onions: form.Onions,
          ExtraCheese: form.ExtraCheese,
          siInput: form.siInput,
        });
      })
      .catch((err) => {});
  };

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const change = (event) => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse });
  };

  return (
    <>
      <StyledPage>
        <div className="HeaderContainer">
          <div className="Logo">
            <h1>Lambda Eats</h1>
          </div>
          <div className="Navigation">
            <Link to="/">Home</Link>
            <Link to="/Pizza">Order a Pizza</Link>
          </div>
        </div>
      </StyledPage>

      <FormStyle>
        <div className="errorName">
          {errors.name}
          <br />
        </div>
        <form id="pizza-form" onSubmit={submit} autoComplete="off">
          <div>
            <label>
              Name:
              <input
                id="name-input"
                onChange={change}
                value={form.name}
                type="text"
                name="name"
              />
            </label>
          </div>

          <div>
            <label>
              Size Selection
              <select
                onChange={change}
                id="size-dropdown"
                value={form.size}
                name="size"
              >
                <option value="">-Select-</option>
                <option value="1">Personal Pan</option>
                <option value="2">Small</option>
                <option value="3">Medium</option>
                <option value="4">Large</option>
                <option value="5">Extra-Large</option>
                <option value="6">Family-Deal </option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Pepperoni:
              <input
                onChange={change}
                checked={form.Pepperoni}
                name="Pepperoni"
                type="checkbox"
              />
            </label>
            <label>
              Ham:
              <input
                onChange={change}
                checked={form.Ham}
                name="Ham"
                type="checkbox"
              />
            </label>
            <label>
              Pineapple:
              <input
                onChange={change}
                checked={form.Pineapple}
                name="Pineapple"
                type="checkbox"
              />
            </label>
            <label>
              Mushrooms:
              <input
                onChange={change}
                checked={form.Mushrooms}
                name="Mushrooms"
                type="checkbox"
              />
            </label>
            <label>
              Bacon:
              <input
                onChange={change}
                checked={form.Bacon}
                name="Bacon"
                type="checkbox"
              />
            </label>
            <label>
              Peppers:
              <input
                onChange={change}
                checked={form.Peppers}
                name="Peppers"
                type="checkbox"
              />
            </label>
            <label>
              Onions:
              <input
                onChange={change}
                checked={form.Onions}
                name="Onions"
                type="checkbox"
              />
            </label>
            <label>
              Extra Cheese:
              <input
                onChange={change}
                checked={form.ExtraCheese}
                name="ExtraCheese"
                type="checkbox"
              />
            </label>
          </div>

          <div>
            <label>
              Special Instructions:
              <input
                id="special-text"
                onChange={change}
                value={form.siInput}
                name="siInput"
                type="text"
              />
            </label>
          </div>

          <button id="order-button" name="button">
            Add to order
          </button>

          <div className="returnContainer">
            <h3>Returned Data:</h3>
            <strong>Name:</strong>
            <p>{user.name}</p>
            <strong>Size:</strong>
            <p>{user.size}</p>
            <strong>Pepperoni:</strong>
            <p>{user.Pepperoni === true ? "Add Topping" : " "}</p>
            <strong>Ham:</strong>
            <p>{user.Ham === true ? "Add Topping" : " "}</p>
            <strong>Pineapple:</strong>
            <p>{user.Pineapple === true ? "Add Topping" : " "}</p>
            <strong>Mushrooms:</strong>
            <p>{user.Mushrooms === true ? "Add Topping" : " "}</p>
            <strong>Bacon:</strong>
            <p>{user.Bacon === true ? "Add Topping" : " "}</p>
            <strong>Peppers</strong>
            <p>{user.Peppers === true ? "Add Topping" : " "}</p>
            <strong>Onions:</strong>
            <p>{user.Onions === true ? "Add Topping" : " "}</p>
            <strong>ExtraCheese:</strong>
            <p>{user.ExtraCheese === true ? "Add Topping" : " "}</p>
            <strong>Special Instructions:</strong>
            <p>{user.siInput}</p>
          </div>
        </form>
      </FormStyle>
    </>
  );
}
export default FormPage;
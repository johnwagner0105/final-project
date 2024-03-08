import React, { useState } from "react";
import { saveProduct } from "../services/itemServices";
import Swal from "sweetalert2";

const AddNewProduct = () => {
  const [form, setForm] = useState({
    name: "",
    stock: 0,
    price: 0,
    discount: false,
    amount_discount: 0,
  });

  const changeForm = (evento) => {
    let nombreVariable = evento.target.name;
    let valorVariable = evento.target.value;
    if (
      nombreVariable == "stock" ||
      nombreVariable == "price" ||
      nombreVariable == "amount_discount"
    ) {
      valorVariable = parseInt(valorVariable);
    } else if (nombreVariable == "discount") {
      if (valorVariable === "0") {
        valorVariable = false;
      } else if (valorVariable === "1") {
        valorVariable = true;
      }
    }
    const copyStateForm = {
      ...form,
      [nombreVariable]: valorVariable,
    };
    console.log("COPYSTATEFORM", copyStateForm);
    setForm(copyStateForm);
  };

  const handleCreate = () => {
    return saveProduct({ ...form }).then(() => {
      return Swal.fire({
        icon: "success",
        title: "Producto Agregado",
        text: `Se creó el producto ${form.name}`,
      });
    });
  };

  return (
    <main className="container p-4">
      <h1>Add New Product</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name:
          </label>
          <input
            type="text"
            placeholder="Nintendo Switch"
            id="inputName"
            className="form-control"
            value={form.name}
            name="name"
            onChange={(evento) => {
              changeForm(evento);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="inputStock" className="form-label">
            Stock:
          </label>
          <input
            type="number"
            placeholder="100"
            id="inputStock"
            className="form-control"
            value={form.stock}
            name="stock"
            onChange={(evento) => {
              changeForm(evento);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPrice" className="form-label">
            Price:
          </label>
          <input
            type="number"
            placeholder="100"
            id="inputPrice"
            className="form-control"
            value={form.price}
            name="price"
            onChange={(evento) => {
              changeForm(evento);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="inputDiscounted" className="form-label">
            Has discount?:
          </label>
          <select
            id="inputDiscounted"
            className="form-select"
            aria-label="Default select example"
            name="discount"
            onChange={(evento) => {
              changeForm(evento);
            }}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="inputDiscount" className="form-label">
            Discount:
          </label>
          <input
            type="number"
            placeholder="20"
            id="inputDiscount"
            className="form-control"
            value={form.amount_discount}
            name="amount_discount"
            onChange={(evento) => {
              changeForm(evento);
            }}
            {...(form.discount ? {} : { disabled: true })}
          ></input>
        </div>
        <button
          className="btn btn-primary btn-lg"
          type="button"
          onClick={handleCreate}
        >
          Guardar
        </button>
      </form>
    </main>
  );
};

export default AddNewProduct;

import { useState } from "react";
import FormInput from "./FormInput";
import Button from "./UI_components/Button";

const AddListing = () => {
  const [values, setValues] = useState({
    title: "",
    brand: "",
    img: "",
    length: "",
    unit: "",
    color: "",
    description: "",
    price: "",
    category: "",
    subcategory: "",
  });

  const inputs = [
    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "title",
      label: "Title",
    },
    {
      id: 2,
      name: "brand",
      type: "text",
      placeholder: "brand",
      label: "Brand",
    },
    {
      id: 3,
      name: "img",
      type: "text",
      placeholder: "img",
      label: "Image",
    },
    {
      id: 4,
      name: "length",
      type: "number",
      placeholder: "length/amount",
      label: "Length/amount",
    },
    {
      id: 5,
      name: "unit",
      type: "text",
      placeholder: "units",
      label: "Units",
    },
    {
      id: 6,
      name: "color",
      type: "text",
      placeholder: "color",
      label: "Color",
    },
    {
      id: 7,
      name: "description",
      type: "text",
      placeholder: "description",
      label: "Description",
    },
    {
      id: 8,
      name: "price",
      type: "number",
      placeholder: "price",
      label: "Price",
    },
    {
      id: 9,
      name: "category",
      type: "text",
      placeholder: "category",
      label: "Category",
    },
    {
      id: 10,
      name: "subcategory",
      type: "text",
      placeholder: "subcategory",
      label: "Subcategory",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className="listing__header">Add a new listing here!</h1>
      <div className="listing__form">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <Button className="listing__btn" text="Create listing" />
        </form>
      </div>
    </div>
  );
};

export default AddListing;

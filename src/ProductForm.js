import React, { useState } from "react";
import Upload from "./Upload";

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    title: "",
    price: 0,

    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component
    onAddProduct(formData);
    //Reset the form after submission
    setFormData({
      title: "",
      price: 0,

      rating: 0,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 shadow-2xl ..."
              htmlFor="grid-first-name"
            >
              Title:
              <input
                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Your product name..."
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>
           
          </div>
          <div className="w-full md:w-1/2 px-3 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Price:
              <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-2xl ..."
              id="grid-last-name"
              placeholder="$$$"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Rating:
              <input
                className="shadow-2xl ...appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                placeholder="What condition is your product in? (1 star-old and 5 star-new)"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              />
            </label>
            <p className="text-gray-600 text-xs italic">
              be fair...
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          
        </div>
      </form>

      <button
        type="button"
        class="shadow-2xl ... bg-gradient-to-r from-green-100 to-blue-200 hover:from-pink-100
         hover:to-yellow-100 font-semibold hover:text-black py-2 px-4  hover:border-transparent rounded-lg ..."
        type="submit"
      >
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;

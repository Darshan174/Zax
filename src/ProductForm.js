import React, { useState } from 'react';
import Upload from './Upload';

 function ProductForm({ onAddProduct }){
    const [formData, setFormData ] = useState({
        title: '',
        price:0,


        rating:0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass the form data to the parent component
        onAddProduct(formData);
        //Reset the form after submission
        setFormData({
            title: '',
            price:0,


            rating:0,
        })

    }
    return (
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </label>
          <label>
            Rating:
            <input type="number" name="rating" value={formData.rating} onChange={handleChange} required />
          </label>
          <button type="button" class="bg-gradient-to-r from-green-100 to-blue-200 hover:from-pink-100
         hover:to-yellow-100 font-semibold hover:text-black py-2 px-4  hover:border-transparent rounded-lg ..." type="submit">Add Product</button>
        </form>
      );
    
    
}

export default ProductForm;
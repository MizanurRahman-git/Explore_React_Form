import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error, setError] = useState('')

    const handleProduct = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value

        // Validation 

        if(name.length === 0){
            setError('Please Provide a Product Name');

            return;
        }

        else if(price <=0){
            setError('Please Provide the Product Price');

            return;
        }

        else if(quantity <= 0){
            setError('Please tell me How Many Products you want');

            return;
        }

        else{
            setError('')
        }


        const newProduct ={
            name,
            price,
            quantity
        }
        handleAddProduct(newProduct)
    }
    return (
        <div>
            <h3>Add To Product</h3>
            <form onSubmit={handleProduct}>

                <input type="text" name="name" placeholder='Product Name'/>
                <br />
                <input type="text" name="price" placeholder='Price' />
                <br />
                <input type="text" name="quantity" placeholder='Quantity' />
                <br />
                <input type="submit" value="Submit" />
                
            </form>
            <p style={{color: 'red'}}>{error}</p>
        </div>
    );
};

export default ProductForm;
import React, { useState } from 'react';
import ProductForm from './productForm/ProductForm';
import ProductTable from './ProductTable/ProductTable';

const ProductManagement = () => {

    const [products, setProducts] = useState([]);

    const handleAddProduct = (newProduct) => {
        const newProducts = [...products, newProduct];

        setProducts(newProducts)
    }
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}/>
            <ProductTable products={products}/>
        </div>
    );
};

export default ProductManagement;
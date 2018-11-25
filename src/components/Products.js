import React, {Component} from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';

class Products extends Component {
    render() {
        return(
            <div>
                <Filters />
                <ProductTable />
                <ProductForm />
            </div>
        );
    }
}

export default Products;
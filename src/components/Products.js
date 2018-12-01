import React, {Component} from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';
import {PRODUCTS} from '../ProductsData.js'

class Products extends Component {

    state= {
        products: PRODUCTS
    }

    render() {
        return(
            <div>
                <Filters />
                <ProductTable products={this.state.products}/>
                <ProductForm />
            </div>
        );
    }
}

export default Products;
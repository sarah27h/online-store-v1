import React, {Component} from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';
import {PRODUCTS} from '../ProductsData.js'

class Products extends Component {

    state= {
        products: PRODUCTS,
        filterText: '',
        inStock: true
    }

    render() {
        return(
            <div>
                <Filters 
                  filterText={this.state.filterText}
                  inStock={this.state.inStock}  
                />
                <ProductTable 
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStock={this.state.inStock}/>
                <ProductForm />
            </div>
        );
    }
}

export default Products;
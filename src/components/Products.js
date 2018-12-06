import React, {Component} from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';
import {PRODUCTS} from '../ProductsData.js'

class Products extends Component {

    state= {
        products: PRODUCTS,
        filterText: '',
        inStock: false // to be unchecked by default
    }

    //add event
    handleFilter = (filterInput) => {
        this.setState(filterInput);
    }

    render() {
        return(
            <div>
                <Filters 
                  filterText={this.state.filterText}
                  inStock={this.state.inStock}
                  onFilter={this.handleFilter}
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
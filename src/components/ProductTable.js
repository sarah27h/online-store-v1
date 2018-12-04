import React, {Component} from 'react';
import ProductTableHeader from './ProductTableHeader';
import ProductRow from './ProductRow';
import '../styles/ProductTable.css';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ProductTable extends Component {

    state={
        sort: { // as default values
            columnName: 'name',
            direction: 'desc'
        }
    }

    render() {
        // convert products object to an array to be able to iterate over its items
        const productsAsArray = Object.keys(this.props.products).map((key) => this.props.products[key]);
        console.log(productsAsArray);

        let tableRows

        // match -> object created from (user input) for matching (product.name) within a pattern
        // match.test(product.name) if match return --> true
        const match =  new RegExp(escapeRegExp(this.props.filterText), 'i');

        // apply filtering logic & create products table
        // depend on (matching user input with product.name ) and stock checked or unchecked
        if(this.props.filterText.length && this.props.inStock) {
            console.log(`user type, stock checked`);
            tableRows = productsAsArray.filter((product) => match.test(product.name) && product.stocked);

        } else if (this.props.filterText.length && !this.props.inStock) {
            console.log(`user type, stock unchecked`);
            tableRows = productsAsArray.filter((product) => match.test(product.name));

        } else if (!this.props.filterText.length && this.props.inStock) {
            console.log(`no user type, stock checked`);
            tableRows = productsAsArray.filter((product) => product.stocked);

        } else {
            console.log(`normal case`);
            tableRows = productsAsArray;
        }
    
        // second method for filtering
        // create products table
        // add products that only inStock and match with user inputs
        // const tableRows = productsAsArray.map((product) => {
            
        //     const match =  new RegExp(escapeRegExp(this.props.filterText), 'i');
        //     // apply filtering logic
        //     // first: make sure user input matches product name
        //     // --> indexOf() method returns the position of the first occurrence
        //     // --> returns -1 if the value to search for never occurs
        //     // second: if product instock or user checked checkbox --> Only show products in stock
        //     // if any of those conditions are met return empty array
        //     if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStock)) {
        //         return;
        //     }
        //     return(
        //         <ProductRow product={product} key={product.id}/>
        //     );
            
        // });
        return(
            <div>
                <table className="table-container">
                    {/* table header */}
                    <thead>
                        <tr>
                            <ProductTableHeader 
                                columnName="name"
                                sort={this.state.sort} />

                            <ProductTableHeader 
                                columnName="price"
                                sort={this.state.sort} />
                        </tr>
                    </thead>

                    {/* table rows */}
                    <tbody>
                        {/* {tableRows} */}
                           {tableRows.map((product) => {
                                 // add products that only inStock and match with user inputs
                                return(
                                    <ProductRow product={product} key={product.id}/>
                                );
                            })
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default ProductTable;
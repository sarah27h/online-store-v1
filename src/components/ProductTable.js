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
            direction: 'asc'
        }
    }

    render() {
        // convert products object to an array to be able to iterate over its items
        const productsAsArray = Object.keys(this.props.products).map((key) => this.props.products[key]);
        console.log(productsAsArray);
        
        // convert and add product price as number to sort products according to price easily
        productsAsArray.forEach(function(product,index) {
            product.priceNumber = Number((product.price).slice(1).replace(/,/, ""));
        });

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

        // tableRows.forEach(function(product,index) {
        //     if((product.price).includes('$')) {
        //         tableRows[index].price = Number((tableRows[index].price).slice(1).replace(/,/, ""));
        //     } else {
        //         return tableRows;
        //     }
        // });
        console.log(tableRows);

        // apply sorting & create products table
        // depends on (columnName, direction) and (asc, desc) states
        if(this.state.sort.columnName === 'name' && this.state.sort.direction === 'desc') {
            tableRows.sort(sortBy('-name'));
        } else if (this.state.sort.columnName === 'name' && this.state.sort.direction === 'asc') {
            tableRows.sort(sortBy('name'));
        } else if(this.state.sort.columnName === 'price' && this.state.sort.direction === 'desc') {
            tableRows.sort(sortBy('-priceNumber'));
        } else if (this.state.sort.columnName === 'price' && this.state.sort.direction === 'asc') {
            tableRows.sort(sortBy('priceNumber'));
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
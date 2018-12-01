import React, {Component} from 'react';
import ProductTableHeader from './ProductTableHeader';
import ProductRow from './ProductRow';
import '../styles/ProductTable.css'

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
        // create products table
        const tableRows = productsAsArray.map((product) => {
            // add products that only inStock and match with user inputs
            if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStock)) {
                return;
            }
            return(
                <ProductRow product={product} key={product.id}/>
            );
            
        });
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
                        {tableRows}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default ProductTable;
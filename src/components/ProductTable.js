import React, {Component} from 'react';
import ProductTableHeader from './ProductTableHeader';
import ProductRow from './ProductRow';

class ProductTable extends Component {

    render() {
        // convert products object to an array to be able to iterate over its items
        const productsAsArray = Object.keys(this.props.products).map((key) => this.props.products[key]);
        console.log(productsAsArray);
        // create products table
        const tableRows = productsAsArray.map((product) => {
            return(
                <ProductRow product={product} key={product.id}/>
            );
        });
        return(
            <div>
                <table>
                    {/* table header */}
                    <thead>
                        <tr>
                            <ProductTableHeader />
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
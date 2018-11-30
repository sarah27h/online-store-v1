import React, { Component } from 'react';
import '../styles/ProductRow.css'

class ProductRow extends Component {
    render() {
        return(
            <tr>
                <td>
                    {/* add out-of-stock className for out of stock product */}
                    <span className={this.props.product.stocked ? '' : 'out-of-stock'}>
                        {this.props.product.name}
                    </span>
                </td>
                <td>
                    {this.props.product.price}
                </td>
                <td>
                    <button className="remove-btn">X</button>
                </td>
            </tr>
        );
    }
}


export default ProductRow;
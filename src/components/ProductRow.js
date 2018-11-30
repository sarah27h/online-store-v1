import React, { Component } from 'react';
import '../styles/ProductRow.css'

class ProductRow extends Component {
    render() {
        return(
            <tr>
                <td>
                    {this.props.product.name}
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
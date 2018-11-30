import React, { Component } from 'react';
import '../styles/ProductTableHeader.css'

class ProductTableHeader extends Component {
    render() {
        return(
            <th>
                {this.props.columnName}
                <button className="sort-btn btn-current-used"> &#x25B2;</button>
                <button className="sort-btn"> &#x25BC;</button>
            </th>
        );
    }
}


export default ProductTableHeader;
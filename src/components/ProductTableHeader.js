import React, { Component } from 'react';
import '../styles/ProductTableHeader.css'

class ProductTableHeader extends Component {
    render() {

        // mark the currently selected sort button with the CSS
        // detect current used to sort products
        // for btn1 (asc)
        // check this.props.sort.direction === 'asc' this.props.columnName === 'price or name'
        // then if true -> className = 'sort-btn btn-current-used'
        //      if false -> className = 'sort-btn'
        let ascCurrentSort = this.props.sort.direction === 'asc' && this.props.columnName === this.props.sort.columnName? 'sort-btn btn-current-used' : 'sort-btn';
        let descCurrentSort = this.props.sort.direction === 'desc' && this.props.columnName === this.props.sort.columnName? 'sort-btn btn-current-used' : 'sort-btn';

        return(
            <th>
                {this.props.columnName}

                <button className={ascCurrentSort}> &#x25B2;</button>

                <button className={descCurrentSort}> &#x25BC;</button>
            </th>
        );
    }
}


export default ProductTableHeader;
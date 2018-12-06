import React, {Component} from 'react';
import '../styles/ProductForm.css'

// create a variable to reset product state after submitting
const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends Component {

    // create product state to hold user's added product
    // using Object.assign() method to copy the values of same properties
    // from sources (RESET_VALUES) to target (product)
    state= {
        product: Object.assign({}, RESET_VALUES)
    }
    render() {
        return(
            <div className="form-container">
            <form>
                    <div className="form-row">
                        <label htmlFor="name">Name</label>
                        </div>
                    <div className="form-input">
                        <input 
                            className="form-text"
                            id="name"
                            type="text"
                            name="name"
                            value={this.state.product.name}
                            placeholder="product name" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="category">Category</label>
                        </div>
                    <div className="form-input">
                        <input 
                            className="form-text" 
                            id="category" 
                            type="text" 
                            name="category" 
                            value={this.state.product.category}
                            placeholder="product category" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="price">Price</label>
                        </div>
                    <div className="form-input">
                        <input 
                            className="form-text" 
                            id="price" 
                            type="text" 
                            name="price" 
                            value={this.state.product.price}
                            placeholder="product price" />
                    </div>
                    <div className="form-row">
                        <input 
                            className="form-check" 
                            type="checkbox" 
                            name="inStock" 
                            checked={this.state.product.stocked}
                            id="show"/>
                        <label htmlFor="show"> In stock?</label>
                    </div>
                    <div className="form-row">
                        <button className="sub-btn" type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProductForm;
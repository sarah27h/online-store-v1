import React, {Component} from 'react';
import '../styles/ProductForm.css'

class ProductForm extends Component {
    render() {
        return(
            <div className="form-container">
            <form>
                    <div className="form-row">
                        <label htmlFor="name">Name</label>
                        </div>
                    <div className="form-input">
                        <input className="form-text" id="name" type="text" name="name" placeholder="product name" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="category">Category</label>
                        </div>
                    <div className="form-input">
                        <input className="form-text" id="category" type="text" name="category" placeholder="product category" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="price">Price</label>
                        </div>
                    <div className="form-input">
                        <input className="form-text" id="price" type="text" name="price" placeholder="product price" />
                    </div>
                    <div className="form-row">
                        <input className="form-check" type="checkbox" name="inStock" id="show"/>
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
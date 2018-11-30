import React, {Component} from 'react';
import '../styles/Filters.css'

class Filters extends Component {
    render() {
        return(
            <section className="filter-container">
                <form>
                <div className="form-row">
                    <input className="form-text" type="text" placeholder="Search..."/>
                </div>
                <div className="form-row">
                    <input className="form-check" type="checkbox" id="show"/>                    
                    <label htmlFor="show"> Only show products in stock</label>
                </div>
                </form>
            </section>
        );
    }
}

export default Filters;
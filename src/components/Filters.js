import React, {Component} from 'react';
import '../styles/Filters.css'

class Filters extends Component {

    // handling multiple inputs for both checkbox, input field
    // add a name attribute to each element to be equal to state name
    // ex: <input name="filterText" ..../> equal to state of input field
    // get e.target value -> value = e.target["value"]
    // if user enter b ->> e.target["value"] = b
    // get e.target.name -> filterText
    // this.props.onFilter({ [filterText]: b });
    handleChange = (e) => {
        // check in which change occurs
        const value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        const name = e.target.name;
        console.log(value, e.target.name, e.target["value"], e.target["checked"]);
        console.log({ [name]: value }); // {filterText: "b"}
        // used the ES6 computed property name syntax to update the state key
        this.props.onFilter({ [name]: value });
    }

    render() {
        return(
            <section className="filter-container">
                <form>
                <div className="form-row">
                    <input 
                        className="form-text" 
                        type="text" 
                        placeholder="Search..."
                        value={this.props.filterText}
                        name="filterText"
                        onChange={this.handleChange}/>
                </div>
                <div className="form-row">
                    <input 
                        className="form-check" 
                        type="checkbox" 
                        id="show"
                        checked={this.props.inStock}
                        name="inStock"
                        onChange={this.handleChange}/>
                    <label htmlFor="show"> Only show products in stock</label>
                </div>
                </form>
            </section>
        );
    }
}

export default Filters;
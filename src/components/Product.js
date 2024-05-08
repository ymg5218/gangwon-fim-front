import React, { Component } from "react";
import ProductShow from "./ProductShow";
import ProductData from "./ProductData";

class Product extends Component {
    render() {
        return (
            <div>
                <ProductShow img={this.props.img} name={this.props.name} amount={this.props.amount}></ProductShow>
                <ProductData id={this.props.id} number={this.props.number}></ProductData>
            </div>
        );
    }
}

export default Product;
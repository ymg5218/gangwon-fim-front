import React, { Component } from "react"

class ProductData extends Component {
    render() {
        return (
            <div>
                <p>상품아이디 : {this.props.id}</p>
                <p>상품번호 : {this.props.number}</p>
            </div>
        );
    }
}

export default ProductData;
import { Component } from "react";

class ProductShow extends Component {
    render() {
        return (
            <div>
                <img src={this.props.img}></img>
                <h2>상품이름 : {this.props.name}</h2>
                <p>수량 : {this.props.amount}</p>
            </div>
        );
    }
}

export default ProductShow;
import React from "react";
import { Link } from "react-router-dom";


const ProductList = ({ item_id, item_name, item_price, item_unit, item_origin, item_info, category }) => {
    return (
        <li>
            <Link to={`/detailView/${item_id}`}>
                <img src={`images/product${item_id}.jpg`} alt={item_id} height={200} />
                <p>카테고리 : {category}</p>
                <h3>{item_name}</h3>
                <p>{item_price}원</p>
                <p>단위 : {item_unit}</p>
                <p>원산지 : {item_origin}</p>
                <p>{item_info}</p>
            </Link>
        </li>
    );
};

export default ProductList;
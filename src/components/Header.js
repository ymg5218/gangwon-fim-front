import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <h1><Link to='/'>강원식자재마트</Link></h1>
            <ul>
                <li><Link to='/category'>카테고리</Link></li>
                <li>물품</li>
                <li>베스트</li>
                <li><Link to='/upload'>물품 등록</Link></li>
            </ul>
        </div>
    );
};

export default Header;
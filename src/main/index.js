import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import './index.css';


const data = [
    {
        p_id: 1,
        p_name: "양파",
        p_price: 1000,
    },
    {
        p_id: 2,
        p_name: "파",
        p_price: 1200,
    },
    {
        p_id: 3,
        p_name: "앞다리살",
        p_price: 1500,
    },
    {
        p_id: 4,
        p_name: "쪽파",
        p_price: 800,
    },
]


const MainPage = () => {
    return (
        <div className='main'>
            <div className='visual'>
                <img src={`images/gangwon_fim_main.jpg`} alt="배너이미지1" height={200} />
            </div>
            <div className="product">
                <h2>신상품</h2>
                <ul>
                    {data.map(pro =>
                        <ProductList key={pro.p_id} p_id={pro.p_id} p_name={pro.p_name} p_price={pro.p_price} />
                    )}
                </ul>
            </div>
        </div>
    );
};

export default MainPage;
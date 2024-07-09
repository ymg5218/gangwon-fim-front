import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import './mainPage.css';

const MainPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/items-for-sale/findAllWithCategory")
            .then((response) => {
                console.log(response.data);
                setItems(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className='main'>
            <div className='visual'>
                <img src={`images/gangwon_fim_main.jpg`} alt="배너이미지1" height={200} />
            </div>
            <div className="product">
                <h2>신상품</h2>
                <ul>
                    {items.map(pro =>
                        <ProductList
                            key={pro.item_id}
                            item_id={pro.item_id}
                            item_name={pro.item_name}
                            item_price={pro.item_price}
                            item_unit={pro.item_unit}
                            item_origin={pro.item_origin}
                            item_info={pro.item_info}
                            category={pro.detailedCategory.detailed_cat_name}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
};

export default MainPage;
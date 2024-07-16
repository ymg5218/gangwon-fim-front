import React, { useState, useEffect } from 'react';
import './CategoryTabs.css';
import axios from 'axios';
import ProductList from './ProductList';

const CategoryTabs = ({ onCategoryClick }) => {
    const [topCategories, setTopCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/top-categories/findAll")
            .then((response) => {
                setTopCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        axios.get(`http://localhost:3000/items-for-sale/findOneWithCategory/${category.top_cat_id}`)
            .then((response) => {
                setItems(response.data);
                if (onCategoryClick) {
                    onCategoryClick();
                }
            })
            .catch(error => console.error('Error fetching products: ', error));
    }

    return (
        <div>
            <nav className='category-nav'>
                {topCategories.map(category => (
                    <button key={category.top_cat_id} onClick={() => handleCategoryClick(category)}>
                        {category.top_cat_name}
                    </button>
                ))}
            </nav>
            {selectedCategory && (
                <div className="product">
                    <h2>{selectedCategory.top_cat_name}</h2>
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
            )}
        </div>
    );
};

export default CategoryTabs;
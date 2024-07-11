import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CategoryTabs.css';
import axios from 'axios';

const CategoryTabs = () => {
    const [topCategories, setTopCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/top-categories/findAll")
            .then((response) => {
                console.log(response.data);
                setTopCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        axios.get(`http://localhost:3000/top-categories/getItemsByCategory/${category.id}`)
            .then(response => {
                setSelectedCategory(category);
                setItems(response.data.detailedCategory.flatMap(dc => dc.items));
                navigate(`/category/${category.id}`);
            })
            .catch(error => console.error('Error fetching products: ', error));
    }

    return (
        <div>
            <nav className='category-nav'>
                {topCategories.map(category => (
                    <button key={category.id} onClick={() => handleCategoryClick(category)}>
                        {category.top_cat_name}
                    </button>
                ))}
            </nav>
            {selectedCategory && (
                <div className=''>
                    <h2>{selectedCategory.name}</h2>
                    {items.map(item => (
                        <li key={item.item_id}>
                            <Link to={`/detailedView/${item.item_id}`}>
                                {item.item_name} - {item.item_price}
                            </Link>
                        </li>
                    ))}
                </div>
            )}
        </div>

    );
};

export default CategoryTabs;
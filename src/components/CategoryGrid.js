// CategoryGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.css';
import { categories } from './Categories';

const CategoryGrid = () => {
    return (
        <div className="category-grid">
            {categories.map(category => (
                <div key={category.id} className="category-item">
                    <Link to={`/category/${category.id}`}>
                        {category.name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CategoryGrid;
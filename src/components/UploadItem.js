import React, { useState } from 'react';
import axios from 'axios';
import './UploadItem.css';

const UploadItem = () => {
    const [formData, setFormData] = useState({
        cat_id: '',
        item_name: '',
        item_price: '',
        item_unit: '',
        item_origin: '',
        item_info: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            cat_id: parseInt(formData.cat_id, 10),
            item_unit: parseInt(formData.item_unit),
            item_price: parseInt(formData.item_price)
        };

        axios.post('http://localhost:3000/items-for-sale/createItem', dataToSend)
            .then(response => {
                alert("상품이 성공적으로 업로드 되었습니다!");
            })
            .catch(error => {
                console.error('There was an error uploading the item!', error);
            });
    };

    return (
        <div className="upload-container">
            <form className="upload-form" onSubmit={handleSubmit}>
                <h2>상품 등록</h2>
                <div>
                    <label>상품 카테고리:</label>
                    <input type="text" name="cat_id" value={formData.cat_id} onChange={handleChange} required />
                </div>
                <div>
                    <label>상품명:</label>
                    <input type="text" name="item_name" value={formData.item_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>가격:</label>
                    <input type="text" name="item_price" value={formData.item_price} onChange={handleChange} required />
                </div>
                <div>
                    <label>판매 단위:</label>
                    <input type="text" name="item_unit" value={formData.item_unit} onChange={handleChange} required />
                </div>
                <div>
                    <label>원산지:</label>
                    <input type="text" name="item_origin" value={formData.item_origin} onChange={handleChange} required />
                </div>
                <div>
                    <label>상품 정보:</label>
                    <textarea name="item_info" value={formData.item_info} onChange={handleChange} required />
                </div>
                <button type="submit">등록</button>
            </form>
        </div>
    );
};

export default UploadItem;

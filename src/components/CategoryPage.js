import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/top-categories/${id}/items`)
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products: ', error));
    }, [id]);

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h2>카테고리 {data.top_cat_name}</h2>
            {data.detailedCategory.map(detail => (
                <div key={detail.detailed_cat_id}>
                    <h3>{detail.detailed_cat_name}</h3>
                    <ul>
                        {detail.items.map(item => (
                            <li key={item.item_id} className="">
                                <Link to={`/detailedView/${item.item_id}`}>
                                    {item.item_name} - {item.item_price}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CategoryPage;
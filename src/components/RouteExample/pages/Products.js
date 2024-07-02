import React from 'react';
import { Link } from "react-router-dom" // 새로고침을 막기 위한 컴포넌트

const DUMMY_PRODUCTS = [
    {id: 'p1', name: '세탁기'},
    {id: 'p2', name: '에어컨'},
    {id: 'p3', name: '청소기'},
]


const Products = () => {

    console.log("products!")
    
    return (
        <>
            <h1>My Products Page</h1>
            <ul>
                {
                    DUMMY_PRODUCTS.map(prod => (
                        <li key={prod.id}>
                            <Link to={`{${prod.id}/page/10}`} >{prod.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
)
    ;
};

export default Products;
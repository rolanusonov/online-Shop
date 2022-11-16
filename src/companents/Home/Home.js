import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(({data}) => setProducts(data)).catch((error) => console.log(error, "<== Error"))

    }, [])
    console.log(products)


    return (
        <div className="container">
            <div className="blockShop">
                {
                    products.map(el => (
                        <div key={el.id} className="block">
                            <Link to={`/detail/${el.id}`}>
                                <img src={el.image ? el.image : 'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000'} alt="тщ шьпп"/>
                                <p className="desc">
                                    {el.title}
                                </p>

                            </Link>

                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Home;
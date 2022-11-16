import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";




 const Detail = () => {
     const {id} = useParams()
  const [detail,setDetail] = useState( {})

     useEffect(() => {
         axios.get(`https://fakestoreapi.com/products/${id}`)
             .then((res) => setDetail(res.data)).catch()
     },[])

      return (
        <div className="container">
            <div className="detail">
                <img src={detail.image} alt=""/>
                <div>

                </div>



            </div>
        </div>
    );
};


export default Detail;
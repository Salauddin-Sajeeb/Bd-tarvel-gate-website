import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { name, img, description, price, _id } = service;
    return (
        <div>
            <div className="pb-5 shadow  mb-5 bg-body rounded">
                <img className="pd-img" src={img} alt="" />
                <h5>package : {name}</h5>
                <h6>Cost : ৳ {price}</h6>
                <p>Description: {description.substring(0, 30)}</p>
                <Link to={`/services/${_id}`}>
                    <button className="btn-warning mb-2">Order now </button>
                </Link> <br />

            </div>
        </div>
    );
};

export default SingleService;
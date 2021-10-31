import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import './service.css';
const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://peaceful-fortress-22704.herokuapp.com/packages')
            .then(rest => rest.json())
            .then(data => setServices(data))


    }, [])

    return (
        <div>
            <div className="rounded-pill w-100 border border-dark text-center p-3 my-3 "><h1 id="products" className="text-center">Our Services</h1></div>
            <div className="container body-container">
                <div className="container-service mt-5">

                    {
                        services.map(service => <SingleService
                            service={service}
                            key={service._id}

                        >

                        </SingleService>)

                    }
                </div>
            </div>
        </div>
    );
};
export default Service;
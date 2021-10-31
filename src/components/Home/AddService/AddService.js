import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './addservice.css'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (data.insertedId) {
                    alert("new data added successfully");
                    reset();
                }

            })

    }
    return (
        <div className="add-service">
            <h2>add a Package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="photo Url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
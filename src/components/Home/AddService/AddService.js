import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';
import './addservice.css'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://peaceful-fortress-22704.herokuapp.com/packages', data)
            .then(res => {
                if (data.insertedId) {
                    alert("new data added successfully");
                    reset();
                }

            })

    }
    return (
        <div>
            <Header></Header>
            <div className="add-service">
                <h2>Add a Package</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                    <textarea {...register("description")} placeholder="description" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="photo Url" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;
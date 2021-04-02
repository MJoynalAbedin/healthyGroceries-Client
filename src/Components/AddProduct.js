import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = (event) => {
        // console.log(event.target.files[0])

        const imageData = new FormData();
        imageData.set('key', 'a349e346600fe991337cf0789ca7b0e1');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = data => {

        const productData = {
            Name: data.Name,
            weight: data.weight,
            price: '$'+data.price,
            img: imageURL
        }
        // console.log(productData);

        fetch('https://pumpkin-surprise-01105.herokuapp.com/addProduct', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log(res));
            alert("Product Added!")
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div  className="row bg-light rounded shadow p-3" >
                    <input className="col-lg-5 form-control m-2" placeholder="Enter Product Name" name="Name" ref={register} />
                    <input className="col-lg-5 form-control m-2" placeholder="Enter Product Weight" name="weight" ref={register} />
                    <input className="col-lg-5 form-control m-2" placeholder="Enter Product Price" name="price" ref={register} />
                    <input className="col-lg-6 m-2" name="exampleRequired" type="file" onChange={handleImageUpload} />
                </div>
                <input className="float-right btn btn-primary mt-3" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
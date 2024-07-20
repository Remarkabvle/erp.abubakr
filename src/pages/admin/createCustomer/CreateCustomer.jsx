import React, { useState } from "react";
import { useCreateCustomerMutation } from "../../../context/api/customerApi";
import "./customerCreate.scss";
import img from '../../../assets/img.avif'

const initialState = {
    fname: "",
    lname: "",
    phone_primary: "",
    address: "",
    budget: "",
};

const CreateCustomer = () => {
    let [createCustomers, { data: custom }] = useCreateCustomerMutation();
    const [data, setData] = useState(initialState);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCreate = (e) => {
        e.preventDefault();
        createCustomers(data);
        console.log(data);
        setData(initialState);
    };

    return (
        <div className="new-customer">
            <img src={img} alt="Customers image" />
            <form className="new-customer-form" onSubmit={handleCreate}>
                <div className="form-fields">
                    <input
                        type="text"
                        name="fname"
                        placeholder="First name"
                        value={data.fname}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lname"
                        placeholder="Last name"
                        value={data.lname}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="phone_primary"
                        placeholder="Phone number"
                        value={data.phone_primary}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={data.address}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="budget"
                        placeholder="Budget"
                        value={data.budget}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateCustomer;

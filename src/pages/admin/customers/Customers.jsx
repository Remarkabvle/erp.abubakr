import React, { useState } from "react";
import {
    useGetCustomersQuery,
    useUpdateCustomerMutation,
} from "../../../context/api/customerApi";
import "./customers.scss";
import { Link } from "react-router-dom";
import Model from "../../../components/model/Model";
import CreatePayment from "../../../components/createPayment/CreatePayment";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CustomerCarts from "../../../components/customer-carts/CustomerCarts";

const Customers = () => {
    const [payment, setPayment] = useState(false);
    const [page, setPage] = useState(1);
    const [activeIndex, setActiveIndex] = useState(null);
    let { data } = useGetCustomersQuery({ page: page - 1 });
    let count = Math.ceil(data?.totalCount / 10);

    let [updateCustomer] = useUpdateCustomerMutation();

    const handleChange = (event, value) => {
        setPage(value);
    };

    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    let productItems = data?.innerData.map((el, index) => (
        <CustomerCarts 
            key={el._id} 
            el={el} 
            active={activeIndex === index} 
            onClick={() => toggleActive(index)} 
        />
    ));

    return (
        <>
            <section id="customers">
                <div className="customers container">
                    <table className="customers__table">
                        <thead>
                            <tr className="table__header">
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Budget</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>{productItems}</tbody>
                    </table>
                    <Stack className="customers__pagination" spacing={2}>
                        <Pagination
                            count={count}
                            page={page}
                            onChange={handleChange}
                        />
                    </Stack>
                </div>
            </section>
            {payment ? (
                <Model close={setPayment}>
                    <CreatePayment id={payment._id} setPayment={setPayment} />
                </Model>
            ) : null}
        </>
    );
};

export default Customers;

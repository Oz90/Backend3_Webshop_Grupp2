import React from "react";
import { Link } from "react-router-dom";

export const AdminPage = () => {


    return (
        <div>
            < h2 > Admin Page</h2 >
            <Link to="/admin/orders">Orders</Link>
            <Link to="/admin/products">Products</Link>
        </div>
    );
};

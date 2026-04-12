import React from "react";
import { Link } from "react-router-dom";

export default function AdminSideBar() {
  return (
    <>
      <div className="list-group mb-5">

        <Link to="/admin" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-house"></i><span className="float-end mt-2">Home</span></Link>
        <Link to="/admin/maincategory" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-card-checklist"></i><span className="float-end mt-2">Main category</span></Link>
        <Link to="/admin/subcategory" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-card-list"></i><span className="float-end mt-2">Sub category</span></Link>
        <Link to="/admin/brand" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-list-stars"></i><span className="float-end mt-2">Brand</span></Link>
        <Link to="/admin/products" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-list-ol"></i><span className="float-end mt-2">Products</span></Link>
        <Link to="/admin/feature" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-list-check"></i><span className="float-end mt-2">Features</span></Link>
        <Link to="/admin/faq" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-question-circle"></i><span className="float-end mt-2">Faq</span></Link>
        <Link to="/admin/privacy-policy" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-house-lock"></i><span className="float-end mt-2">Privacy-policy</span></Link>
        <Link to="/admin/terms-conditions" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-shield-exclamation"></i><span className="float-end mt-2">Terms-Conditions</span></Link>
        <Link to="/admin/setting" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-house-gear"></i><span className="float-end mt-2">Settings</span></Link>
        <Link to="/admin/newsletter" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-envelope"></i><span className="float-end mt-2">Newsletter</span></Link>
        <Link to="/admin/contact" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-telephone-inbound"></i><span className="float-end mt-2">Contact us</span></Link>
        <Link to="/admin/checkout" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-cart-check"></i><span className="float-end mt-2">Checkout</span></Link>
        <Link to="/admin/user" className="list-group-item mybackground text-light" aria-current="true"><i className="bi bi-person-plus"></i><span className="float-end mt-2">User</span></Link>


      </div>
    </>
  );
}

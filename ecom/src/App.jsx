import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import ContactusPage from "./pages/ContactusPage";
import Error404Page from "./pages/Error404Page";
import PrivacyPolicyPage from "./pages/policies/PrivacyPolicyPage";
import TermsAndCondtions from "./pages/policies/TermsAndConditions";
import LoginPage from "./pages/User/LoginPage";
import SignupPage from "./pages/User/SignupPage";
import ProfilePage from "./pages/User/ProfilePage";
import CartPage from "./pages/User/CartPage";
import CheckoutPage from "./pages/User/CheckoutPage";
import AdminHomePage from "./pages/admin/AdminHomePage";

import AdminCreateMaincategoryPage from "./pages/admin/Maincategory/AdminCreateMaincategoryPage";
import AdminMaincategoryPage from "./pages/admin/Maincategory/AdminMaincategoryPage";
import AdminUpdateMaincategoryPage from "./pages/admin/Maincategory/AdminUpdateMaincategoryPage";

import AdminCreateSubcategoryPage from "./pages/admin/Subcategory/AdminCreateSubcategoryPage";
import AdminSubcategoryPage from "./pages/admin/Subcategory/AdminSubcategoryPage";
import AdminUpdateSubcategoryPage from "./pages/admin/Subcategory/AdminUpdateSubcategoryPage";

import AdminCreateBrandPage from "./pages/admin/Brand/AdminCreateBrandPage";
import AdminBrandPage from "./pages/admin/Brand/AdminBrandPage";
import AdminUpdateBrandPage from "./pages/admin/Brand/AdminUpdateBrandPage";

import AdminCreateFeaturePage from "./pages/admin/Feature/AdminCreateFeaturePage";
import AdminFeaturePage from "./pages/admin/Feature/AdminFeaturePage";
import AdminUpdateFeaturePage from "./pages/admin/Feature/AdminUpdateFeaturePage";

import AdminCreateFaqPage from "./pages/admin/Faq/AdminCreateFaqPage";
import AdminFaqPage from "./pages/admin/Faq/AdminFaqPage";
import AdminUpdateFaqPage from "./pages/admin/Faq/AdminUpdateFaqPage";

import AdminSettingPage from "./pages/admin/Setting/AdminSettingPage";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element = {<Home/>}/>
          <Route path="/about" element = {<AboutPage/>}/>
          <Route path="/features" element={<FeaturesPage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>   
          <Route path="/product/:id" element={<ProductPage/>}/>
          <Route path="/testimonial" element={<TestimonialPage/>}/>
          <Route path="/faq" element={<FaqPage/>}/>
          <Route path="/contact" element={<ContactusPage/>}/>
          <Route path="/privacy-policies" element={<PrivacyPolicyPage/>}/>
          <Route path="/terms-conditions" element={<TermsAndCondtions/>}/>


          {/* Admin routes */}
          <Route path="/admin" element={<AdminHomePage/>}/>

          <Route path="/admin/maincategory" element={<AdminMaincategoryPage/>}/>
          <Route path="/admin/maincategory/create" element={<AdminCreateMaincategoryPage/>}/>
          <Route path="/admin/maincategory/update/:id" element={<AdminUpdateMaincategoryPage/>}/>

          <Route path="/admin/subcategory/create" element={<AdminCreateSubcategoryPage/>}/>
          <Route path="/admin/subcategory" element={<AdminSubcategoryPage/>}/>
          <Route path="/admin/subcategory/update/:id" element={<AdminUpdateSubcategoryPage/>}/>

          <Route path="/admin/brand/create" element={<AdminCreateBrandPage/>}/>
          <Route path="/admin/brand" element={<AdminBrandPage/>}/>
          <Route path="/admin/brand/update/:id" element={<AdminUpdateBrandPage/>}/>

          <Route path="/admin/feature/create" element={<AdminCreateFeaturePage/>}/>
          <Route path="/admin/feature" element={<AdminFeaturePage/>}/>
          <Route path="/admin/feature/update/:id" element={<AdminUpdateFeaturePage/>}/>


          <Route path="/admin/faq/create" element={<AdminCreateFaqPage/>}/>
          <Route path="/admin/faq" element={<AdminFaqPage/>}/>
          <Route path="/admin/faq/update/:id" element={<AdminUpdateFaqPage/>}/>

          <Route path="/admin/setting" element={<AdminSettingPage/>}/>

          


          
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>


          {/* ********* User Routes******* */}
          <Route path="/profile" element ={<ProfilePage/>}/>
          <Route path="/cart" element ={<CartPage/>}/> 
          <Route path="/checkout" element={<CheckoutPage/>}/>

          

          <Route path="/*" element={<Error404Page/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

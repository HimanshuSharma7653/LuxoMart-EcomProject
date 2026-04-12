import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';

import { getSetting, createSetting, updateSetting } from "../../../Redux/ActionCreators/SettingActionCreators"


import AdminSideBar from '../../../Components/admin/AdminSideBar'




export default function AdminSettingPage() {
    let [data, setData] = useState({
        map1: "",
        map2: "",
        address: "",
        siteName: "",
        logoTop: "",
        logoBottom: "",
        email: "",
        phone: "",
        whatsapp: "",
        privacyPolicy: "",
        termsCondition: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        instagram: "",
        youtube: "",
    })



    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()


    function getInputData(e) {
        let name = e.target.name
        let value = (name === "logoTop" || name === "logoBottom")?  "logo/" + e.target.files[0].name : e.target.value


        setData({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
    }

        function postData(e) {

            e.preventDefault()
           
            if(SettingStateData && SettingStateData.length)
                dispatch(updateSetting({...data}))
            else
                dispatch(createSetting({...data}))

             
            toast("Setting has been Updated successfully ")

        }


        useEffect(() => {
            dispatch(getSetting())
            if(SettingStateData && SettingStateData.length){
                setData({ ...data, ...SettingStateData[0] })
            }
        }, [SettingStateData.length])

        return (
            <>
            
                <div className="container-fluid my-3">
                    <ToastContainer />
                    <div className="row">
                        <div className="col-md-3">
                            <AdminSideBar />
                        </div>
                        <div className="col-md-9">
                            <h5 className='mybackground text-light text-center p-2'>Website setting</h5>
                            <form onSubmit={postData}>
                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <label>Map 1</label>
                                        <input type="text" name="map1" onChange={getInputData} placeholder='Google map1' value={data.map1} className='form-control border-dark' />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label>Map 2</label>
                                        <input type="text" name="map2" onChange={getInputData} placeholder='Google map2' value={data.map2} className='form-control border-dark' />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label>Adrress</label>
                                        <input type="text" name="address" onChange={getInputData} placeholder='Address' value={data.address} className='form-control border-dark' />
                                    </div>

                                    <div className="col-lg-4 mb-3">
                                        <label>Site Name</label>
                                        <input type="text" name="siteName" onChange={getInputData} placeholder='Site name' value={data.siteName} className='form-control border-dark' />
                                    </div>

                                    <div className="col-lg-4 mb-3">
                                        <label>Logo Top</label> 
                                        <input type="file" name="logoTop" onChange={getInputData}   className='form-control border-dark' />
                                    </div>

                                    <div className="col-lg-4 mb-3">
                                        <label>Logo Bottom</label> 
                                        <input type="file" name="logoBottom" onChange={getInputData}   className='form-control border-dark' />
                                    </div>

                                    <div className="col-lg-4 mb-3">
                                        <label>Email Address</label>
                                        <input type="email" name="email" onChange={getInputData} placeholder='Email Address' value={data.email} className='form-control border-dark' />
                                    </div>

                                    <div className="col-lg-4 mb-3">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" onChange={getInputData} placeholder='Phone Number' value={data.phone} className='form-control border-dark' />
                                    </div>


                                    <div className="col-lg-4 mb-3">
                                        <label>Whatsapp Number</label>
                                        <input type="text" name="whatsapp" onChange={getInputData} placeholder='Whatsapp Number' value={data.whatsapp} className='form-control border-dark' />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label>Privacy Policy</label>
                                        <textarea name="privacyPolicy" onChange={getInputData} placeholder='Privacy Policy' value={data.privacyPolicy} rows={5} className='form-control border-dark'  ></textarea>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label>Terms & Conditions</label>
                                        <textarea name="termsCondition" onChange={getInputData} placeholder='Terms & Conditions' value={data.termsCondition} rows={5} className='form-control border-dark'  ></textarea>
                                    </div>

                                     <div className="col-12 mb-3">
                                        <label>Facebook Profile Page Url</label>
                                        <input type="url" name="facebook" onChange={getInputData} placeholder='Facebook Profile Page Url' value={data.facebook} className='form-control border-dark' />
                                     </div>

                                     <div className="col-12 mb-3">
                                        <label>Twitter Profile Page Url</label>
                                        <input type="url" name="twitter" onChange={getInputData} placeholder='Twitter Profile Page Url' value={data.twitter} className='form-control border-dark' />
                                     </div>




                                     <div className="col-12 mb-3">
                                        <label>Linked in Profile Page Url</label>
                                        <input type="url" name="linkedin" onChange={getInputData} placeholder='Linked in Profile Page Url' value={data.linkedin} className='form-control border-dark' />
                                     </div>

                                     <div className="col-12 mb-3">
                                        <label>Instagram Profile Page Url</label>
                                        <input type="url" name="instagram" onChange={getInputData} placeholder='Instagram Profile Page Url' value={data.instagram} className='form-control border-dark' />
                                     </div>

                                     <div className="col-12 mb-3">
                                        <label>Youtube Profile Page Url</label>
                                        <input type="url" name="youtube" onChange={getInputData} placeholder='Youtube Profile Page Url' value={data.youtube} className='form-control border-dark' />
                                     </div>
                                     
                                     <div className="col-12 ">
                                        <button type='submit' className='btn btn-primary btn-lg w-100 mybackground'>Submit</button>
                                    </div>

                                </div> 
                            </form>


                        </div>
                    </div>
                </div>
                <div style={{ height: 80 }}></div>
            </>
        )

}
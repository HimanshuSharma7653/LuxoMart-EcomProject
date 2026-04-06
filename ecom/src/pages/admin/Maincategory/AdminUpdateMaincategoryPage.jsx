import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



import FormValidators from '../../../Validators/FormValidators'
import ImageValidators from '../../../Validators/ImageValidators'
import AdminSideBar from '../../../Components/admin/AdminSideBar'
import { useSelector, useDispatch } from 'react-redux'
import { getMaincategory, updateMaincategory } from '../../../Redux/ActionCreators/MaincategoryActionCreators'





export default function AdminUpdateMaincategoryPage() {

    let {id} = useParams()

    let [data,setData] = useState({
        name : "",
        pic : "",
        status : true
    })

    let [errormessage, setErrormessage] = useState({
        name : "",
        pic : ""
    })

    let navigate = useNavigate()
    let [show, setShow] = useState (false)

    let MaincategoryStateData = useSelector(state=> state.MaincategoryStateData)
    let dispatch = useDispatch()


    function getInputData(e){
            let name = e.target.name
            let value = name==="pic"? "maincategory/"+e.target.files[0].name : e.target.value
            // let value = name==="pic"?  e.target.files[0].name : e.target.value

            setData({...data, [name]: name==="status"?(value==="1"?true:false):value})
            setErrormessage({...errormessage,[name]: name==="pic"? ImageValidators(e):FormValidators(e)})
    }

    
    
    function postData(e){
        e.preventDefault()
        let error = Object.values(errormessage).find(x=>x!="")
        if(error)
            setShow(true)
        else{
            let item = MaincategoryStateData.find(x=> x.id !==id && (x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()))
            if(item){
                setErrormessage({...errormessage,name:"Maincategory with this name is already exist"})
                setShow(true)
                return
            }
            dispatch(updateMaincategory({...data}))

            // let formData = new FormData()
            // formData.append("id",data.id)
            // formData.append("name",data.name)
            // formData.append("pic",data.pic)
            // formData.append("status",data.status)
            // dispatch(updateMaincategory({...data}))

         navigate('/admin/maincategory')
        }
        
         

    }

    useEffect(() => {
            (() => {
                dispatch(getMaincategory())

                if(MaincategoryStateData.length){
                let item = MaincategoryStateData.find(x=> x.id===id)
                if(item){
                    setData({...data,...item})
                }
                else
                    navigate("/admin/maincategory")
                
            }})()
        }, [MaincategoryStateData.length])


  return (
    <>
        <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col-md-3">
                            <AdminSideBar/>
                        </div>
                        <div className="col-md-9">
                            <h5 className='mybackground text-light text-center p-2 mb-3 mt-1'>Create Main Category
                                <Link to="/admin/maincategory"><i className='bi bi-arrow-left text-light fs-1 float-end mt-2 '></i></Link>
                            </h5>
                            <form onSubmit={postData}>
                                <div className="row">


                                    <div className="col-12 mb-5">
                                        <input type="text" name='name' value={data.name} placeholder='Maincategory name' onChange={getInputData} className={`form-control ${show && errormessage.name? "border-danger":"myborder"}`} />
                                        {show && errormessage.name?<p className='text-danger'>{errormessage.name}</p>:null}
                                    </div>


                                    <div className="col-md-6 mb-5">
                                        <input type="file" name='pic' onChange={getInputData} className={`form-control ${show && errormessage.pic? "border-danger":"myborder"}`} />
                                        {show && errormessage.pic?<p className='text-danger'>{errormessage.pic}</p>:null}
                                    </div>


                                    <div className="col-md-6 mb-5">
                                        <select name="status" value={data.status?"1":"0"} onChange={getInputData} className='form-select myborder'>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>
                                    </div>


                                    <div className="col-12 mb-5">
                                        <button className='btn btn-primary btn-lg w-100 mybackground p-3'>Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{height:80}}></div>
    </>
  )
}

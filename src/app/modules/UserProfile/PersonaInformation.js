import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import * as auth from "../Auth";
import InputField from "./components/inputField";

function PersonaInformation(props) {
  const [statea, setstate] = useState([]);
  const imag = `https://quiet-dusk-10883.herokuapp.com/static`;
  useEffect(()=>{
        async function getData(){
        const data = {
            _id:"607800ccdcf88300154e9031",
        }
      const userData = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
      const res = await fetch('https://quiet-dusk-10883.herokuapp.com/userProfile/readUserData', userData);
      const json = await res.json();
        //console.log(json.data.[0]);
        setstate(json.data.[0]);
      }
      getData();
    },[])
  // Fields
  const [loading, setloading] = useState(false);
  const [pic, setPic] = useState("");
  const [profileImage, setprofileImage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user, shallowEqual);
  useEffect(() => {
    if (user.pic) {
      setPic(user.pic);
    }
  }, [user]);
  // Methods
  const saveUser = (values, setStatus, setSubmitting) => {
    setloading(true);
    const updatedUser = Object.assign(user, values);
    // user for update preparation
    dispatch(props.setUser(updatedUser));
    setTimeout(() => {
      setloading(false);
      setSubmitting(false);
    }, 1000);
  };
  // UI Helpers
  const initialValues = {
    profileImage: "",
    Name: statea.Name,
    //lastname: user.lastname,
    // companyName: user.companyName,
    phone: "",
    email: "",
    password: "",
    //website: user.website,
  };
  const Schema = Yup.object().shape({
    profileImage: Yup.string(),
    Name: Yup.string().required("Your Name is required"),
//    lastname: Yup.string().required("Last name is required"),
//    companyName: Yup.string(),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string()
      .email("Wrong email format")
      .required("Email is required"),
    password: Yup.string().required("Enter Your password for Changes"),  
//    website: Yup.string(),
  });
  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      //console.log(values);
      async function gotData(){
        const data = {
                _id:"607800ccdcf88300154e9031",
                Name: values.Name,
                Email: values.email,
                password: values.password,
                Mobnumber: values.phone,
                profileImage:values.profileImage
              }
              console.log(data)
            const TaskChecked = {
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(data)
            }
            const res = await fetch('https://quiet-dusk-10883.herokuapp.com/userProfile/ProfieUpDate', TaskChecked);
            const json = await res.json();
            console.log(json);
          }
            gotData();

      saveUser(values, setStatus, setSubmitting);
    },
    onReset: (values, { resetForm }) => {
      resetForm();
    },
  });
  const getUserPic = () => {
    if (!profileImage) {
      return "none";
    }

    return `url(${profileImage})`;
  };
  const removePic = () => {
    setprofileImage("");
  };
  return (
    <form
      className="card card-custom card-stretch"
      onSubmit={formik.handleSubmit}
    >
      {loading && <ModalProgressBar />}

      {/* begin::Header */}
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
            Personal Information
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            Update your personal informaiton
          </span>
        </div>
        <div className="card-toolbar">
          <button
            type="submit"
            className="btn btn-success mr-2"
            disabled={
              formik.isSubmitting || (formik.touched && !formik.isValid)
            }
          >
            Save Changes
            {formik.isSubmitting}
          </button>
          <Link
            to="/user-profile/profile-overview"
            className="btn btn-secondary"
          >
            Cancel
          </Link>
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Form */}
      <div className="form">
        {/* begin::Body */}
        <div className="card-body">
          <div className="row">
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label">Avatar</label>
            <div className="col-lg-9 col-xl-6">
              <div
                className="image-input image-input-outline"
                id="kt_profile_avatar"
                style={{
                  backgroundImage: `url(${toAbsoluteUrl(
                    "/media/users/blank.png"
                  )}`,
                }}
              >
                <div
                  className="image-input-wrapper"
                  style={{ backgroundImage: `${getUserPic()}` }}
                />
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                     name="profileImage"
                    accept=".png, .jpg, .jpeg"
                     {...formik.getFieldProps("profileImage")}
                  />
                  <input type="hidden" name="profile_avatar_remove" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  onClick={removePic}
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <span className="form-text text-muted">
                Allowed file types: png, jpg, jpeg.
              </span>
            </div>
          </div>


        {/*Field fr taking input*/}
          
          <InputField 
            lableName = "Name" 
            getInputHere = {getInputClasses} 
            formHandlemik = {formik}
            DisplayName = {{...formik.getFieldProps("Name")}}/>
            
          <InputField 
            lableName = "phone" 
            getInputHere = {getInputClasses} 
            formHandlemik = {formik}
            DisplayName = {{...formik.getFieldProps("phone")}}/>

          <InputField 
            lableName = "email" 
            getInputHere = {getInputClasses} 
            formHandlemik = {formik}
            DisplayName = {{...formik.getFieldProps("email")}}/> 

          <InputField 
            lableName = "password" 
            getInputHere = {getInputClasses} 
            formHandlemik = {formik}
            DisplayName = {{...formik.getFieldProps("password")}}/>
         
        
        </div>
        {/* end::Body */}
      </div>
      {/* end::Form */}
    </form>
  );
}

export default connect(null, auth.actions)(PersonaInformation);

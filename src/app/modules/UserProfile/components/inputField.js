import React from "react";

const InputField = (props)=>{
	const getInput = props.getInputHere;
	const formik = props.formHandlemik;
	const displayName = props.DisplayName;
		return(

			<div className="form-group row">
	            <label className="col-xl-3 col-lg-3 col-form-label">
	              {props.lableName}
	            </label>
	            <div className="col-lg-9 col-xl-6">
	              <input
	                type="text"
	                placeholder={props.lableName}
	                className={`form-control form-control-lg form-control-solid ${getInput(
	                  `${props.lableName}`
	                )}`}
	                name="firstname"
	               	{...displayName}
	              />
	              {formik.touched.firstname && formik.errors.firstname ? (
	              	                <div className="invalid-feedback">
	              	                  {formik.errors.firstname}
	              	                </div>
	              	              ) : null}
	             
	            </div>
	        </div>
        )
}

export default InputField;

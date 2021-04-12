/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
//Simport { Dropdown } from "react-bootstrap";
//import { DropdownCustomToggler, DropdownMenu3 } from "../../dropdowns";
//import data from "./ListsWidget14";

export function ListsWidget10({ className }) {
  const app = [{
    id:1,
    TaskName: "Daliy standUp meeting",
    Description:"this meeting is for Tejas and team",
    prority:4,
  },{
    id:2,
    TaskName: "UserProfile Complete",
    Description:"user Data and there information need ",
    prority:2,
  }]
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Completed Task
          </h3>
        </div>


        {/* Body */}
        <div className="card-body pt-0">
          {app.map((val)=>{
              return(
              
              <div>
              
        
        
                {/* begin::Body */}
                <div className="card-body pt-2">
                  {/* begin::Item */}
                  <div className="d-flex flex-wrap align-items-center mb-1">
        
                    {/* begin::Title */}
                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                      <a
                        href="#"
                        className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                      >


                       {val.TaskName}
                      

                      </a>
                      <span className="text-muted font-weight-bold font-size-sm my-1">


                       {val.Description}
                      

                      </span>
                    </div>
                    {/* end::Title */}
        
                    {/* begin::Info */}
                    <div className="d-flex align-items-center py-lg-0 py-2">
                      <div className="d-flex flex-column text-right">
                        <label className="checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4">
                <input type="checkbox" value="1" />
                <span></span>
              </label>
                        <span className="text-muted font-size-sm font-weight-bolder">



                          Check it



                        </span>
                      </div>
                    </div>
                    {/* end::Info */}
                  </div>
                  {/* end::Item */}

          
        </div>
      </div>
      
                )
         })
      }
        </div>
      </div>
    </>
  );
}

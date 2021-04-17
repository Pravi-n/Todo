/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React,{  useState, useEffect } from "react";
//Simport { Dropdown } from "react-bootstrap";
//import { DropdownCustomToggler, DropdownMenu3 } from "../../dropdowns";
//import data from "./ListsWidget14";

export function ListsWidget10({ className }) {
    const [state, setstate] = useState([]);
    useEffect(()=>{
        async function getData(){
        const data = {
          User_ID:121213
        }
        const Checked = {
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
        }
        const res = await fetch('https://quiet-dusk-10883.herokuapp.com/taskTodo/readChecked', Checked);
        const json = await res.json();
        console.log(json);
        setstate(json);
      }
      getData();
    },[])
  
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
          {state.map((val)=>{
              return(
              
              <div key={val._id}>
              
        
        
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

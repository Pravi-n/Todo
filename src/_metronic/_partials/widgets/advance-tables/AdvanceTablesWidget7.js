import React, { useState, useEffect } from "react";
import SVG from "react-inlinesvg";
import { Nav, Tab } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_helpers";

export function AdvanceTablesWidget7({ className }) {
  const [key, setKey] = useState("Month");
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
        const res = await fetch('https://quiet-dusk-10883.herokuapp.com/taskTodo/readAllSecUser', Checked);
        const json = await res.json();
        console.log(json);
        setstate(json);
      }
      getData();
    },[])

  return (
    <div className={`card card-custom ${className}`}>
      {/* Head */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            History
          </span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">
            History of user
          </span>
        </h3>

        <div className="card-toolbar">
          <Tab.Container defaultActiveKey={key}>
            <Nav
              as="ul"
              onSelect={(_key) => setKey(_key)}
              className="nav nav-pills nav-pills-sm nav-dark-75"
            >
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Month"
                  className={`nav-link py-2 px-4 ${
                    key === "Month" ? "active" : ""
                  }`}
                >
                  Month
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
        </div>
      </div>
      {/* Body */}

      <div className="card-body pt-2 pb-0 mt-n3">
        <div className={`tab-content mt-5`} id="myTabTables12">
          {/* begin::Tap pane MONTH */}
          <div
            className={`tab-pane fade ${key === "Month" ? "show active" : ""}`}
          >
            <div className="table-responsive">
              <table className="table table-borderless table-vertical-center">
                


                <thead>
                  <tr>
                    <th className="p-0" style={{ minWidth: "250px" }} />
                    <th className="p-0" style={{ minWidth: "30px" }} />
                    <th className="p-0" style={{ minWidth: "50px" }} />
                    <th className="p-0" style={{ minWidth: "50px" }} />
                  </tr>
                </thead>

                <tbody>



        {state.map((val)=>{
             const subString = val.Created_Date.substr(0, 10)
              return(
                 <tr key={val._id}>
                    
                    <td className="pl-0">
                      <a href="#"
                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">

                        {val.TaskName}
                      
                      </a>
                      <div>
                        <span className="font-weight-bolder">Description:</span>{" "}
                        <a className="text-muted font-weight-bold text-hover-primary" href="#" >
                        
                           {val.Description}
                        
                        </a>
                      </div>
                    </td>
                    <td className="text-right">
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Date:
                      </span>
                      
                    </td>
                    <td className="text-right">
                      <span className="text-muted font-weight-500">
                        {subString}
                      </span>
                    </td>
                    <td className="text-right">
                    {val.Task_Status=="2"?(<span className="label label-lg label-light-success label-inline">
                                              Completed
                      </span>):(<span className="label label-lg label-light-danger label-inline">
                                              onGoing
                      </span>)

                    }
                    </td>



                  </tr> 
                  )}
              )}


                </tbody>




              </table>
            </div>
          </div>
          {/* end::Tap pane MONTH */}

         
        </div>
      </div>
    </div>
  );
}

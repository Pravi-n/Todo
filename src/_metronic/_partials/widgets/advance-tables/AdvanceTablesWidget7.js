/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { Nav, Tab } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_helpers";

export function AdvanceTablesWidget7({ className }) {
  const [key, setKey] = useState("Month");

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
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Week"
                  className={`nav-link py-2 px-4 ${
                    key === "Week" ? "active" : ""
                  }`}
                >
                  Week
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Day"
                  className={`nav-link py-2 px-4 ${
                    key === "Day" ? "active" : ""
                  }`}
                >
                  Day
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
                    <th className="p-0" style={{ minWidth: "200px" }} />
                    <th className="p-0" style={{ minWidth: "100px" }} />
                    <th className="p-0" style={{ minWidth: "125px" }} />
                    <th className="p-0" style={{ minWidth: "110px" }} />
                    <th className="p-0" style={{ minWidth: "150px" }} />
                  </tr>
                </thead>
                <tbody>

                 <tr>
                    
                    <td className="pl-0">
                      <a
                        href="#"
                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                      >
                        Kindle Update
                      </a>
                      <div>
                        <span className="font-weight-bolder">Description:</span>{" "}
                        <a
                          className="text-muted font-weight-bold text-hover-primary"
                          href="#"
                        >
                          This is about just description
                          dvhevberkvberkvbirehvekrbverb
                        </a>
                      </div>
                    </td>
                    <td className="text-right">
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        ProjectName
                      </span>
                      
                    </td>
                    <td className="text-right">
                      <span className="text-muted font-weight-500">
                        12-12-2000
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="label label-lg label-light-success label-inline">
                        Success
                      </span>
                    </td>
                    <td className="text-right pr-0">
                    
                      <a
                        href="#"
                        className="btn btn-icon btn-light btn-sm mx-3"
                      >
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                          <SVG
                            src={toAbsoluteUrl(
                              "/media/svg/icons/Communication/Write.svg"
                            )}
                          ></SVG>
                        </span>
                      </a>
                      <a href="#" className="btn btn-icon btn-light btn-sm">
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                          <SVG
                            src={toAbsoluteUrl(
                              "/media/svg/icons/General/Trash.svg"
                            )}
                          ></SVG>
                        </span>
                      </a>
                    </td>
                  </tr> 
                </tbody>
              </table>
            </div>
          </div>
          {/* end::Tap pane MONTH */}

          {/* start::Tap pan day*/}
          <div
            className={`tab-pane fade ${key === "Week" ? "show active" : ""}`}
          >
            <div className="table-responsive">
              <table className="table table-borderless table-vertical-center">
                <thead>
                  <tr>
                    <th className="p-0" style={{ minWidth: "200px" }} />
                    <th className="p-0" style={{ minWidth: "100px" }} />
                    <th className="p-0" style={{ minWidth: "125px" }} />
                    <th className="p-0" style={{ minWidth: "110px" }} />
                    <th className="p-0" style={{ minWidth: "150px" }} />
                  </tr>
                </thead>
                <tbody>

                 <tr>
                    
                    <td className="pl-0">
                      <a
                        href="#"
                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                      >
                        Payrol Application
                      </a>
                      <div>
                        <span className="font-weight-bolder">Email:</span>{" "}
                        <a
                          className="text-muted font-weight-bold text-hover-primary"
                          href="#"
                        >
                          company@dev.com
                        </a>
                      </div>
                    </td>
                    <td className="text-right">
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $560,000
                      </span>
                      <span className="text-muted font-weight-bold">Paid</span>
                    </td>
                    <td className="text-right">
                      <span className="text-muted font-weight-500">
                        Laravel, Metronic
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="label label-lg label-light-success label-inline">
                        Success
                      </span>
                    </td>
                    <td className="text-right pr-0">
                    
                      <a
                        href="#"
                        className="btn btn-icon btn-light btn-sm mx-3"
                      >
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                          <SVG
                            src={toAbsoluteUrl(
                              "/media/svg/icons/Communication/Write.svg"
                            )}
                          ></SVG>
                        </span>
                      </a>
                      <a href="#" className="btn btn-icon btn-light btn-sm">
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                          <SVG
                            src={toAbsoluteUrl(
                              "/media/svg/icons/General/Trash.svg"
                            )}
                          ></SVG>
                        </span>
                      </a>
                    </td>
                  </tr> 
                </tbody>
              </table>
            </div>
          </div>  
          {/* end::Tap pane Day */}
         
          {/* start::Tap pan day*/}
          <div
            className={`tab-pane fade ${key === "Day" ? "show active" : ""}`}
          >
           <div className="table-responsive">
              <table className="table table-borderless table-vertical-center">
                <thead>
                  <tr>
                    <th className="p-0" style={{ minWidth: "200px" }} />
                    <th className="p-0" style={{ minWidth: "100px" }} />
                    <th className="p-0" style={{ minWidth: "125px" }} />
                    <th className="p-0" style={{ minWidth: "110px" }} />
                    <th className="p-0" style={{ minWidth: "150px" }} />
                  </tr>
                </thead>
                <tbody>

                 <tr>
                    
                    <td className="pl-0">
                      <a
                        href="#"
                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                      >
                        Payrol Application
                      </a>
                      <div>
                        <span className="font-weight-bolder">Email:</span>{" "}
                        <a
                          className="text-muted font-weight-bold text-hover-primary"
                          href="#"
                        >
                          company@dev.com
                        </a>
                      </div>
                    </td>
                    <td className="text-right">
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $560,000
                      </span>
                      <span className="text-muted font-weight-bold">Paid</span>
                    </td>
                    <td className="text-right">
                      <span className="text-muted font-weight-500">
                        Laravel, Metronic
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="label label-lg label-light-success label-inline">
                        Success
                      </span>
                    </td>
                    <td className="text-right pr-0">
                    
                      <a
                        href="#"
                        className="btn btn-icon btn-light btn-sm mx-3"
                      >
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                          <SVG
                            src={toAbsoluteUrl(
                              "/media/svg/icons/Communication/Write.svg"
                            )}
                          ></SVG>
                        </span>
                      </a>
                      <a href="#" className="btn btn-icon btn-light btn-sm">
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                          <SVG
                            src={toAbsoluteUrl(
                              "/media/svg/icons/General/Trash.svg"
                            )}
                          ></SVG>
                        </span>
                      </a>
                    </td>
                  </tr> 
                </tbody>
              </table>
            </div>
          </div>  
          {/* end::Tap pane Day */}
        </div>
      </div>
    </div>
  );
}

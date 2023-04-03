import React from "react";
import { useState, useEffect} from 'react';
import { Tabs } from "@mantine/core";
import InputField from "../../others/Fields/InputField";
// import Button from "../../../components/button/ButtonComponent";
import HeaderComponent from "../../others/Header/HeaderComponent";

// import ButtonType from "../../../components/button/ButtonType";
import ButtonComponent from "../../others/Button/ButtonComponent";
// import Header from "../../others/Header/HeaderComponent";
// import DataTablee from "../../others/Datatable/DataTable";
import RelationDetails from "./relation-details";
import AccountDetails from "./account-details";
import DataTable from "../../others/Datatable/DataTable";
import SelectField from "../../others/Fields/SelectField";
import Modal from 'react-bootstrap/Modal';
import Header from "../../others/Header/HeaderComponent";
import ButtonType from "../../others/Button/ButtonType";

function CustomerDetails() {
  const [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [active,setActive] = useState(false);
  const handleActive = () => setActive(true);
  const handleInactive = () => setActive(false);

  return (
    <div className="parent" style={{padding:""}}>
      <div
        className="tops"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "5px",
          padding: "2px",
          
        }}
      >
        <div style={{display:"flex",justifyContent:"flex-start",paddingTop:"5px",paddingBottom:"5px"}}>
            <div style={{flex:0.25,marginLeft:"10px"}}>
          <InputField
            label={"Customer ID"}
            labelWidth={"40%"}
            inputWidth={"55%"}
            disabled
          />    
            </div>
            <div style={{flex:0.35}}>
          <InputField
            inputWidth={"65%"}
            disabled
            />
            </div>
        </div>
      </div>
      <br></br>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "0.3" }}></div>
        <div
          style={{
            flex: "0.3",
            display: "flex",
            gap:'20px',
          }}
        >
          <ButtonComponent
            buttonName={"CUSTOMER"}
            buttonWidth={"130px"}
          />

          <ButtonComponent
            buttonName={"RELATION"}
            buttonWidth={"130px"}
            onClick={handleOpen}
          
          />
          <ButtonComponent
            buttonName={"ACCOUNTS"}
            buttonWidth={"130px"}
            onClick={handleActive}
          />
        </div>
        <div style={{ flex: "0.3" }}></div>
      </div>
      <br></br>
      <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <Tabs defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery">Customer Information</Tabs.Tab>
            <Tabs.Tab value="messages">Anti-Money Laundering</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            <div style={{ marginRight:"10px",marginBottom:"10px",marginLeft:"10px",marginTop:"1px",paddingRight:"10px",paddingLeft:"10px",paddingTop:"2px",paddingBottom:"30px"}}>
              <div style={{marginBottom:"10px"}}>
                <Header title={"CUSTOMER DETAILS"}  />
              </div>
              
              <div style={{ display: "flex", gap: "10px" }}>
                <div
                  style={{
                    flex: "0.7",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    borderRadius: "5px",
                  }}
                >
                  <div style={{display:"flex",justifyContent:"center",paddingTop:"10px"}}>
                    <ButtonComponent 
                    buttonName={"CUSTOMER ACCOUNT OPENING DOCUMENT"}
                    buttonWidth={"400px"}/>
                  </div>
                  <br></br>
                  <div style={{display:"flex"}}>
                    <div style={{flex:0.1}}></div>
                    <div style={{flex:0.8}}>
                      <div style={{marginBottom:"10px"}}>
                        <InputField
                          label={"Customer Name"}
                          labelWidth={"30%"}
                          inputWidth={"60%"}
                          disabled
                        />
                        </div>
                        <div style={{marginBottom:"10px"}}>
                        <InputField
                          label={"Customer Type"}
                          labelWidth={"30%"}
                          inputWidth={"60%"}
                          disabled
                        />
                        </div>
                        <div style={{marginBottom:"10px"}}>
                        <InputField
                          label={"Customer Category"}
                          labelWidth={"30%"}
                          inputWidth={"60%"}
                          disabled
                        />
                        </div>
                        <div style={{marginBottom:"10px"}}>
                    <InputField
                      label={"Segment"}
                      labelWidth={"30%"}
                      inputWidth={"60%"}
                      disabled
                    />
                    </div>
                    <div style={{marginBottom:"10px"}}>
                    <InputField
                      label={"Sub Segment"}
                      labelWidth={"30%"}
                      inputWidth={"60%"}
                      disabled
                    />
                    </div>
                    <div style={{marginBottom:"10px"}}>
                    <InputField
                      label={"Sector"}
                      labelWidth={"30%"}
                      inputWidth={"60%"}
                      disabled
                    />
                    </div>
                    <div style={{marginBottom:"15px"}}>
                    <InputField
                      label={"Sub Sector"}
                      labelWidth={"30%"}
                      inputWidth={"60%"}
                      disabled
                    />
                    </div>
                  </div>
                  <div style={{flex:0.1}}></div>
                  </div>
                 
                </div>
                <div style={{display:"flex",flex: "0.3",height:"35vh",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius: "5px",padding: "30px"}}>
                 <div style={{flex:0.1}}></div> 
                  <div style={{flex:0.85}}>
                    <div style={{marginBottom:"16px"}}>
                    <InputField
                      label={"Swift Code"}
                      labelWidth={"55%"}
                      inputWidth={"25%"}
                      disabled
                    />
                    </div>
                    <div style={{display:"flex",marginBottom:"16px",alignItems:"center"}}>
                    <div style={{flex:0.7}}>
                      <label>Deceased</label>
                    </div>
                    <div style={{flex:0.2}}>
                      <ButtonType type={"radio"} disabled/>
                      </div>
                    </div>
                    <div style={{display:"flex",marginBottom:"16px",alignItems:"center"}}>
                    <div style={{flex:0.7}}>
                      <label>Whereabouts Unknown</label>
                    </div>
                    <div style={{flex:0.2}}>
                      <ButtonType type={"radio"} disabled/>
                      </div>
                    </div>
                    <div style={{display:"flex",marginBottom:"16px",alignItems:"center"}}>
                    <div style={{flex:0.7}}>
                      <label>Eligible For AR_AP Tracking </label>
                    </div>
                    <div style={{flex:0.2}}>
                      <ButtonType type={"radio"} disabled/>
                      </div>
                    </div>
                    <div style={{display:"flex",marginBottom:"16px",alignItems:"center"}}>
                    <div style={{flex:0.7}}>
                      <label>MT920</label>
                    </div>
                    <div style={{flex:0.2}}>
                      <ButtonType type={"radio"} disabled/>
                      </div>
                    </div>
                    <div style={{display:"flex",marginBottom:"16px",alignItems:"center"}}>
                    <div style={{flex:0.7}}>
                      <label>MT940</label>
                    </div>
                    <div style={{flex:0.2}}>
                      <ButtonType type={"radio"} disabled/>
                      </div>
                    </div>
                    </div>
                  <div style={{flex:0.05}}></div> 
                </div>
              </div>
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="messages" pt="xs">
              <div style={{ marginRight:"10px",marginBottom:"10px",marginLeft:"10px",marginTop:"1px",paddingRight:"10px",paddingLeft:"10px",paddingTop:"2px",paddingBottom:"30px"}}>
              <div style={{marginBottom:"10px"}}>
                <Header title={"EXPECTATION VOLUMES"} />
              </div>
              
                <div style={{display:"flex",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius: "5px"}}>
                  <div style={{flex:0.05}}></div>
                  <div style={{flex:0.9}}>
                   <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gridTemplateRows:" auto auto",padding:"5px",columnGap:"5%",rowGap:"10px"}}>
                   <InputField label={"No. Of Withdrawals per Month"} labelWidth={"65%"} inputWidth={"35%"} disabled/> 
                   <InputField label={"Annual Withdrawals per Month"} labelWidth={"65%"} inputWidth={"35%"} disabled/> 
                   <InputField label={"Annual Income"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                   <InputField label={"No. Of Deposits per Month"} labelWidth={"65%"} inputWidth={"35%"} disabled/>  
                   <InputField label={"Annual Deposits per Month"} labelWidth={"65%"} inputWidth={"35%"} disabled/> 
                   </div>
                   </div>
                   <div style={{flex:0.05}}></div>
                </div>
                <br></br>
                   <div style={{display:"flex"}}>
                      <div style={{flex:0.49}}>
                        <DataTable title={"SOURCE OF FUND"} columns={["Code","Desription"]}/>
                      </div>
                      <div style={{flex:0.02}}></div>
                      <div style={{flex:0.49}}>
                        <DataTable title={"TRANSACTION TYPE"} columns={["Code","Desription"]}/>
                      </div>
                   </div>
                   <br></br>
                   <div style={{borderRadius: "5px"}}>
                    <div style={{display:"flex"}}>
                  <div style={{flex:0.05}}></div>
                  <div style={{display:"flex",flex:0.9,paddingBottom:"5px"}}>
                    <div style={{flex:0.2}}>
                    <InputField label={"Risk Code"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    </div>
                    <div style={{flex:0.1}}></div>
                    <div style={{flex:0.2}}>
                    <SelectField label={"PEP"} labelWidth={"35%"} inputWidth={"50%"} options={["Yes","No"]} disabled/> 
                    </div>
                   </div>
                   <div style={{flex:0.05}}></div>
                   </div>
                   <DataTable title={"RISK ANALYSIS"} columns={["Description","Flag"]}/>
              
                </div>

              </div>
          </Tabs.Panel>
        </Tabs>
      </div>
      <Modal show={open}  size="xl">
      <Modal.Header style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + `)` }}>
          <div className="w-full -mb-4 flex justify-between ">
            <Modal.Title
              style={{
                fontSize: "14.5px",
                color: "white",
                padding: "10px"
              }}
            >
              <p>Individual Relationship Amendment</p>
            </Modal.Title>
            <svg
              onHide={handleClose}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              style={{ padding: "10px" }}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Modal.Header>
    <Modal.Body>
      <RelationDetails/>
    </Modal.Body>
  </Modal>
  <Modal show={active} size="xl">
  <Modal.Header style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + `)` }}>
          <div className="w-full -mb-4 flex justify-between ">
            <Modal.Title
              style={{
                fontSize: "14.5px",
                color: "white",
                padding: "10px",
               }}
            >
              <p>Individual Relationship Amendment</p>
            </Modal.Title>
            <svg
               onHide={handleInactive} 
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              style={{ padding: "10px" }}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Modal.Header>
    <Modal.Body>
      <AccountDetails/>
    </Modal.Body>
  </Modal>
    </div>
  );
}

export default CustomerDetails;

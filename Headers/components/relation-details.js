import React from "react";
import { useState, useEffect} from 'react';

import { Tabs } from "@mantine/core";

import ButtonComponent from "../../others/Button/ButtonComponent";
import Header from "../../others/Header/HeaderComponent";
import DataTable from "../../others/Datatable/DataTable";
import CustomerDetails from "./customer-details";
import AccountDetails from "./account-details";
import InputField from "../../others/Fields/InputField";
import Modal from 'react-bootstrap/Modal';
import ButtonType from "../../others/Button/ButtonType";
import SelectField from "../../others/Fields/SelectField";


function RelationDetails() {
  const [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [active,setActive] = useState(false);
  const handleActive = () => setActive(true);
  const handleInactive = () => setActive(false);

  return (
    <div style={{ background:""}}>
      <div
        className="tops"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "5px",
          padding: "2px",
          //   display: "flex",
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
            onClick={handleOpen}
          />

          <ButtonComponent
            buttonName={"RELATION"}
            buttonWidth={"130px"}
          
          />
          <ButtonComponent
            buttonName={"ACCOUNTS"}
            buttonWidth={"130px"}
            onClick={handleActive}
          />
        </div>
        <div style={{ flex: "0.3" }}></div>
      </div>
      {/* DATA TABLE */}
      <div>
        {/* <DataTable /> */}
      </div>
      {/* BODY */}
      <div
        className="home_page_container"
        style={{ marginTop: "20px", padding: "3px" }}
      >
        <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery">Relation Info</Tabs.Tab>
        <Tabs.Tab value="messages">Address</Tabs.Tab>
        <Tabs.Tab value="laterr">Employment</Tabs.Tab>
        <Tabs.Tab value="former">Contact</Tabs.Tab>
        <Tabs.Tab value="letter">Other Bank Details</Tabs.Tab>
        
      </Tabs.List>
        {/* header */}
        <Tabs.Panel value="gallery" pt="xs">
        <div style={{ marginRight:"10px",marginBottom:"10px",marginLeft:"10px",marginTop:"1px",paddingRight:"10px",paddingLeft:"10px",paddingTop:"2px",paddingBottom:"30px"}}>
        <div style={{marginBottom:"10px"}}>
          <Header title={"Relation Details"} />
        </div>
       
        {/* main details */}
        <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
         <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "",
          }}
        >
          <div style={{ flex: 0.03 }}>{/* hey */}</div>
          {/* full container */}
          <div style={{ flex: 0.96, backgroundColor: "" }}>
            {/* First Name and MiddleName div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginTop: "10px",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"First Name"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{flex: 0.475 }}>
                <InputField
                  label={"Middle Name"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Surname and Alias Name div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                }}
              >
                <InputField
                  label={"Surname"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space  */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Alias Name"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Gender  and Title div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  display:"flex",
                  flex: 0.475,
                  jusitfyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{flex:0.56}}>
                <InputField
                  label={"Gender"}
                  labelWidth={"61%"}
                  inputWidth={"33%"}
                  type={"text"}
                  disabled={true}
                />
                </div>
                <div  style={{flex:0.44}}>
                <InputField
                  label={"Mobile"}
                  labelWidth={"22.5%"}
                  inputWidth={"63.9%"}
                  type={"number"}
                  disabled={true}
                />
                </div>
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Title"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Mobile Number  and Surfix div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Place Of Birth"}
                  labelWidth={"34%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Suffix"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Place of Birth  and Date of Birth div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Email Address"}
                  labelWidth={"34%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05}}></div>
              <div style={{ flex: 0.475}}>
                <InputField
                  label={"Date of Birth"}
                  labelWidth={"34%"}
                  inputWidth={"35%"}
                  type={"date"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Email Address  and Residential  Status div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Domicile Country"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05}}></div>
              <div style={{ flex: 0.475}}>
                {/* container with labels and heckboxes  */}
                <div style={{ display:"flex",alignItems:"center"}}>
                  <div style={{flex:0.37}}>
                <label >Residential Status</label>
                </div>
                <div  style={{display:"flex",flex:0.69}}>
                  <div style={{flex:0.3}}>
                <ButtonType type={"radio"} label={"Resident"}/>
                </div>
                <div style={{flex:0.35}}>
                <ButtonType type={"radio"} label={"Non-Resident"}/>
                </div>
                </div>
                </div>
              </div>
            </div>
            {/* Domicile Country,National ID  and ID Expiry Date div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Country Of Residence"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475}}>
                <InputField
                  label={"ID Type"}
                  labelWidth={"34%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Country of Residence and ID Type div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Nationality"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div
                style={{
                  display:"flex",
                  flex: 0.475,
                  jusitfyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{flex:0.56}}>
                <InputField
                  label={"ID Number"} 
                  labelWidth={"60.9%"}
                  inputWidth={"38%"}
                  type={"text"}
                  disabled={true}
                />
                </div>
                <div  style={{flex:0.44}}>
                <InputField
                  label={"Issue Date"}
                  labelWidth={"33%"}
                  inputWidth={"53.7%"}
                  type={"date"}
                />
                </div>
              </div>
            </div>

            {/* Nationality, ID Number and ID Expiry Date div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  display:"flex",
                  flex: 0.475,
                  jusitfyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{flex:0.58}}>
                <div style={{ display:"flex",alignItems:"center"}}>
                  <div style={{flex:1.1}}>
                <label>Consolidated Statement</label>
                </div>
                <div  style={{display:"flex",flex:0.69}}>
                  <div style={{flex:1}}>
                <ButtonType type={"radio"} label={"Yes"}/>
                </div>
                <div style={{flex:1}}>
                <ButtonType type={"radio"} label={"No"}/>
                </div>
                </div>
                </div>
                </div>
                <div  style={{flex:0.42}}>
                <InputField
                  label={"Staff Category"}
                  labelWidth={"44.5%"}
                  inputWidth={"41%"}
                  disabled
                />
                </div>
                
              </div>
              {/* space */}
              <div style={{ flex: 0.05}}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"ID Issued At"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Cosolidated Statement  and ID Number div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Constitutional Code"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div
                style={{
                  display: "flex",
                  flex: 0.475,
                  backgroundColor: "",
                }}
              >
                {/*  ID Issue Date and ID Issued At */}
                <div style={{flex:0.6}}>
                <InputField
                  label={"ID Expiry Date"}
                  labelWidth={"56.8%"}
                  inputWidth={"40%"}
                  type={"date"}
                  disabled={true}
                />
                </div>
                <div  style={{flex:0.4}}>
                <InputField
                  label={"Tax No."}
                  labelWidth={"28%"}
                  inputWidth={"56.9%"}
                  type={"text"}
                  disabled={true}
                />
                </div>
              </div>
            </div>

            {/* Staff Category,ID Issued Authority and Tax No div*/}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Residential Address"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"ID Issued Authority"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Constitutional Code, Next Of King and No of Cars div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  display:"flex",
                  flex: 0.475,
                  jusitfyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{flex:0.58}}>
                <InputField
                  label={"Marital Status"}
                  labelWidth={"59%"}
                  inputWidth={"39%"}
                  type={"text"}
                  disabled={true}
                />
                </div>
                <div  style={{flex:0.42}}>
                <InputField
                  label={"No. Of Dependants"}
                  labelWidth={"59.5%"}
                  inputWidth={"26.3%"}
                  type={"text"}
                  disabled={true}
                />
                </div>
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>

              <div
                style={{
                  display:"flex",
                  flex: 0.475,
                  jusitfyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{flex:0.77}}>
                <InputField
                  label={"Next Of Kin"}
                  labelWidth={"44.3%"}
                  inputWidth={"54.8%"}
                  type={"text"}
                  disabled={true}
                />
                </div>
                <div  style={{flex:0.23}}>
                <InputField
                  label={"No. Of Cars"}
                  labelWidth={"57%"}
                  inputWidth={"17%"}
                  type={"text"}
                  disabled={true}
                />
                </div>
              </div>
            </div>

            {/* Residential Address and Next Of Kin Address div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Mother's First Name"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Next Of Kin Address"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Marital Status and Next Of Kin Phon div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Mother's Middle Name"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Next Of Kin Phone"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"number"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Mother's First Name  and Mother's Middle Name div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Mother's Maiden Surname"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Preferred ATM Language"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Mother's Maiden Surname  and No Of Descendats div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Qualification"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Prefered Phone Language"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Qualification  and Prefered ATM Language div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Work Type"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
              </div>
            
            </div>
          </div>
          <div style={{ flex: 0.01}}></div>
        </div>
        
        </div>
        </div>
        </Tabs.Panel>
        <Tabs.Panel value="messages">
        <div style={{marginRight:"10px",marginBottom:"10px",marginLeft:"10px",marginTop:"1px",paddingRight:"10px",paddingLeft:"10px",paddingTop:"10px",paddingBottom:"30px"}}>
          <DataTable title={"ADDRESS DETAILS"} rowsPerPage={false} columns={["Relation No.","PO Address1","PO City","House Type","PH Address1","PH Address2","Location"]}/>
          <br></br>
          <div style={{marginBottom:"10px"}}>
          <Header title={"PHYSICAL ADDRESS INFORMATION"} />
          </div>
          <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
         <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "",
            marginBottom:"10px"
          }}
        >
          <div style={{ flex: 0.05 }}>{/* hey */}</div>
          {/* full container */}
          <div style={{ flex: 0.9, backgroundColor: "" }}>
            {/* First Name and MiddleName div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginTop: "10px",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Region"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Email"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Surname and Alias Name div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                }}
              >
                <InputField
                  label={"Phone 1"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space  */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Phone 2"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Gender  and Title div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"House Type"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Flat/Villa/House No."}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Mobile Number  and Surfix div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Nature Of Ownership"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Cost Of Accom."}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Place of Birth  and Date of Birth div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Building Name"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05}}></div>
              <div style={{ flex: 0.475}}>
                <InputField
                  label={"Stayed Since"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Email Address  and Residential  Status div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Street Name"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05}}></div>
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Current Value"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Domicile Country,National ID  and ID Expiry Date div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Location"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475}}>
                <InputField
                  label={"City"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Country of Residence and ID Type div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Balance Mortgage"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475}}>
                <InputField
                  label={"Fax"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Nationality, ID Number and ID Expiry Date div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div style={{ flex: 0.475}}>
                <InputField
                  label={"Nearest Land Mark"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475}}>
                <InputField
                  label={"Attention Party"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
    </div>
    <div>
          </div>
          <div style={{ flex: 0.05 }}></div>
        </div>
        
        </div>
        <br></br>
        <div style={{marginBottom:"10px"}}>
          <Header title={"POSTAL ADDRESS INFORMATION"} />
          </div>
          <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
         <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "",
            
          }}
        >
          <div style={{ flex: 0.05 }}>{/* hey */}</div>
          {/* full container */}
          <div style={{ flex: 0.9, backgroundColor: "" }}>
            {/* First Name and MiddleName div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginTop: "10px",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"P.O. Box Number"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Postal Zip Code"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Surname and Alias Name div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                }}
              >
                <InputField
                  label={"Address"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space  */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Country Code"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Gender  and Title div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Postal City"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Attention Party"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Mobile Number  and Surfix div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Nearest Land Mark"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
        
              </div>
            </div>
            {/* Place of Birth  and Date of Birth div/ */}
        
          </div>
          <div style={{ flex: 0.05 }}></div>
        </div>
        
        </div>
        </div>
        </Tabs.Panel>
        <Tabs.Panel value="laterr">
        <div style={{marginRight:"10px",marginBottom:"10px",marginLeft:"10px",marginTop:"1px",paddingRight:"10px",paddingLeft:"10px",paddingTop:"10px",paddingBottom:"30px"}}>
          <DataTable title={"EMPLOYMENT DETAILS"} rowsPerPage={false} columns={["Employment Category","Employer","Position Held","Department"]}/>
          <br></br>
          <div style={{marginBottom:"10px"}}>
          <Header title={"Employment Details"} />
          </div>
          <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
         <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "",
          }}
        >
          <div style={{ flex: 0.05 }}>{/* hey */}</div>
          {/* full container */}
          <div style={{ flex: 0.9, backgroundColor: "" }}>
            {/* First Name and MiddleName div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                  marginBottom:"10px"
                }}
              >
                <InputField
                  label={"Employment Category"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"City"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Surname and Alias Name div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                }}
              >
                <InputField
                  label={"Employment Type"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space  */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Employer"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Gender  and Title div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Employment No."}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div
                style={{
                  display:"flex",
                  flex: 0.475,
                  jusitfyContent: "center",
                  alignItems: "center",
                }}
              >

               
                  <div style={{flex:0.35}}>
                <label>Fixed Term Contract</label>
                </div>
                <div  style={{display:"flex",flex:0.6}}>
                  <div style={{flex:0.3}}>
                <ButtonType type={"radio"} label={"Yes"}/>
                </div>
                <div >
                <ButtonType type={"radio"} label={"No"}/>
                </div>
                </div>
          
              
                
              </div>
            </div>
            {/* Mobile Number  and Surfix div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Others"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Fax No."}
                  labelWidth={"34%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Place of Birth  and Date of Birth div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Address 1"}
                  labelWidth={"34%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05}}></div>
              <div style={{ flex: 0.475}}>
                <InputField
                  label={"Address 2"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Email Address  and Residential  Status div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Land Mark"}
                  labelWidth={"34%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05}}></div>
              <div
                style={{
                  display:"flex",
                  flex: 0.475,
                  jusitfyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{flex:0.5}}>
                <InputField
                  label={"Salary Day"}
                  labelWidth={"71.4%"}
                  inputWidth={"23.2%"}
                  type={"text"}
                  disabled={true}
                />
                </div>
                <div  style={{flex:0.55}}>
                <InputField
                  label={"Payment Of Salary Freq."}
                  labelWidth={"61%"}
                  inputWidth={"27.5%"}
                  type={"text"}
                  disabled={true}
                />
                </div>
              </div>
            </div>
            {/* Domicile Country,National ID  and ID Expiry Date div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Location"}
                  labelWidth={"34%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div
                style={{
                  display:"flex",
                  flex: 0.475,
                  jusitfyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{flex:0.56}}>
                <InputField
                  label={"Salary Amount"}
                  labelWidth={"60.7%"}
                  inputWidth={"36.5%"}
                  type={"text"}
                  disabled={true}
                />
                </div>
                <div  style={{flex:0.44}}>
                <InputField
                  label={"Employed Since"}
                  labelWidth={"53%"}
                  inputWidth={"33.2%"}
                  type={"text"}
                  disabled={true}
                />
                </div>
              </div>
            </div>
            {/* Country of Residence and ID Type div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Position Held"}
                  labelWidth={"34%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div
                style={{
                  display:"flex",
                  flex: 0.475,
                  jusitfyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{flex:0.60}}>
                <InputField
                  label={"Date Exited"}
                  labelWidth={"56.5%"}
                  inputWidth={"40%"}
                  type={"date"}
                  disabled={true}
                />
                </div>
                <div  style={{flex:0.4}}>
                <InputField
                  label={"Date Begun"}
                  labelWidth={"40.1%"}
                  inputWidth={"45%"}
                  type={"date"}
                  disabled={true}
                />
                </div>
              </div>
            </div>

            {/* Nationality, ID Number and ID Expiry Date div */}
           
    </div>
    <div>
          </div>
          <div style={{ flex: 0.05 }}></div>
        </div>
        </div>
        </div>
        </Tabs.Panel>
        <Tabs.Panel value="former">
        <div style={{marginRight:"10px",marginBottom:"10px",marginLeft:"10px",marginTop:"1px",paddingRight:"10px",paddingLeft:"10px",paddingTop:"10px",paddingBottom:"30px"}}>
          <DataTable title={"CONTACT DETAILS"} rowsPerPage={false} columns={["Contact ID","Contact Type","Classification","Description","Contact"]}/>
          <br></br>
          <div style={{marginBottom:"10px"}}>
          <Header title={"CONTACT INFORMATION"} />
          </div>
          <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
         <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "",
          }}
        >
          <div style={{ flex: 0.05 }}>{/* hey */}</div>
          {/* full container */}
          <div style={{ flex: 0.9, backgroundColor: "" }}>
            {/* First Name and MiddleName div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginTop: "10px",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Name"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Contact No."}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Surname and Alias Name div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                }}
              >
                <InputField
                  label={"Contact Type"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space  */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Classification"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  disabled
                />
              </div>
            </div>
            {/* Gender  and Title div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
                <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                }}
              >
                <InputField
                  label={"Reference"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space  */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                
              </div>    
            
            </div>
            {/* Mobile Number  and Surfix div/ */}
            {/* heree */}
            
    </div>
    <div>
          </div>
          <div style={{ flex: 0.05 }}></div>
        </div>
        
        </div>
        </div>
        </Tabs.Panel>
        <Tabs.Panel value="letter">
        <div style={{marginRight:"10px",marginBottom:"10px",marginLeft:"10px",marginTop:"1px",paddingRight:"10px",paddingLeft:"10px",paddingTop:"10px",paddingBottom:"30px"}}>
          <DataTable title={"OTHER BANK DETAILS"} rowsPerPage={false} columns={["Bank Description","Account Type","Account No.","Branch","Outstanding Balance",""]}/>
          <br></br>
          <div style={{marginBottom:"10px"}}>
          <Header title={"OTHER BANK INFORMATION"} />
          </div>
          <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
         <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "",
          }}
        >
          <div style={{ flex: 0.05 }}>{/* hey */}</div>
          {/* full container */}
          <div style={{ flex: 0.9, backgroundColor: "" }}>
            {/* First Name and MiddleName div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginTop: "10px",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Bank"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                
              </div>
            </div>
            {/* Surname and Alias Name div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                }}
              >
                <InputField
                  label={"Account No."}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space  */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Account Type"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Gender  and Title div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Branch"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Facility Amount"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Mobile Number  and Surfix div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginBottom:"10px"
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Outstanding Balance"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Frequency Expiry"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Place of Birth  and Date of Birth div/ */}
           
           
    </div>

          <div style={{ flex: 0.05 }}></div>
        </div>
        
        </div>
        </div>
        </Tabs.Panel>
        </Tabs>
      </div>
      <Modal show={open} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
          <Modal.Title>Individual Relationship Amendment</Modal.Title>
        </Modal.Header>
    <Modal.Body>
      <CustomerDetails/>
    </Modal.Body>
  </Modal>
  <Modal show={active} onHide={handleInactive} size="xl">
      <Modal.Header closeButton>
          <Modal.Title>Individual Relationship Amendment</Modal.Title>
        </Modal.Header>
    <Modal.Body>
      <AccountDetails/>
    </Modal.Body>
  </Modal>
    </div>
    // </div>
  );
}

export default RelationDetails;

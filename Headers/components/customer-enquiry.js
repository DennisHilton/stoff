import React from "react";
import { useState, useEffect} from 'react';

import { Tabs } from "@mantine/core";

import ButtonComponent from "../../others/Button/ButtonComponent";
import Header from "../../others/Header/HeaderComponent";
import DataTable from "../../others/Datatable/DataTable";
import InputField from "../../others/Fields/InputField";
import Modal from 'react-bootstrap/Modal';
import ButtonType from "../../others/Button/ButtonType";
import SelectField from "../../others/Fields/SelectField";


function CustomerEnquiry() {
  return (
    <div>
      <div className="home_page_container" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery">Summary</Tabs.Tab>
        <Tabs.Tab value="messages">Address</Tabs.Tab>
        <Tabs.Tab value="laterr">Personal Info</Tabs.Tab>
        <Tabs.Tab value="former">Accounts</Tabs.Tab>
        <Tabs.Tab value="letter">Employment</Tabs.Tab>
      </Tabs.List>
       
        <Tabs.Panel value="gallery" pt="xs">
        <div >
            <Header title={"Client Demographics"}/>
            <br></br>
            <div style={{display:"flex",gap:"10px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <div style={{display:"flex",flex:0.7,boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <div style={{flex:0.05}}></div>
                <div style={{flex:0.93}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"60px",rowGap:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
                    <InputField label={"$fname $lname $lname"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Client Since"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"$homeadd"} labelWidth={"35%"} inputWidth={"65%"} disabled/>
                    <InputField label={"Segment"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"$postalcode"} labelWidth={"35%"} inputWidth={"65%"} disabled/>
                    <InputField label={"Pri ID Type"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Birth Date"} labelWidth={"35%"} inputWidth={"65%"} type={"date"} disabled/>
                    <InputField label={"Pri ID Number"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Home Phone"} labelWidth={"35%"} inputWidth={"65%"} disabled/>
                    <InputField label={"Mother's Maiden Name"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Work Phone"} labelWidth={"35%"} inputWidth={"65%"} disabled/>
                    <InputField label={"Relationship Officer"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"E-mail"} labelWidth={"35%"} inputWidth={"65%"} disabled/>
                    <InputField label={"Branch"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                </div>
                </div>
                <div style={{flex:0.02}}></div>
            </div>
            <div style={{flex:0.3,boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Header title={"Client Privacy"}/>
            <div style={{display:"flex",paddingTop:"10px",alignItems:"center"}}>
                <div style={{flex:0.1}}></div>
                <div style={{flex:0.8,alignItems:"center"}}>
                    <div style={{display:"flex",marginBottom:"20px"}}>
                  <div style={{flex:0.4}}>
                <label>OPT OUT:</label>
                </div>
                <div  style={{display:"flex",flex:0.6}}>
                  <div style={{flex:0.5}}>
                <ButtonType type={"radio"} label={"Yes"}/>
                </div>
                <div style={{flex:0.2}}>
                <ButtonType type={"radio"} label={"No"}/>
                </div>
                </div>
                {/* here */}
                </div>
                <div style={{display:"flex"}}>
                  <div style={{flex:0.4}}>
                <label>DO NOT:</label>
                </div>
                <div  style={{flex:0.6}}>
                  <div style={{flex:0.5,marginBottom:"15px"}}>
                <ButtonType type={"radio"} label={"Call"}/>
                </div>
                <div style={{flex:0.2,marginBottom:"15px"}}>
                <ButtonType type={"radio"} label={"Mail"}/>
                </div>
                <div style={{flex:0.2,marginBottom:"15px"}}>
                <ButtonType type={"radio"} label={"E-mail"}/>
                </div>
                <div style={{flex:0.2}}>
                <ButtonType type={"radio"} label={"Share"}/>
                </div>
        
                </div>
                </div>
                </div>
                <div style={{flex:0.1}}></div>
                </div>
              
            </div>
            </div>
            <br></br>
            <div style={{display:"flex",gap:"10px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <div style={{flex:0.65,boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <Header title={"Balance and Services Summary"}/>
                <div style={{display:"flex",flex:1,marginBottom:"10px"}}>
                <div style={{flex:0.01}}></div>
                <div style={{flex:0.98}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",columnGap:"30px",rowGap:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
                    <InputField label={"Total Deposits"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Loans"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Investments"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",columnGap:"30px"}}>
                <ButtonType type={"radio"} label={"SMS"}/>
                <ButtonType type={"radio"} label={"Email"}/>
                <ButtonType type={"radio"} label={"ATM/Debit Card"}/>
                <ButtonType type={"radio"} label={"Online Banking"}/>
                </div>
                </div>
                <div style={{flex:0.01}}></div>
                </div>
                
                <DataTable title={"MOST RECENT CONTACTS"} rowsPerPage={false} columns={["Date","Method","Subject","Notes","Completed By"]}/>
            </div>
            <div style={{flex:0.35,boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Header title={"Client Preferences"}/>
            <div style={{display:"flex"}}>
            <div style={{flex:0.1}}></div>
            <div style={{flex:0.8}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr",paddingTop:"10px",paddingBottom:"10px",rowGap:"10px"}}>
            <InputField label={"Preferred Name"} labelWidth={"45%"} inputWidth={"55%"} disabled/>
            <InputField label={"Contact Method"} labelWidth={"45%"} inputWidth={"55%"} disabled/>
                </div>
                <div style={{display:"flex"}}>
                  <div style={{flex:0.5}}>
                <label>Preferred Days</label>
                </div>
                <div  style={{flex:0.6}}>
                  <div style={{flex:0.5,marginBottom:"15px"}}>
                <ButtonType type={"radio"} label={"Monday"}/>
                </div>
                <div style={{flex:0.2,marginBottom:"15px"}}>
                <ButtonType type={"radio"} label={"Tuesday"}/>
                </div>
                <div style={{flex:0.2,marginBottom:"15px"}}>
                <ButtonType type={"radio"} label={"Wednesday"}/>
                </div>
                <div style={{flex:0.2,marginBottom:"15px"}}>
                <ButtonType type={"radio"} label={"Thursday"}/>
                </div>
                <div style={{flex:0.2,marginBottom:"15px"}}>
                <ButtonType type={"radio"} label={"Friday"}/>
                </div>
                <div style={{flex:0.2,marginBottom:"15px"}}>
                <ButtonType type={"radio"} label={"Saturday"}/>
                </div>
                <div style={{flex:0.2}}>
                <ButtonType type={"radio"} label={"Sunday"}/>
                </div>
        
                </div>
                </div>
            </div>
            <div style={{flex:0.1}}></div>
            </div>
            </div>
            </div>

        </div>
        </Tabs.Panel>
        <Tabs.Panel value="messages">
        <div style={{paddingTop:"10px"}}>
            <Header title={"Postal Address Details"}/>
            <br></br>
            <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <div style={{display:"flex"}}>
                    <div style={{flex:0.1}}></div>
                    <div style={{flex:0.8}}>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"80px",rowGap:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <InputField label={"P.O. Box Number"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                    <InputField label={"Postal Zip Code"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                    <InputField label={"Address"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                    <InputField label={"Country Code"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                    <InputField label={"City"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                    <InputField label={"Attention Party"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                    <InputField label={"Nearest Land Mark"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        </div>
                    </div>
                    <div style={{flex:0.1}}></div>
                </div>
            </div>
            <br></br>
            <Header title={"Physical Address Details"}/>
            <br></br>
            <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <div style={{display:"flex"}}>
                    <div style={{flex:0.1}}></div>
                    <div style={{flex:0.8}}>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"80px",rowGap:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <InputField label={"Region"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Phone Number"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"House Type"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Nature Of Ownership"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Flat/Villa No."} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Stayed Since"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Address 1"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Address 2"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Cost Of Accomodation"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Location"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"City"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Current Value"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Nearest Land Mark"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Attention Party"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Fax"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                    
                        </div>
                    </div>
                    <div style={{flex:0.1}}></div>
                </div>
            </div>
        </div>
        
        </Tabs.Panel>
        <Tabs.Panel value="laterr">
        <div style={{paddingTop:"10px"}}>
            <DataTable title={"INFO"} rowsPerPage={false} columns={["Signatory ID","First Name","Surname","Gender","Date Of Birth"]}/>
            <br></br>
            <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <div style={{display:"flex"}}>
                    <div style={{flex:0.05}}></div>
                    <div style={{flex:0.9}}>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"80px",rowGap:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <InputField label={"First Name"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Middle Name"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Surname"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Alias Name"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Sex"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Date Of Birth"} labelWidth={"40%"} inputWidth={"55%"} type={"date"} disabled/>
                        <InputField label={"Nationality"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Domicile Country"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Country Of Residence"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Next of Kin"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Next of Kin Address"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Next of Kin Phone"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Suffix"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Salutation"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Email Address"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Mobile Number"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Place Of Birth"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Number Of Dependants"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Marital Status"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Mother's First Name"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Mother's Middle Name"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Mother's Maiden Surname"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                    </div>
                    </div>
                    <div style={{flex:0.05}}></div>
                </div>
            </div>
        </div>
        </Tabs.Panel>
        <Tabs.Panel value="former">
        <div style={{paddingTop:"10px"}}>
        <DataTable title={"CURRENT/SAVING ACCOUNT (CASA) LISTING"} columns={["Account No.","Account Description","Product","Currency","Status Indicator","Closing Balance"]}/>
            <br></br>
        <DataTable title={" LOAN LISTING"} columns={["Account No.","Account Description","Product","Currency","Principal Balance"]}/>
            <br></br>
        <DataTable title={"INVESTMENT LISTING"} columns={["Account No.","Account Description","Product","Currency","Investment Balance","Deal NUmber"]}/>
            <br></br>

            
        </div>
        </Tabs.Panel>
        <Tabs.Panel value="letter">
        5
        </Tabs.Panel>
        </Tabs>
      </div>
    </div>
    // </div>
  );
}

export default CustomerEnquiry;

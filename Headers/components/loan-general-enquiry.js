import React, { useState } from "react";
import InputField from "../../others/Fields/InputField";
import ButtonComponent from "../../others/Button/ButtonComponent";
import ListOfValue from "../../others/Fields/ListOfValue";
import { MDBIcon } from "mdb-react-ui-kit";
import DataTable from "../../../components/others/Datatable/DataTable";

function LoanGeneralEnquiry() {
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  const [customerNumber, setCustomerNumber] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [classification, setClassification] = useState("");
  const [sector, setSector] = useState("");
  const [principal, setPrincipal] = useState("");
  const [interest, setInterest] = useState("");
  const [totalFacilityBalance, setTotalFacilityBalance] = useState("");

  const columns = [
    {
      name: "Facility No",
      options: {
        seCellHeaderProps: () => ({
          style: {
            backgroundColor: "pink",
            color: "white",
            padding: "0px",
            margin: "0px",
          },
        }),
      },
    },

    {
      name: "Facility A/C",
      options: {
        seCellHeaderProps: () => ({
          style: {
            backgroundColor: "pink",
            color: "white",
            padding: "0px",
            margin: "0px",
          },
        }),
      },
    },

    {
      name: "Repayment A/C",
      options: {
        seCellHeaderProps: () => ({
          style: {
            backgroundColor: "pink",
            color: "white",
            padding: "0px",
            margin: "0px",
          },
        }),
      },
    },

    {
      name: "Disb. Date",
      options: {
        seCellHeaderProps: () => ({
          style: {
            backgroundColor: "pink",
            color: "white",
            padding: "0px",
            margin: "0px",
          },
        }),
      },
    },

    {
      name: "Expiry Date",
      options: {
        seCellHeaderProps: () => ({
          style: {
            backgroundColor: "pink",
            color: "white",
            padding: "0px",
            margin: "0px",
          },
        }),
      },
    },

    {
      name: "Currency",
      options: {
        seCellHeaderProps: () => ({
          style: {
            backgroundColor: "pink",
            color: "white",
            padding: "0px",
            margin: "0px",
          },
        }),
      },
    },

    {
      name: "Loan Officer",
      options: {
        seCellHeaderProps: () => ({
          style: {
            backgroundColor: "pink",
            color: "white",
            padding: "0px",
            margin: "0px",
          },
        }),
      },
    },

    {
      name: "Amt Granted",
      options: {
        seCellHeaderProps: () => ({
          style: {
            backgroundColor: "pink",
            color: "white",
            padding: "0px",
            margin: "0px",
          },
        }),
      },
    },

    {
      name: "Int Rate",
      options: {
        seCellHeaderProps: () => ({
          style: {
            backgroundColor: "pink",
            color: "white",
            padding: "0px",
            margin: "0px",
          },
        }),
      },
    },
    {
      name: "Status",
      options: {
        seCellHeaderProps: () => ({
          style: {
            backgroundColor: "pink",
            color: "white",
            padding: "0px",
            margin: "0px",
          },
        }),
      },
    },
  ];

  return (
    <div>
      <div className="w-full ">
        <div
          style={{ marginTop: "-15px", textAlign: "center", zoom: "0.85" }}
          centered
        >
          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button
              className="btn btn-secondary"
              style={{
                background:
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`,
              }}
            >
              <MDBIcon
                style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="file-alt"
              />
              <br />
              New
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="sync"
              />
              <br />
              Refresh
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="calendar-times"
              />
              <br />
              Delete
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="thumbs-up"
              />
              <br />
              Authorise
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="eye"
              />
              <br />
              View
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button
              className="btn btn-secondary"
              style={{
                background:
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`,
              }}
            >
              <MDBIcon
                style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="check"
              />
              <br />
              Ok
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="ban"
              />
              <br />
              Cancel
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="thumbs-down"
              />
              <br />
              Reject
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="question-circle"
              />
              <br />
              Help
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button
              className="btn btn-secondary"
              style={{
                background:
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`,
              }}
              onClick={() => document.getElementById("closeModalBTN").click()}
            >
              <MDBIcon
                style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="sign-out-alt"
              />
              <br />
              Exit
            </button>
          </span>
        </div>
      </div>
      <hr className="py-2" />
      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            flex: 0.5,
            marginRight: "5px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "10px",
          }}
        >
          <div>
            <InputField inputWidth={"100%"} disabled marginBottom={"10px"} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <InputField
              label={"Customer No"}
              labelWidth={"60%"}
              inputWidth={"60%"}
              disabled
            />
            <InputField
              label={"Prod Desc."}
              labelWidth={"40%"}
              inputWidth={"60%"}
              disabled
            />
          </div>

          <InputField
            label={"Address"}
            labelWidth="25%"
            inputWidth={"75%"}
            disabled
            marginBottom={"10px"}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              width: "100%",
            }}
          >
            <div style={{ flex: 0.5 }}>
              <InputField
                label={"Email"}
                labelWidth={"50%"}
                inputWidth={"50%"}
                disabled
              />
            </div>

            <div style={{ flex: 0.5, textAlign: "center" }}>
              <div style={{ marginLeft: "50%" }}>
                <ButtonComponent
                  buttonWidth={"120px"}
                  buttonHeight={"25px"}
                  label={"Send Email"}
                  labelWidth={"50%"}
                  inputWidth={"50%"}
                  disabled
                />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              width: "100%",
            }}
          >
            <div style={{ flex: 0.5 }}>
              <InputField
                label={"Phone"}
                labelWidth={"50%"}
                inputWidth={"50%"}
                disabled
              />
            </div>

            <div style={{ flex: 0.5, textAlign: "center" }}>
              <div style={{ marginLeft: "50%" }}>
                <ButtonComponent
                  buttonWidth={"120px"}
                  buttonHeight={"25px"}
                  label={"Send SMS"}
                  labelWidth={"50%"}
                  inputWidth={"50%"}
                  disabled
                />
              </div>
            </div>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div style={{ flex: 0.5, marginRight: "3px" }}>
              <InputField
                label={"Classification"}
                labelWidth={"50%"}
                inputWidth={"50%"}
                disabled
              />
            </div>

            <div style={{ flex: 0.5 }}>
              <InputField
                label={"Sector"}
                textAlign={"center"}
                labelWidth={"50%"}
                inputWidth={"50%"}
                disabled
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            <div>
              <ButtonComponent
                buttonHeight={"25px"}
                label={"View All Loans"}
                buttonWidth={"135px"}
              />
            </div>
          </div>
        </div>

        {/*Other Section*/}
        <div
          style={{
            flex: 0.5,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "10px",
          }}
        >
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            <div>
              <InputField
                label={"Principal Balance"}
                labelWidth={"50%"}
                inputWidth={"50%"}
                disabled
              />
            </div>
          </div>

          <hr />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div style={{ flex: 0.5, marginRight: "3px" }}>
              <InputField
                label={"Principal"}
                labelWidth={"50%"}
                inputWidth={"50%"}
                disabled
              />
            </div>

            <div style={{ flex: 0.5 }}>
              <InputField
                label={"Interest"}
                textAlign="center"
                labelWidth={"50%"}
                inputWidth={"50%"}
                disabled
              />
            </div>
          </div>

          <div style={{ width: "100%" }}>Interest</div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div style={{ flex: 0.5, marginRight: "3px" }}>
              <ListOfValue
                label={"Accrued"}
                labelWidth={"50%"}
                inputWidth={"50%"}
                disabled
              />
            </div>

            <div style={{ flex: 0.5 }}>
              <ListOfValue
                textAlign="center"
                labelWidth={"50%"}
                inputWidth={"50%"}
                disabled
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div style={{ flex: 0.5, marginRight: "3px" }}>
              <ListOfValue
                label={"Penal"}
                labelWidth={"50%"}
                inputWidth={"50%"}
                disabled
              />
            </div>

            <div style={{ flex: 0.5 }}>
              <ListOfValue
                textAlign="center"
                labelWidth={"50%"}
                inputWidth={"50%"}
                disabled
              />
            </div>
          </div>

          <hr />

          <InputField
            label={"Total Facility Balance"}
            labelWidth={"25%"}
            inputWidth={"75%"}
            disabled
          />
        </div>
      </div>
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <ButtonComponent buttonHeight={"30px"} label={"Print Loan Schedule"} />
        <ButtonComponent buttonHeight={"30px"} label="Print Repayments" />
        <ButtonComponent buttonHeight={"30px"} label={"Loan Rescheduling"} />
        <ButtonComponent
          buttonHeight={"30px"}
          label={"Charges statements enq."}
        />
        <ButtonComponent
          buttonHeight={"30px"}
          label={"Print Statements (Hist)"}
        />
      </div>

      <br />

      <div>
        <DataTable columns={columns} />
      </div>
    </div>
  );
}

export default LoanGeneralEnquiry;

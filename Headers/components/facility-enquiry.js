import React, { useState } from "react";
import InputField from "../../../components/others/Fields/InputField";
import SelectField from "../../../components/others/Fields/SelectField";
import ListOfValue from "../../../components/others/Fields/ListOfValue";
import Modal from "react-bootstrap/Modal";
import DataTable from "../../../components/others/Datatable/DataTable";
import ButtonType from "../../../components/others/Button/ButtonType";
import Label from "../../others/Label/Label";
import { MDBIcon } from "mdb-react-ui-kit";
import { FiXCircle } from "react-icons/fi";
import LoanGeneralEnquiry from "./loan-general-enquiry";

function FacilityEnquiry() {
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  const [loanData, setLoanData] = useState([]);
  const [interestInSuspense, setInterestInSuspense] = useState("");
  const [penalInSuspense, setPenalInSuspense] = useState("");
  const [backDatedLoans, setBackDatedLoans] = useState("");
  const [cancelled, setCancelled] = useState("");
  const [restructured, setRestructured] = useState("");
  const [inArrears, setInArrears] = useState("");
  const [withPenalty, setWitPenalty] = useState("");
  const [expired, setExpired] = useState("");
  const [classified, setlassified] = useState("");
  const [arrearsInterest, setArrearsInterest] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [typeOfFacility, setTypeOfFacility] = useState("");
  const [facilityAC, setFacilityAC] = useState("");
  const [repaymentAC, setRepaymentAC] = useState("");
  const [facilityStatus, setFacilityStatus] = useState("");
  const [acClassification, setACClassification] = useState("");

  function onOkPress() {
    console.log("clicked");

    // facility_no: "OD00000029",
    axios
      .get("http://192.168.1.195:3020/loan-general-enquiry")
      .then(function (response) {
        console.log(response.data);
        setLoanData(JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const columns = [
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
      name: "Customer Name",
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
      name: "Tenor",
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
      name: "Effect. Date",
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
      name: "Rate",
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
      name: "Facility Bal",
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
      name: "Accrued int",
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
      name: "Accrued Pen.",
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
      name: "Class",
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
      name: "Facility Status",
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
  //Facility A/C

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "10px",
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                getTheme.theme.headerImage +
                `)`,
              color: "white",
            }}
          >
            <div style={{ fontSize: "85%" }}>Loan General Enquiry</div>
            <div
              onClick={() => {
                handleClose();
              }}
              id="closeModalBTN"
            >
              <FiXCircle />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <LoanGeneralEnquiry />
        </Modal.Body>
      </Modal>
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
              onClick={() => onOkPress()}
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
              onClick={() => handleShow()}
            >
              <MDBIcon
                style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="caret-right"
              />
              <br />
              Next
            </button>
          </span>
        </div>
      </div>
      <hr className="py-2" />

      <div style={{ display: "flex", flex: 1 }}>
        {/*///////////////////////////////////////////////////
          /////////////// FIRST SECTION ////////////
          ///////////////////////////////////////////////////*/}
        <div
          style={{
            flex: 0.4,
            marginRight: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "20px",
          }}
        >
          <InputField
            marginBottom={"10px"}
            label={"Customer Name"}
            labelWidth={"25%"}
            inputWidth={"75%"}
          />

          {/*Row*/}
          <div style={{ display: "flex", flex: 1, marginBottom: "10px" }}>
            <div style={{ flex: 0.5 }}>
              <ListOfValue
                // marginBottom={"5px"}
                label={"Currency"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
            <div style={{ flex: 0.5 }}>
              <ListOfValue
                // marginBottom={"5px"}
                label={"Branch"}
                textAlign={"center"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
          </div>

          {/*Row*/}
          <div style={{ display: "flex", flex: 1, marginBottom: "10px" }}>
            <div style={{ flex: 0.5 }}>
              <InputField
                type="date"
                // marginBottom={"10px"}
                label={"Effective Date"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
            <div style={{ flex: 0.5 }}>
              <InputField
                type="date"
                // marginBottom={"10px"}
                label={"To"}
                textAlign={"center"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
          </div>

          {/*Row*/}
          <div style={{ display: "flex", flex: 1, marginBottom: "10px" }}>
            <div style={{ flex: 0.5 }}>
              <InputField
                type="date"
                // marginBottom={"10px"}
                label={"Disbursed Date"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
            <div style={{ flex: 0.5 }}>
              <InputField
                type="date"
                // marginBottom={"10px"}
                label={"To"}
                textAlign={"center"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
          </div>

          {/*Row*/}
          <div style={{ display: "flex", flex: 1, marginBottom: "10px" }}>
            <div style={{ flex: 0.5 }}>
              <InputField
                type="date"
                // marginBottom={"10px"}
                label={"Expiry Date"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
            <div style={{ flex: 0.5 }}>
              <InputField
                type="date"
                // marginBottom={"10px"}
                label={"To"}
                textAlign={"center"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
          </div>

          {/*Row*/}
          <div style={{ display: "flex", flex: 1, marginBottom: "10px" }}>
            <div style={{ flex: 0.5 }}>
              <InputField
                // marginBottom={"10px"}
                label={"Amt Granted Btw"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
            <div style={{ flex: 0.5 }}>
              <InputField
                // marginBottom={"10px"}
                label={"and"}
                textAlign={"center"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
          </div>

          {/*Row*/}
          <div style={{ display: "flex", flex: 1, marginBottom: "10px" }}>
            <div style={{ flex: 0.5, display: "flex" }}>
              <div style={{ display: "flex", flex: 1 }}>
                <div style={{ flex: 0.5 }}>
                  <Label label={"Days to Expiry Btw"} fontSize={"85%"} />
                </div>
                <div style={{ display: "flex", flex: 0.5 }}>
                  <InputField inputWidth={"95%"} />
                  <div style={{ margin: "2px" }}>
                    <Label label={"and"} fontSize={"85%"} />
                  </div>
                  <InputField inputWidth={"95%"} />
                </div>
              </div>
            </div>

            <div style={{ flex: 0.5 }}>
              <ListOfValue
                // marginBottom={"10px"}
                label={"Sector"}
                textAlign={"center"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
          </div>

          {/*Row*/}
          <div style={{ display: "flex", flex: 1, marginBottom: "10px" }}>
            <div style={{ flex: 0.5, display: "flex" }}>
              <div style={{ display: "flex", flex: 1 }}>
                <div style={{ flex: 0.5 }}>
                  <Label label={"Days to Next"} fontSize={"85%"} />
                </div>
                <div style={{ display: "flex", flex: 0.5 }}>
                  <InputField inputWidth={"95%"} />
                  <div style={{ margin: "2px" }}>
                    <Label label={"and"} fontSize={"85%"} />
                  </div>
                  <InputField inputWidth={"95%"} />
                </div>
              </div>
            </div>

            <div style={{ flex: 0.5 }}>
              <ListOfValue
                // marginBottom={"10px"}
                label={"RO"}
                textAlign={"center"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
          </div>

          {/*Row */}
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flex: 0.5 }}></div>
            <div style={{ flex: 0.5 }}>
              <ListOfValue
                // marginBottom={"10px"}
                label={"Product"}
                textAlign={"center"}
                labelWidth={"50%"}
                inputWidth={"50%"}
              />
            </div>
          </div>
        </div>

        {/*///////////////////////////////////////////////////
          /////////////// SECOND SECTION ////////////
          ///////////////////////////////////////////////////*/}
        <div
          style={{
            flex: 0.3,
            marginRight: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "20px",
          }}
        >
          <InputField
            marginBottom={"10px"}
            label={"Customer No"}
            labelWidth={"50%"}
            inputWidth={"50%"}
          />
          <SelectField
            marginBottom={"10px"}
            label={"Type of Facility"}
            labelWidth={"50%"}
            inputWidth={"50%"}
          />
          <InputField
            marginBottom={"10px"}
            label={"Facility A/C"}
            labelWidth={"50%"}
            inputWidth={"50%"}
          />
          <InputField
            marginBottom={"10px"}
            label={"Repayment A/C"}
            labelWidth={"50%"}
            inputWidth={"50%"}
          />
          <SelectField
            marginBottom={"10px"}
            label={"Facility Status"}
            labelWidth={"50%"}
            inputWidth={"50%"}
          />
          <SelectField
            marginBottom={"10px"}
            label={"A/C Classification"}
            labelWidth={"50%"}
            inputWidth={"50%"}
          />

          <InputField marginBottom={"10px"} disabled inputWidth={"100%"} />
          <InputField marginBottom={"10px"} disabled inputWidth={"100%"} />
          <InputField marginBottom={"10px"} disabled inputWidth={"100%"} />
        </div>

        {/*///////////////////////////////////////////////////
          /////////////// THIRD SECTION ////////////
          ///////////////////////////////////////////////////*/}
        <div
          style={{
            flex: 0.3,
            marginRight: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "20px",
          }}
        >
          {/*radio buttons section*/}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <Label label={"Interest In Suspense"} />
            </div>

            <div style={{ width: "50%", display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <ButtonType
                  label={"Yes"}
                  type="radio"
                  name="Interest In Suspense"
                />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType
                  label={"No"}
                  type="radio"
                  name="Interest In Suspense"
                />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType
                  label={"All"}
                  type="radio"
                  name="Interest In Suspense"
                />
              </div>
            </div>
          </div>

          {/*radio buttons section*/}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <Label label={"Penal In Suspense"} />
            </div>

            <div style={{ width: "50%", display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <ButtonType
                  label={"Yes"}
                  type="radio"
                  name="Penal In Suspense"
                />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType
                  label={"No"}
                  type="radio"
                  name="Penal In Suspense"
                />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType
                  label={"All"}
                  type="radio"
                  name="Penal In Suspense"
                />
              </div>
            </div>
          </div>

          {/*radio buttons section*/}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <Label label={"Backdated Loans"} />
            </div>

            <div style={{ width: "50%", display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"Yes"} type="radio" name="Backdated Loans" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"No"} type="radio" name="Backdated Loans" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"All"} type="radio" name="Backdated Loans" />
              </div>
            </div>
          </div>

          {/*radio buttons section*/}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <Label label={"Cancelled"} />
            </div>

            <div style={{ width: "50%", display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"Yes"} type="radio" name="Cancelled" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"No"} type="radio" name="Cancelled" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"All"} type="radio" name="Cancelled" />
              </div>
            </div>
          </div>

          {/*radio buttons section*/}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <Label label={"Restructured"} />
            </div>

            <div style={{ width: "50%", display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"Yes"} type="radio" name="Restructured" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"No"} type="radio" name="Restructured" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"All"} type="radio" name="Restructured" />
              </div>
            </div>
          </div>

          {/*radio buttons section*/}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <Label label={"In Arrears"} />
            </div>

            <div style={{ width: "50%", display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"Yes"} type="radio" name="In Arrears" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"No"} type="radio" name="In Arrears" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"All"} type="radio" name="In Arrears" />
              </div>
            </div>
          </div>

          {/*radio buttons section*/}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <Label label={"With Penalty"} />
            </div>

            <div style={{ width: "50%", display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"Yes"} type="radio" name="With Penalty" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"No"} type="radio" name="With Penalty" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"All"} type="radio" name="With Penalty" />
              </div>
            </div>
          </div>

          {/*radio buttons section*/}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <Label label={"Expired"} />
            </div>

            <div style={{ width: "50%", display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"Yes"} type="radio" name="Expired" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"No"} type="radio" name="Expired" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"All"} type="radio" name="Expired" />
              </div>
            </div>
          </div>

          {/*radio buttons section*/}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <Label label={"Classified"} />
            </div>

            <div style={{ width: "50%", display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"Yes"} type="radio" name="Classified" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"No"} type="radio" name="Classified" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"All"} type="radio" name="Classified" />
              </div>
            </div>
          </div>

          {/*radio buttons section*/}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <Label label={"Arrears Interest"} />
            </div>

            <div style={{ width: "50%", display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <ButtonType
                  label={"Yes"}
                  type="radio"
                  name="Arrears Interest"
                />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType label={"No"} type="radio" name="Arrears Interest" />
              </div>

              <div style={{ marginRight: "10px" }}>
                <ButtonType
                  label={"All"}
                  type="radio"
                  name="Arrears Interest"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* <div>
        <DataTableAnnex />
      </div> */}

      <div>
        <DataTable columns={columns} data={loanData} />
      </div>
    </div>
  );
}

export default FacilityEnquiry;

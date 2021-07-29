import React from "react";
import PropTypes from "prop-types";
import CompanyList from "./CompanyList/CompanyList";
import InputForm from "./InputForm/InputForm";
import "./MainWindow.css";
function MainWindow(props) {
  return (
    <>
      <main className="mainWindow-main">
        <CompanyList />
      <InputForm />{" "}
      </main>
    </>
  );
}
export default MainWindow;

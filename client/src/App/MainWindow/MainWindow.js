import React, { useState } from "react";
import PropTypes from "prop-types";
import CompanyList from "./CompanyList/CompanyList";
import InputForm from "./InputForm/InputForm";
import "./MainWindow.css";
function MainWindow(props) {
  return (
    <>
      <main className="mainWindow-main">
        <InputForm appendToCompanyList={props.appendToCompanyList} />{" "}
        <CompanyList />
      </main>
    </>
  );
}
export default MainWindow;
MainWindow.propTypes = {
  appendToCompanyList: PropTypes.func,
};

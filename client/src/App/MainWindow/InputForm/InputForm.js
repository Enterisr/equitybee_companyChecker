import React, { useState } from "react";
import PropTypes from "prop-types";
import CompanyInput from "./ComapnyInput/CompanyInput";
import "./InputForm.css";
import utils from "../../../utils.js";
function InputForm(props) {
  const [searchedDomain, setSearchedDomain] = useState("");

  function handleInputChange(e) {
    setSearchedDomain(e.target.value);
  }
  async function fetchData(e) {
    e.preventDefault();
    //if(searchedDomain.includes('https').replace('https',""));
    const params = new URLSearchParams({
      domain: searchedDomain,
    });
    try {
      const data = await fetch(utils.resolveServerURI() + `company?${params}`);
      if (data) {
        const companyData = await data.json();
        alert(companyData);
      }
    } catch (ex) {
      console.error(ex);
      alert("Search failed :(");
    }
  }
  return (
    <form className="inputForm-form">
      <CompanyInput
        searchedDomain={searchedDomain}
        handleChange={handleInputChange}
      />
      <button onClick={fetchData}>Search</button>
    </form>
  );
}
export default InputForm;

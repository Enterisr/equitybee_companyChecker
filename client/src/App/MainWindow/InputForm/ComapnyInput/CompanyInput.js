import React from "react";
import PropTypes from "prop-types";
import "./CompanyInput.css";
function CompanyInput(props) {
  return (
    <>
      <label>Type a domain and I will take care of the rest</label>{" "}
      <input value={props.searchedDomain} onChange={props.handleChange} />
    </>
  );
}

CompanyInput.propTypes = {
  searchedDomain: PropTypes.string,
  handleChange: PropTypes.func,
};

export default CompanyInput;

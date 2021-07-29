import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./CompanyList.css";
import { Link } from "react-router-dom";
import App from "../../../App";
import AppContext from "../../../AppContext";
function CompanyList(props) {
  const companies = useContext(AppContext);

  function buildCompanyRow(company) {
    console.log(company);
    return (
      <li className="company-li">
        <Link to={`company/${company.name}`}>
          <img src={company.logo} />
          <h4>{company.name}</h4>
          <span>{company.type}</span>
        </Link>
      </li>
    );
  }

  return (
    <ul className="company-ul">
      {companies.map((company) => buildCompanyRow(company))}
    </ul>
  );
}

export default CompanyList;

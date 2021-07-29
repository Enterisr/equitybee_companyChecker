import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import "./FocusWindow.css";
import AppContext from "../../AppContext";
import { useLocation } from "react-router-dom";
function FocusWindow(props) {
  const companies = useContext(AppContext);
  const location = useLocation();
  let furtherDataLabels = [];

  const companyName = location.pathname.split("/")[2];
  const company = companies.find((comp) => comp.name === companyName);

  if (company) {
    furtherDataLabels = [
      { label: "industry", val: company.category.industry },
      { label: "Raised", val: company.Raised },
      {
        label: "est. Annual Revenue",
        val: company["Estimated Annual Revenue"],
      },
      { label: "Market Cap", val: company.category.industry },
      { label: "location", val: company.location },
      { label: "Employees", val: company.metrics.employeesRange },
    ];
  }
  return (
    <main>
      {company && (
        <>
          <div className="companyDetails-div">
            <h2>{company.name}</h2>
            <img src={company.logo} />
            <a target="_blank" href={company.domain} />
            <h4>Further details:</h4>
            <ul>
              {furtherDataLabels.map(({ label, val }) => {
                if (val)
                  return (
                    <li>
                      <label>{label}:</label>
                      {val}
                    </li>
                  );
              })}
            </ul>
          </div>
        </>
      )}
      {!company && <div>Can't find company :(</div>}
    </main>
  );
}
export default FocusWindow;

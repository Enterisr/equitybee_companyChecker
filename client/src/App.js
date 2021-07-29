import React, { useState,useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import AppContext from "./AppContext";
import MainWindow from "./App/MainWindow/MainWindow";
import FocusWindow from "./App/FocusWindow/FocusWindow";
import LocalStorageHandler from "./LocalStorageHandler";
function App() {
  const [companyList, setCompanyList] = useState([]);

  function appendToCompanyList(company) {
    const companyListClone = [...companyList];
    companyListClone.push(company);
    setCompanyList(companyListClone);
    LocalStorageHandler.setValue("companyList", companyListClone);
  }
  useEffect(() => {
    //try to load localstorage to page
    const companiesFromLocalStorage =
      LocalStorageHandler.getValue("companyList");
    if (companiesFromLocalStorage) {
      setCompanyList(companiesFromLocalStorage);
    }
  }, []);
  return (
    <AppContext.Provider value={companyList}>
      <main className="App">
        <header className="App-header">Company Searcher</header>
        <Router>
          <Switch>
            <Route path="/company/:companyName">
              <FocusWindow />
            </Route>
            <Route path="/">
              <MainWindow appendToCompanyList={appendToCompanyList} />
            </Route>
          </Switch>
        </Router>
      </main>{" "}
    </AppContext.Provider>
  );
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import ComapnyInput from './ComapnyInput/ComapnyInput';
import ComapnyInput from './CompanyList/CompanyList';

function CompanyInput(props){

    return <input value={props.searchedDomain} onChange={props.handleChange}/>

}

CompanyInput.propTypes = {
    name: PropTypes.string
  }
  
export default MainWindow 
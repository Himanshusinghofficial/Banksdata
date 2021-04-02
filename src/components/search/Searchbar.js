import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React from "react";
import SearchDropdownLocation from './SearchDropDownLocation';
import SearchDropdownPlace from './SearchDropDownPlace';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Searchbar = ({ log: { logs}}) => {

    const _getAreaOptions = () => {
        const filteredCityOptions = [{name:'Mumbai'},{name:'Delhi'},{name:'Uttar Pradesh'},{name:'Banglore'},{name:'Punjab'}];
        return filteredCityOptions;
    }

    const _getLocationOptions = () => {
        const filteredOption = [];
        logs.map(log=> filteredOption.push({name:log.bank_name}))
        return filteredOption;
    }
 
    return (
        <>
        <div className="mx-4 md:mx-6 shadow rounded-2xl px-2 bg-white grid grid-cols-3 animate fadeInUp searchBarBlk zindex-9">
            <div className="col-span-3 md:col-span-1 searchLocation h-12 w-full border-b grid grid-cols-8 md:border-none">
                <div className="items-center flex justify-center text-xl md:text-2xl text-pink-600"><FontAwesomeIcon icon={faMapMarkerAlt}/></div>
                <div className="col-span-7">
                   <SearchDropdownLocation options={_getAreaOptions()} placeholder="City"/>
                </div>
            </div>
            <div className="col-span-3 md:col-span-2 h-12 w-full grid grid-cols-8 md:border-l searchPlace">
                <div className="col-span-7">
                    <SearchDropdownPlace options={_getLocationOptions()} placeholder="Search for a place"/>
                </div>
                <div className="items-center flex justify-center border-transparent">
                    <Button className="h-full w-full p-0 text-xl md:text-2xl rounded-2xl text-pink-600"><FontAwesomeIcon icon={faSearch}/></Button>
                </div>
            </div>
        </div>
        </>
    )
}
  
Searchbar.propTypes = {
    log: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = state => ({
    log: state.log
  });
  
  export default connect(
    mapStateToProps,
    {}
  )(Searchbar);

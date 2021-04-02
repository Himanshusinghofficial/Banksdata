import { makeStyles } from "@material-ui/core";
import {useState,useEffect} from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

const useStyles = makeStyles((theme) => ({
    label: {
      display: 'block',
    },
    input: {
      
    },
    listbox: {
      width: "min(396px, 75%)",
      marginTop: "-8px",
      listStyle: 'none',
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto',
      maxHeight: 200,
      boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 20px 20px -10px rgba(0, 0, 0, 0.2)',
      '& li[data-focus="true"]': {
        backgroundColor: '#DB2777',
        color: 'white',
        cursor: 'pointer',
      },
      '& li:active': {
        backgroundColor: '#DB2777',
        color: 'white',
      },
    },
  }));

const SearchDropDownLocation = ({getLogs,options,placeholder}) => {
  const [query, updateQuery] = useState("Select City");
    const onSet = ({updatevalue}) => {
        updateQuery(updatevalue)
        getLogs(updatevalue)
    }
    const classes = useStyles();
    const [check,setcheck]=useState(false);
    const onSearch = e => {
      setcheck(true);
     }
    const onclick = e =>{
      updateQuery(e.currentTarget.innerText)
      setcheck(false);
      getLogs(e.currentTarget.innerText)
    }
     
  return (
        <>
            <input className={"w-full h-full px-4 bg-transparent text-lg"+classes.input} placeholder={placeholder} type="text" value={query} onChange={onSet} onClick={onSearch}/>
                  <ul className={"absolute z-10 p-0 mx-4 rounded-b-2xl rounded-t-lg bg-gradient-to-r from-pink-300 via-pink-200 to-pink-200 " + classes.listbox}>
                    {check?options.map((option, index) => (
                        <li onClick={onclick} className="px-4 py-2" key={index}>{option.name}</li>
                    )):""}
                    </ul>
                
          </>
    )
};

SearchDropDownLocation.propTypes = {
  getLogs: PropTypes.func.isRequired
};

export default connect(
  null,
  { getLogs }
)(SearchDropDownLocation);

import { makeStyles } from "@material-ui/core";
import Fuse from 'fuse.js';
import {useState} from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';
import unique from 'array-unique';

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

const SearchDropDownPlace = ({searchLogs,options,placeholder}) => {

  const fuse = new Fuse(options, {
    keys: [
        'name'
    ],
    includeScore:true,
})
  const [query, updateQuery] = useState('');
  const onSearch = ({ currentTarget }) => {
    setcheck(true);
    updateQuery(currentTarget.value);
    searchLogs(currentTarget.value);
  }
  const results = fuse.search(query)
  const characterresult=results.map(result => result.item);
  let arr=[];
  {characterresult.map(data=>arr.push(data.name))}
    const classes = useStyles();
    const [check,setcheck]=useState(false);
    const onclick = e =>{
      updateQuery(e.currentTarget.innerText)
      setcheck(false);
      searchLogs(e.currentTarget.innerText);
    }

  return (
        <>
            <input className={"w-full h-full px-4 bg-transparent text-lg "+classes.input} placeholder={placeholder} type="text" value={query} onChange={onSearch} />
                {characterresult.length > 0 ? (
                    <ul className={"absolute z-10 p-0 mx-4 rounded-b-2xl rounded-t-lg bg-gradient-to-r from-pink-300 via-pink-200 to-pink-200 " + classes.listbox}>
                    {check?unique(arr).map((option, index) => (
                        <li onClick={onclick} className="px-4 py-2"  key={index}>{option}</li>
                    )):""}
                    </ul>
            ) : null}
        </>
    )
};

SearchDropDownPlace.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchLogs }
)(SearchDropDownPlace);


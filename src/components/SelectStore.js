import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';


import SearchBar from 'material-ui-search-bar'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchResult from './SearchResult'


  
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Store1',
  'Store2',
  'Store3',
  'Store4',
  'Store5',
  'Store6',
  'Store7',
  'Store8',
  'Store9',
  'Store10',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [value, setValue] = React.useState("search nearby item...");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

 const doSomethingWith = (value) => {
   setOpen(true)
 };

 const handleChangeClose = (close) => {
  setOpen(close)
 }
 

  return (
    <div>
        <Grid >
       
       <Grid item xs={3}>
         
         {/* <FormControl className={clsx(classes.formControl, classes.noLabel)}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>select store</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Select Store</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
           
       </Grid>
       <Grid style={{alignSelf:"center",marginTop:"-4%"}} item xs={12}>
         
         <SearchBar
            
            onChange={(newValue) => setValue(newValue)}
            onRequestSearch={() => doSomethingWith(value)}
            placeholder='search nearby item...'
            style={{ height: '37px',width:'100%', color: 'grey', marginTop: '10%' }}
          />
          <SearchResult openvalue={open} searchvalue={value} handlechange={handleChangeClose}/>
             <br></br>
       </Grid>
       
     </Grid>
        
      
      
    </div>
  );
}
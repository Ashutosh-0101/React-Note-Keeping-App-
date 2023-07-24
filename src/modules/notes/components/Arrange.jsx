import { useEffect, useState } from "react";
import { List } from "./List";
import Button from '@mui/material/Button';
import { useDispatch , useSelector} from "react-redux";

import {sortNote} from "../redux/Note-Slice";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { getTotalRecords } from '../redux/Note-Slice';
export const Arrange=()=>{
    const [sort,setSort]= useState('');
    const dispatch=useDispatch();
    const sortIt=(event)=>{
          const sortBy=event.target.value;
          setSort(sortBy);
          dispatch(sortNote({sortBy}))

    }
    // const noteObject = useSelector(state=>{
    //     //console.log('*********** State is ', state);
    //     return {'notes':state.noteSlice.notes, 'total': state.noteSlice.total,'ascendingOrder': state.noteSlice.ascendingOrder };
    //     // return state.noteSlice.notes;
    //   });

    useEffect(()=>{
      // Component Mount
      console.log('Component Mount....');
      dispatch(getTotalRecords()); // Push
    //  const promise= apiclient.read();
    //  promise.then(result=>{
    //   console.log('Result is::::',result);
    //  }).catch(err=>{
    //   console.log('Error is',err);
    //  })//---->>>we avoid ki componet apiclient me jake api call lagaye..
    },[]);
      // const handelSort = ()=>{
        
      //   dispatch(sortNote());
       
      // }
        
    return(
        <>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="sort"
          onChange={sortIt}
        >
          <MenuItem value="id">By id</MenuItem>
          <MenuItem value="title">By title</MenuItem>
          <MenuItem value="descr">By descr</MenuItem>
        </Select>
      
      <List/>
      
        {/* dispatch(sortNote()); */}
        </>

    );
}
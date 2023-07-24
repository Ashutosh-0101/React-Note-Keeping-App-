import React from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchNotes,getTotalRecords, searchNote } from '../redux/Note-Slice';
//import { apiclient } from '../../../shared/services/api-client';
export const Search = () => {
  const dispatch = useDispatch();
  const notesObject = useSelector(state=>{
    console.log('*********** State is ', state);
    return { 'notes': state.NoteSlice.notes, 'total': state.NoteSlice.total,'results':state.NoteSlice['search-result'],'isLoading':state.NoteSlice.isLoading};
  });
  const takeSearchValue=(event)=>{
    const searchValue= event.target.value ;
     //for real time value;
     const searchData={search:searchValue};
     dispatch(searchNote(searchData));
   }
  useEffect(()=>{
    // Component Mount
    console.log('Component Mount....');
    dispatch(getTotalRecords()); // Push
    dispatch(fetchNotes());
  //  const promise= apiclient.read();
  //  promise.then(result=>{
  //   console.log('Result is::::',result);
  //  }).catch(err=>{
  //   console.log('Error is',err);
  //  })//---->>>we avoid ki componet apiclient me jake api call lagaye..
  },[]);

  const handleSearch = (event) => {
    const searchValue= event.target.value;
    const searchData={search:searchValue};//we need to payload data in store so we are going to store it in a object and then dispatch it 
    dispatch( searchNote(searchData));
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <div>
        <h1>Total Records: {notesObject.total}</h1>
        {notesObject.isLoading?<p>Loading....</p>:<p> Data Comes...</p>}
        <br/>
      {/* <TextField
        fullWidth
        id="standard-search"
        label="Search Notes"
        type="search"
        variant="filled"
        onChange={handleSearch}
      /> */}
       <TextField onChange={takeSearchValue} label="Search by title" variant="outlined" />

    

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: 'black', color: 'white' }}>
            <TableRow>
              <StyledTableCell align="right">Id</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Descr</StyledTableCell>
              <StyledTableCell align="left">Completion Date</StyledTableCell>
              <StyledTableCell align="right">Importance</StyledTableCell>
              <StyledTableCell align="right">Operations</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {/* //.length>0 ka mtlb ye hai ki length jb >0 hoga means ki search tag me kuch dale ho to ye search wala chalega */}
          {notesObject.results.length>0 &&notesObject.results.map(note=>{
              return (<TableRow>
                <TableCell align="right">{note.id}</TableCell>
                <TableCell align="left">{note.title}</TableCell>
                <TableCell align="left">{note.descr}</TableCell>
                <TableCell align="left">{note.cdate}</TableCell>
                <TableCell align="right">{note.importance}</TableCell>
                {/* <TableCell align="right"><i class="fa-solid fa-trash"></i> <i class="fa-solid fa-pen-to-square"></i></TableCell> */}
                <TableCell align='right'><DeleteIcon/> <EditIcon/></TableCell>
            </TableRow>);
          })}
          {/* {jo record hai wahi dikhao } */}
            {notesObject.results.length==0 && notesObject.notes.map(note=>{
                return (<TableRow>
                    <TableCell align="right">{note.id}</TableCell>
                    <TableCell align="left">{note.title}</TableCell>
                    <TableCell align="left">{note.descr}</TableCell>
                    <TableCell align="left">{note.cdate}</TableCell>
                    <TableCell align="right">{note.importance}</TableCell>
                    {/* <TableCell align="right"><i class="fa-solid fa-trash"></i> <i class="fa-solid fa-pen-to-square"></i></TableCell> */}
                    <TableCell align='right'><DeleteIcon/> <EditIcon/></TableCell>
                </TableRow>);
            })}
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

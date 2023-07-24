import * as React from 'react';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import { addNote } from '../redux/Note-Slice';
import DescriptionIcon from "@mui/icons-material/Description";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import dayjs from "dayjs";
import { noteOperations } from "../services/note-operations";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MuiColorInput } from "mui-color-input";

import { Note } from '../models/note';
import {useDispatch} from 'react-redux';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const Add = (props) => {
  const id = useRef();
  const title = useRef();
  const descr = useRef();
  const [dateValue, setDateValue] = useState(null);
  const [colorValue, setColorValue] = useState("#ffffff");
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
     takeNote();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const date = dateValue ? dayjs(dateValue).format("MM/DD/YYYY") : "";
  //const noteObject=new Note(id,title,descr,date,colorValue)
  const dispatch = useDispatch();
  const takeNote = () => {
    console.log("Add Note is Called...");
    const idValue = id.current.value;
    const titleValue = title.current.value;
    const descValue = descr.current.value;

    const date = dateValue ? dayjs(dateValue).format("MM/DD/YYYY") : "";
    console.log("Now Date is ", date);
    console.log("Color ", colorValue);
    const noteObject=new Note(idValue,titleValue,descValue,date,colorValue);    
    noteOperations.addNote(idValue, titleValue, descValue, date, colorValue);
    dispatch(addNote(noteObject));
    setOpen(true);
    // console.log('Id ',idValue);
    // console.log('Title ', titleValue);
    // console.log('Descr ', descValue);
    // Put the data in an object (Object Literal)
    //const noteObject = {'id':idValue, 'title':titleValue,
    //'descr':descValue};
    //const noteObject = noteOperations.addNote(idValue, titleValue, descValue, '','')

    // props.fn(); // Call collectNoteData
  };

  return (
    <>
      <Box
        sx={{
          margin: 5,
          flexDirection: "column",
          display: "flex",
        }}
      >
        <TextField
          id="note-id"
          inputRef={id}
          label="Id"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DescriptionIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="note-title"
          label="Title"
          inputRef={title}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SpatialAudioOffIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          inputRef={descr}
          id="note-desc"
          label="Description"
          multiline
          maxRows={4}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SpatialAudioOffIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={dateValue}
            onChange={(selectedDate) => setDateValue(selectedDate)}
          />
        </LocalizationProvider>

        <MuiColorInput
          value={colorValue}
          onChange={(selectedColor) => setColorValue(selectedColor)}
        />
       <div>
        <Button onClick={handleClickOpen} variant="contained" color="warning">
          Add Note
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Note is added Successfully"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Go on view all to see all the added notes.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

        </div>
      </Box>
    </>
  );
};

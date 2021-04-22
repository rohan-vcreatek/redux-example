import React from 'react';
import {
    Paper,
    TextField,
    Button,
    Typography
} from '@material-ui/core/';
import { addNote } from '../actions';
import {useDispatch} from 'react-redux';

const AddNote = () => {
    const [note,setNote] = React.useState("");
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        setNote(e.target.value)
    }

    const addNoteHandler = ()=>{
        dispatch(addNote(note))
    }
    
	return (
        <Paper elevation={2} style={{width : '30%',padding : 10,textAlign:'center'}}>
            <Typography variant='caption'>
                Fill in your new note here.
            </Typography>
              <TextField
                  id="name"
                  variant="outlined"
                  type="text"
                  value={note}
                  margin="normal"
                  onChange={handleChange}
                  fullWidth
                  autoFocus
              />
              <Button variant='outlined' onClick={addNoteHandler}>Add a Note</Button>
        </Paper>
	);
}

export default AddNote;
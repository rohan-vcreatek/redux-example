import React from 'react';
import {
    Paper,
    Button,
    Typography
} from '@material-ui/core/';
import { deleteNotes } from '../actions';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

const Delete = (props) => {
    const notes = useSelector(state=>state);
    const dispatch = useDispatch();

    const deleteHandler = ()=>{
        dispatch(deleteNotes())
    }

	return (
        <Paper elevation={2} style={{width : '30%',padding : 10,textAlign:'center'}}>
            <Typography>{`You have ${notes.length} notes`}</Typography>
            <Button variant='contained' onClick={deleteHandler}>Delete all</Button>
        </Paper>
	);
}

export default Delete;
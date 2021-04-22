import React from 'react';
import {
    Paper,
    Typography
} from '@material-ui/core/';
import {useSelector} from 'react-redux'

const List = (props) => {
    const notes = useSelector(state=>state);
	return (
        <Paper elevation={1} style={{
            width : '30%',
            padding : 10
        }}>
            {notes.map((note,index)=>(
                <Paper elevation={3} key={index} style={{
                    padding : 10,
                    margin:10
                    }}>
                    <Typography>{`#${index}  ${note}`}</Typography>
                </Paper>
            ))}
        </Paper>
	);
}

export default List;
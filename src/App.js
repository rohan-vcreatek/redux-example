import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import noteReducer from './reducer';
import {
  Paper
} from '@material-ui/core/';
import List from './components/list';
import Delete from './components/delete';
import AddNote from './components/addnote';

const store = createStore(noteReducer,['First Note']);

const App = () => {
	return (
    <Provider store={store}>
      <Paper elevation={3} style={{
            display : 'flex',
            justifyContent : 'space-around',
            alignItems : 'center',
            padding : 20,
            margin : 20
        }}>
            <Delete/>
            <AddNote/>
            <List />
        </Paper>
    </Provider>
	);
}

export default App;
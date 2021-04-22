import {
    ADD_NOTE,
    DELETE_NOTES,
} from './actions';

export default (state = [] ,action)=>{
    switch (action.type){
        case ADD_NOTE:
            return [...state,action.note]
        case DELETE_NOTES : 
            return []
        default :
            return state;
    }
}
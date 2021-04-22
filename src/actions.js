export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTES = 'DELETE_NOTES';


export const addNote = (note)=>{
    return {
        type : ADD_NOTE,
        note : note
    }
}


export const deleteNotes = ()=>{ 
    return {
        type : DELETE_NOTES
    }
}

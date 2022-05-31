const ADD_DIALOG_TEXT = 'ADD-DIALOG-TEXT';
const UPDATE_DIALOG_TEXT = 'UPDATE-DIALOG-TEXT';

let initialState = {
    messagesData: [
      { id: 1, message: 'hi' },
      { id: 2, message: 'hi Kris' },
      { id: 3, message: 'hi Dima' },
      { id: 4, message: 'hi Fiiiima' }
    ],
    dialogsData: [
      { id: 1, name: 'Kris' },
      { id: 2, name: 'Dima' },
      { id: 3, name: 'Vital' },
      { id: 4, name: 'Zhenkaf' }
    ],
    dialogText: ''
  }

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG_TEXT: {
            let newDialog = {
                id: 5,
                message: state.dialogText
            };
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newDialog);
            stateCopy.dialogText = '';
            return stateCopy;
          }
        case UPDATE_DIALOG_TEXT: {
          let stateCopy = {...state};
          stateCopy.dialogText = action.newTxt;
            return stateCopy;
          }
        default:
            return state;
    }
    /* if (action.type === ADD_DIALOG_TEXT) {
        let newDialog = {
            id: 5,
            message: state.dialogText
        };
        state.messagesData.push(newDialog);
        state.dialogText = '';
    }
    else if (action.type === UPDATE_DIALOG_TEXT) {
        state.dialogText = action.newTxt;
    } */
}

export const addDialogTextActionCreator = () => {
    return {
      type: 'ADD-DIALOG-TEXT',
    };
  }
  export const updateDialogTextActionCreator = (val) => {
    return {
      type: 'UPDATE-DIALOG-TEXT',
      newTxt: val,
    };
  }
export default dialogsReducer;
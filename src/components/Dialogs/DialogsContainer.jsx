import React from "react";
import { connect } from "react-redux";
import { addDialogTextActionCreator } from "../../redux/dialogsReducer";
import { updateDialogTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

/* const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addDialog = () => {
                    store.dispatch(addDialogTextActionCreator());
                }

                let changeDialogArea = (val) => {
                    store.dispatch(updateDialogTextActionCreator(val));
                }

                return <Dialogs addDialog={addDialog}
                    changeDialogArea={changeDialogArea}
                    dialogsData={state.messagesPage.dialogsData}
                    messagesData={state.messagesPage.messagesData}
                    dialogText={state.messagesPage.dialogText}
                />
            }}
        </StoreContext.Consumer>
    )
} */

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        dialogText: state.messagesPage.dialogText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addDialog: () => {
            dispatch(addDialogTextActionCreator());
        },
        changeDialogArea: (val) => {
            dispatch(updateDialogTextActionCreator(val));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
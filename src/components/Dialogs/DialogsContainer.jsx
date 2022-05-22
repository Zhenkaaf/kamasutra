import React from "react";
import { addDialogTextActionCreator } from "../../redux/dialogsReducer";
import { updateDialogTextActionCreator } from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {


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
}

export default DialogsContainer;
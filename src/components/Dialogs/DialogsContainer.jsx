import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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
        addDialog: (val) => {
            dispatch(addDialogTextActionCreator(val));
        }
        /* changeDialogArea: (val) => {
            dispatch(updateDialogTextActionCreator(val));
        } */
    }
}


/* let AuthRedirectComponent = (props) => {
    if (!this.props.isAuth) {
        return <Navigate to={'/login'} /> 
    }
    return <Dialogs {...props} />
} */


/* let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); */
const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;
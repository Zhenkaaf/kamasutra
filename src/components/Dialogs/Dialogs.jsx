import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />;
    });

    let messagesElements = props.messagesData.map((elFromMessDate) => {
        return <Message message={elFromMessDate.message} key={elFromMessDate.id} />
    });
    let textFromTexrArea = React.createRef();

    let onAddDialog = () => {
        props.addDialog();
        //props.addDialogText();
        //props.dispatch({type: 'ADD-DIALOG-TEXT'});
        //props.store.dispatch(addDialogTextActionCreator());
    }
    let onChangeDialogArea = (event) => {
        let val = event.target.value;
        props.changeDialogArea(val);
        //let val = textFromTexrArea.current.value;
        //props.updateDialogText(val);
        //props.dispatch({type: 'UPDATE-DIALOG-TEXT', newTxt: val});
        //props.store.dispatch(updateDialogTextActionCreator(val));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} /> */}
                {/* <div className={s.item}>
                    <NavLink to='/dialogs/2'>Dima</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs/3'>Vital</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs/4'>Zhenkaf</NavLink>
                </div> */}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} /> */}
                {/* <div className={s.message}>hi Kris</div>
                <div className={s.message}>hi Dima</div> */}
            </div>
            <textarea onChange={onChangeDialogArea} /* ref={textFromTexrArea} */ value={props.dialogText} placeholder='Enter your message' />
            <button onClick={onAddDialog} >iambuttun</button>
        </div>
    )
}

export default Dialogs
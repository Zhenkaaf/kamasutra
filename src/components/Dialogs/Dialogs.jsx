import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator } from "../../utils/validators/validators";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />;
    });

    let messagesElements = props.messagesData.map((elFromMessDate) => {
        return <Message message={elFromMessDate.message} key={elFromMessDate.id} />
    });
    //let textFromTexrArea = React.createRef();

    let onAddDialog = (newTextMessage) => {
        props.addDialog(newTextMessage);
        //props.addDialogText();
        //props.dispatch({type: 'ADD-DIALOG-TEXT'});
        //props.store.dispatch(addDialogTextActionCreator());
    }
    /* let onChangeDialogArea = (event) => {
        let val = event.target.value;
        props.changeDialogArea(val);
        //let val = textFromTexrArea.current.value;
        //props.updateDialogText(val);
        //props.dispatch({type: 'UPDATE-DIALOG-TEXT', newTxt: val});
        //props.store.dispatch(updateDialogTextActionCreator(val));
    } */

    if (props.isAuth == false) {
        return <Navigate to={'/login'} /> 
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
            <NewDialogTextMessage onAddDialog={onAddDialog} />
            {/* <div>
            <textarea onChange={onChangeDialogArea} ref={textFromTexrArea} value={props.dialogText} placeholder='Enter your message' />
            <button onClick={onAddDialog} >iambuttun</button>
            </div> */}
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);
const NewDialogTextMessage = (props) => {
let submit = (values, { setSubmitting }) => {
    props.onAddDialog(values.newMessageText)
    setTimeout(() => {
      //alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

    return(
<Formik
       initialValues={{ newMessageText: '' }}
       /* validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }} */
       onSubmit={submit}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <Field
             //type="textarea"
             name="newMessageText"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.newMessageText}
             component={Textarea}
             validate ={maxLength50}
           />
           {errors.newMessageText && touched.newMessageText && <div className={s.bgTestError} >{errors.newMessageText}</div>}
           <button type="submit" disabled={isSubmitting}>
           iambuttun
           </button>
         </form>
       )}
     </Formik>
    )
}
export default Dialogs
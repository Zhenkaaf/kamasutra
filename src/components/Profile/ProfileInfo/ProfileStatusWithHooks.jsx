import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const ProfileStatusWithHooks = (props) => {
/* let stateWithSetState = useState(true);
let editMode = stateWithSetState[0];
let setEditMode = stateWithSetState[1]; */  //Деструктурированное присваинвание
let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);

const activateEditMode = () => {
    setEditMode(true); 
}
const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
}
const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
}
useEffect(() => {
    setStatus(props.status);
}, [props.status]);

    return (
        <div>
            {!editMode && //если у нас не editMode Тогда покажи это Другими словами, И возвращает первое ложное значение. Или последнее, если ничего не найдено.
                <div>
                    <span onDoubleClick={activateEditMode} >{props.status || '-------'}</span>
                </div>
            }
            {editMode && //если у нас editMode Тогда покажи это.. если эдит моде тру
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                </div>
            }
        </div>
    )
}






 /*    state = {
        editMode: false,
        title: 'YO',
        status: this.props.status
    }
    onStatusChange = (event) => {
        console.log(this);
        this.setState({
            status: event.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    activateEditMode() { // если использоавать метод объекта в  <span onDoubleClick={this.activateEditMode}> потеряется контекст
        this.setState({   //метод АСИНХРОНЕН, обновляет данные на странице и меняет локальный стейт
            editMode: true
        })
        //this.forceUpdate(); обновлякет двнные на странице, но лучше не испоользовать..
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    render() {
        
    }
 */


export default ProfileStatusWithHooks; 
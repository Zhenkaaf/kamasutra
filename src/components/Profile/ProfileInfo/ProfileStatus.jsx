import React from "react";


class ProfileStatus extends React.Component {
    state = {
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
        return (
            <div>
                {!this.state.editMode && //если у нас не editMode Тогда покажи это
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '-------'}</span>
                    </div>
                }
                {this.state.editMode && //если у нас editMode Тогда покажи это.. если эдит моде тру
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus; 
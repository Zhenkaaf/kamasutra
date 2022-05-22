
import s from './Friends.module.css';








const Friends = (props) => {
    return (
     
       
          <div >
              <div className={s.item}>{props.name}</div>
          </div>
     
    )
  }
  
  export default Friends;

/*   const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.item + ' ' + s.active}>
            <img className={s.avaDial} src="https://images.hdqwalls.com/download/hair-in-face-beautiful-blonde-girl-th-1280x2120.jpg" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem; */
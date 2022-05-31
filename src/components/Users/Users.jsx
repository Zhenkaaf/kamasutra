import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://uznayvse.ru/person/britney/britney02.jpg', followed: false, fullName: 'dmitry', status: 'boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://uznayvse.ru/person/britney/britney02.jpg', followed: true, fullName: 'hi Kris', status: 'boss', location: { city: 'Kiev', country: 'Ukraine' } },
            { id: 3, photoUrl: 'https://uznayvse.ru/person/britney/britney02.jpg', followed: false, fullName: 'firsr post', status: 'boss', location: { city: 'Varshava', country: 'Poland' } },
            { id: 4, photoUrl: 'https://uznayvse.ru/person/britney/britney02.jpg', followed: true, fullName: 'Fiiiima', status: 'boss', location: { city: 'Minsk', country: 'Belarus' } }

        ])
    }


    return (
        <div>
            {
                props.users.map((user, index) => <div key={user.id}>

                    <span>
                        <div>
                            <img src={user.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => { props.unfollow(user.id) }}>unFollow</button>
                                : <button onClick={() => { props.follow(user.id) }}>Follow</button>
                                }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div><div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;
import React from "react";
import s from './Music.module.css';
import axios from 'axios';
import { getSuggestedQuery } from "@testing-library/react";






class Music extends React.Component {
    datas = {
        arrAllUsers: [],
        co: []
    }
    start = {
        currentPage: 1
    }
    give(currentPage) {
        if (currentPage <= 2) {

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${100}`)
                .then(response => {
                 
                    for (let i = 0; i <= response.data.items.length; i++) {

                        if (response.data.items[i] != undefined) {
                            this.datas.arrAllUsers.push(response.data.items[i]);
                        }
                    }
                    this.give(++currentPage);
                    //alert('invoked fn give');

                    return response.data;
                    alert('never');
                })
                .then(response => {
                   
                    
                })
        }
        else {
            alert('ready, started check photos');
            console.log(this.datas.arrAllUsers);
            for (let i = 0; i < this.datas.arrAllUsers.length; i++) {
                if(this.datas.arrAllUsers[i].photos.small != null) {
                    this.datas.co.push(this.datas.arrAllUsers[i])
                   
                }
            }
            console.log(this.datas.co);
            
        }
        
    }
    componentDidMount() {
      
        //this.give(1);
      
        //this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /*  this.props.toggleIsFetching(true);
         usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
             .then(data => {
                 this.props.toggleIsFetching(false);
                 this.props.setUsers(data.items);
                 this.props.setTotalUsersCount(data.totalCount);
             }); */ //перенесли в редьюсер в санку
    }
    render() {
        return (
            <div>
                <div><button onClick={() => this.give(this.start.currentPage)}>give me</button></div>
                Music
            </div>
        )
    }
}
export default Music

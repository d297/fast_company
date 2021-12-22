import React, {Component} from "react";
import {IterationUser} from "../iterationUsers";

export default class AddUser extends Component{
    render(){
        const userList = this.props.usersList;
        return userList.map(item => {
            
            return (
                <>
                    <IterationUser {...item} count={userList.length}/>
                </>
                
            )
        })
       
    }
        
}
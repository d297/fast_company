import React, {Component, useState} from "react";
import api from '../../api/';


const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users => {
            let list = users.filter(user => {
                return user._id !== userId
            });
            console.log(list);
            return list;
        }); 
    };
    const RenderPhrase = ({number}) => {
        const [countPeople, minusPeople] = useState(number); 
        let delTable = false;
        const counter = () => {
            minusPeople(countPeople - 1)
        }
        if(countPeople === 0){
            delTable = true;
        }
        
        
        const deleteUser = (id) => {
            document.getElementById(id).remove();
            counter();
            handleDelete(id);
        }

        const AddQualities = (props) => {
            const qualities = props.qualities;
            return qualities.map(quality => <span key={quality._id} className={'badge bg-' + quality.color}>{quality.name}</span>)
        }
  
        return (
            (!delTable) ? (
            <>                
                <span id="meetsPeople" className='badge bg-primary'>{[2,3,4].includes(countPeople)? countPeople + " человека тусанeт с тобой сегодня" : countPeople + " человек тусанут с тобой сегодня"} </span>              
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>                    
                        {users.map(user => {
                            const {_id, name, profession, qualities, completedMeetings, rate} = user;
                            /*console.log(_id, name, profession, qualities, completedMeetings, rate);*/ 
                            return (
                                <>
                                    <tr key={_id} id={_id}>                        
                                        <td>{name}</td>
                                        <td>{<AddQualities qualities={qualities} />}</td>
                                        <td>{profession.name}</td>                
                                        <td>{completedMeetings}</td>
                                        <td>{rate}/5</td>
                                        <td><button onClick={() => deleteUser(_id)} className="btn btn-danger">delete</button></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table> 
                
            </>) : <span id="meetsPeople" className='badge bg-danger'>НИКТО С ТОБОЙ НЕ ТУСАНЕТ </span>
        )        
    }    
    return <RenderPhrase number={users.length}/>
}

export default Users;
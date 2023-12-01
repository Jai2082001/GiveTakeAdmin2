import { useEffect, useState } from 'react'
import classes from './Forgot.module.css'
import { Table } from 'react-bootstrap';


const Forgot = () => {
    
    const [state, changeState] = useState([]);
    const [loading, changeLoading] = useState(false)
    const [reload, changeReload] = useState(0);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_FETCH_LINK}/forgotAdmin`).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            changeState(response)
        })
    }, [reload])

    const doneHandler = (id) => {
        changeLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_LINK}/doneHandler`, {
            headers: {
                doneid: id
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response);
            changeLoading(false)
            changeReload((prevState)=>{
                return prevState + 1
            })
        })
    }

    console.log(state);

    return (
        <div className={classes.forgotDiv}>
            {/* <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
            </Table> */}
            <Table>
                <thead>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Done</th>
                </thead>
                <tbody>
                {state.map((singleItem)=>{
                    return (
                        <tr>
                            <td>{singleItem.response.name}</td>
                            <td>{singleItem.response.password}</td>
                            <td>{singleItem.response.email}</td>
                            <td><button onClick={()=>{doneHandler(singleItem._id)}}>Done</button></td>
                        </tr>
                    )
                })}        
                </tbody>
            </Table>
            
        </div>
    )
}

export default Forgot
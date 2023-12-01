import classes from './AwardSingle.module.css'
import { useState } from 'react'
import {Spinner} from 'react-bootstrap'

const AwardSingle = ({singleItem}) => {
    
    const [loading, changeLoading] = useState(false);

    console.log(singleItem)

    const acceptHandler = (id) => {
        changeLoading(true)
        fetch(`${process.env.REACT_APP_FETCH_LINK}/awardAccept`, {
            headers: {
                user: id,
                award: singleItem._id
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            window.location.reload();
            changeLoading(false)
        })
    }

    const rejectHandler = (id) => {
        changeLoading(true)
        fetch(`${process.env.REACT_APP_FETCH_LINK}/awardReject`, {
            headers: {
                user: id,
                award: singleItem._id
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            window.location.reload()
            changeLoading(false)
        })
    }
    return (
        <tr>
            {loading && <Spinner animation='border'></Spinner>}
            {!loading && 
                <>
                    <td>{singleItem.name}</td>
                    <td>{singleItem.number}</td>
                    <td>{singleItem.email}</td>
                    <td>{singleItem.takerClaimArray.length}</td>
                    <td>{singleItem.tempClaimArray.length}</td>
                    <td><button onClick={()=>{acceptHandler(singleItem._id)}}>Accept</button></td>
                    <td><button onClick={()=>{rejectHandler(singleItem._id)}}>Reject</button></td>
                </>
            }
            
        </tr>
    )
}

export default AwardSingle
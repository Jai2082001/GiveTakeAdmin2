import classes from './Award.module.css'
import { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import AwardSingle from './AwardSingle/AwardSingle'

const Award = () => {
    
    const [awardReq, changeAward] = useState([])
    const [loading, changeLoading] = useState(false);
    
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_FETCH_LINK}/awardClaims`).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            changeAward(response)
        })
    }, [])

    
    return(
        <div className={classes.awardDiv}>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>User's Phone Number</th>
                    <th>User's Email</th>
                    <th>Different Takers</th>
                    <th>Award Takers</th>
                    <th>Accept</th>
                    <th>Reject</th>
                </tr>
            </thead>
            <tbody>
                {awardReq.map((singleItem)=>{
                  return (
                    <AwardSingle singleItem={singleItem}></AwardSingle>
                  )
                })}

            </tbody>
        </Table>
        </div>
    )
}

export default Award
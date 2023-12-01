import classes from './ListUser.module.css'
import {useEffect, useState} from 'react'
import {Table} from 'react-bootstrap'

const ListUser = () => {
    
    const [products, changeProducts] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_FETCH_LINK}/listUser`).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response);
            changeProducts(response)
        })
    }, [])
    console.log(products)

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Ward Number</th>
                <th>Gali Number</th>
                <th>State</th>
                <th>City</th>
                </tr>
            </thead>
            <tbody>
                {products.map((singleItem)=>{
                  return (
                    <tr>
                    <td>{singleItem.name}</td>
                    <td>{singleItem.number}</td>
                    <td>{singleItem.email}</td>
                    <td>{singleItem.gali}</td>
                    <td>{singleItem.ward}</td>
                    <td>{singleItem.state}</td>
                    <td>{singleItem.city}</td>
                </tr> 
                  )
                })}

            </tbody>
        </Table>
    )
}

export default ListUser
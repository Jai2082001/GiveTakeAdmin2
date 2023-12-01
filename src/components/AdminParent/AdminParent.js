import {Container, Row, Col} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Admin from '../Admin/Admin'
import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom'

const AdminParent = ({admin, changeAdmin}) => {
    
    const [page, changePage] = useState('')

    const history = useHistory()

    // useEffect(()=>{
    //   fetch(`${process.env.REACT_APP_FETCH_LINK}/checkAdmin`, {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     }, 
    //     credentials: 'include'
    //   }).then((response)=>{
    //       return response.json()
    //   }).then((response)=>{
    //       console.log(response)
    //       if(response.status === false){
    //           history.push('/login')
    //       }
    //   })
    // })
    
    if(admin){
      return (
        <>
        <article>Admin Panel</article>
        <Container fluid>
          <Row>
            <Col xs={'2'}>
              <Sidebar changePage={changePage}  page={page} ></Sidebar>
            </Col>
            <Col xs={'10'}>
              <Admin changePage={changePage}  page={page} ></Admin>
            </Col>
          </Row>
        </Container>
        </>        
    )
    }else{
      return(
      <Redirect to='/'></Redirect>

      )
    }
    
}

export default AdminParent
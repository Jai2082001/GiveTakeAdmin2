import classes from './PendingProduct.module.css'
import { Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const PendingProduct = () => {
    
    const [products, changeProduct] = useState([])

    const [reload, changeReload] = useState(0);

    const [loading, changeLoading] = useState(false)

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_FETCH_LINK}/pendingProduct`).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response);
            changeProduct(response)
        })
    }, [reload])

    const acceptHandler = (id) => {
        changeLoading(true)
        fetch(`${process.env.REACT_APP_FETCH_LINK}/acceptProduct`, {
            headers: {
                productid: id
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            changeLoading(false)
            changeReload((prevState)=>{
                return prevState + 1
            })
        })
    }

    const rejectHandler = (id) => {
        changeLoading(true)
        fetch(`${process.env.REACT_APP_FETCH_LINK}/rejectProduct`, {
            headers: {
                productid: id
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            changeLoading(false)
            changeReload((prevState)=>{
                return prevState + 1
            })
        })
    }

    console.log(products)

    return (
        <div className={classes.pendingDiv}>
            
            {!loading && 
            <>
                    {products.map((singleItem)=>{
                        return (
                        <div className={classes.childDiv}>
                            <div className={classes.imgDiv}>
                                {singleItem.image.map((image)=>{
                                return (
                                    <img src={image}></img>
                                )
                                })}
                            </div>    
                            <div className={classes.contentDiv}>
                                <h2>{singleItem.name}</h2>
                                <h5>{singleItem.desc}</h5>
                                <h5>{singleItem.address1} {singleItem.address2} {singleItem.city} {singleItem.state} </h5>
                                <div className={classes.btnDiv}>
                                    <button onClick={()=>{acceptHandler(singleItem._id)}}>Accept</button>
                                    <button onClick={()=>{rejectHandler(singleItem._id)}}>Reject</button>
                                </div>
                            </div>
                        </div>
                    )
                    })
                    }
                    {products.length === 0 && <div>
                        <p>No Pending Products</p>                        
                        </div>}
            </>}

            {loading && <Spinner animation='border'></Spinner>}
        </div>
    )
}

export default PendingProduct
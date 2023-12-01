import classes from './Admin.module.css'
import PendingProduct from '../PendingProduct/PendingProduct'
import ListUser from '../ListUser/ListUser'
import Award from '../Award/Award'
import Forgot from '../Forgot/Forgot'

const Admin = ({changePage, page}) => {


    return (
        <div className={classes.adminDiv}>
            {page === 'pendingPro' && 
            <div className={classes.pendingPro}>
                <PendingProduct></PendingProduct>
            </div>}
            {page === '' && 
            <div className={classes.pendingPro}>
                {"Give And Take"}
            </div>}
            {page === 'users' && <div className={classes.pendingPro}>
               <ListUser></ListUser> 
            </div>}
            {page === 'award' && 
            <div className={classes.pendingPro}>
                <Award></Award>
            </div>
            }
            {page === 'forgot' && 
            <div className={classes.pendingPro}>
                <Forgot></Forgot>
            </div>}
        </div>
    )
}

export default Admin

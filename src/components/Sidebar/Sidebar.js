import classes from './Sidebar.module.css'

const Sidebar = ({changePage, page}) => {
   return (
       <div className={classes.sidebar}>
            <button onClick={()=>{changePage('')}}>Home</button>
            <button onClick={()=>{changePage('pendingPro')}}>Pending Product Requests</button>
            <button onClick={()=>{changePage('users')}}>List of Users</button>
            <button onClick={()=>{changePage('award')}}>Award Claims</button>
            <button onClick={()=>{changePage('forgot')}}>Forgot List</button>
       </div>
   )
}

export default Sidebar
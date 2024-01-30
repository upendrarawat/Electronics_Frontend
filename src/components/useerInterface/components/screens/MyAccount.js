import Header from "../Header"
import { useStyles } from "./ProjectCss"
import { useMediaQuery } from "@mui/material"
import MyOffersComponent from "../MyOffersComponent"
import MyServiceComponent from "../MyServiceComponent"
import MyProfileComponent from "../MyProfileComponent"
function MyAccount() {
    const classes = useStyles()
    const matches=useMediaQuery('(max-width:800px)')
    const matches_sm=useMediaQuery('(max-width:400px)')
    return (
        <div className={classes.MyAccount_Root}>
            
                <Header />
            

            <div style={{ }}>
                <MyProfileComponent />
            </div>
            
            <div >
            < MyOffersComponent/>
            </div>

 <div>
< MyServiceComponent/> 
 </div> 
        </div>)
}

export default MyAccount
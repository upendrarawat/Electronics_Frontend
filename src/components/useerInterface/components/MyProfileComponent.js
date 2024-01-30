
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../../services/FetchNodeServices";
import User from "../../../assets/user.png";
import Address from "../../../assets/address.png";
import Box from "../../../assets/Box.png";
import { Grid} from "@mui/material";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useNavigate } from "react-router-dom";


export default function MyAProfileComponent({})
{  var navigate=useNavigate()
    const theme = useTheme();
    const matches = useMediaQuery('(max-width:800px)')
    const matches_sm = useMediaQuery('(max-width:400px)')
  
  return(
<div >
<div style={{color:'white' ,marginLeft:'6%',fontSize:'0.8rem',marginTop:matches? '':'2%'}}>
   My Account
</div>

{/*  */}

<div style={{width: matches ? '100%':'50%',marginLeft: matches ? '40% ': '13%',marginTop:matches ? '8%' : '1.5%' ,fontSize:matches ? 17:24, color:'white'}}>
        My Account
         </div>

{/*  */}
<Grid container spacing={3} style={{marginTop:matches?'':'0.5%'}}>
<Grid item xs={matches? '':1.4 } >

</Grid>



    <Grid item xs={3.2}>
        <div>
<div style={{border:'1px solid #333',borderColor:'#333',marginLeft:matches?'':'2%',marginTop:'8%',borderRadius:'10px',height: matches ?'9vh':'12vh',width: matches ? '355px':'',marginTop:matches ? '25%':''}} >
<div style={{color:'white',marginTop:matches? '8%':'6%',marginLeft:'24%' }}>
<b>My Profile</b>
<div style={{fontSize:'0.9rem'}}>
<h>Edit Your basic details</h>

</div>
    </div>
<div  style={{position: 'relative',bottom: '240px',float:'right',marginRight:matches? '40%': '40%',marginTop:matches ? '9%' :'10%'}} >
<img src={User} width="355"/>

</div>


</div>
</div>
</Grid>




<Grid item xs={matches ? 1:3.2} style={{ bottom:matches ? '380px':'',position:'relative',marginRight:matches?'70%':'',}}>
        <div>
<div style={{border:'1px solid #333',borderColor:'#333',marginLeft:matches?'30px':'2%',marginTop:'8%',borderRadius:'10px',height: matches ?'9vh':'12vh',width: matches ? '350px':'',marginTop:matches ? '25%':''}} >
<div style={{color:'white',marginTop:matches? '8%':'6%',marginLeft:'24%' }}>
<b>My Address</b>
<div style={{fontSize:'0.9rem'}}>
<h>Manage your save address</h>

</div>
    </div>
<div  style={{position: 'relative',bottom:matches ? '240px' : '240px',float:'right',marginRight:matches? '40%': '40%',marginTop:matches ? '9%' :'10%'}} >
<img src={Address} width="355"/>

</div>


</div>
</div>
</Grid>





<Grid item xs={matches ? 1:3.2} style={{ bottom:matches ? '760px':'',position:'relative',marginRight:matches?'70%':''}}>
        <div>
<div style={{border:'1px solid #333',borderColor:'#333',marginLeft:matches?'30px':'2%',marginTop:'8%',borderRadius:'10px',height: matches ?'9vh':'12vh',width: matches ? '350px':'',marginTop:matches ? '25%':''}} >
<div style={{color:'white',marginTop:matches? '8%':'6%',marginLeft:'24%' }}>
<b>My Orders</b>
<div style={{fontSize:'0.9rem'}}>
<h>view,track,cancel orders and buy again</h>

</div>
    </div>
<div  style={{position: 'relative',bottom:matches ? '240px' : '240px',float:'right',marginRight:matches? '40%': '40%',marginTop:matches ? '9%' :'10%'}} >
<img src={Box} width="355"/>

</div>


</div>
</div>
</Grid>








</Grid>







</div>
 )
 
  }
 
    
    

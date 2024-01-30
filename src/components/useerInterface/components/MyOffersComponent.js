

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../../services/FetchNodeServices";
import Device from "../../../assets/device.png";
import Reward from "../../../assets/reward.png";
import Wishlist from "../../../assets/wishlist.png";
import { Grid,Button,Avatar,Divider} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';





export default function MyOffersComponent({})
{  
    const theme = useTheme();
    const matches = useMediaQuery('(max-width:800px)')
    const matches_sm = useMediaQuery('(max-width:400px)')
  
  return(
<div style={{position: 'relative',bottom:matches?  '1140px':'350px'}}>

<Grid container spacing={3}>
<Grid item xs={matches? '':1.4}>

</Grid>



    <Grid item xs={3.2}>
        <div>
<div style={{border:'1px solid #333',borderColor:'#333',marginLeft:matches?'':'2%',marginTop:'8%',borderRadius:'10px',height: matches ?'9vh':'12vh',width: matches ? '355px':'',marginTop:matches ? '25%':''}} >
<div style={{color:'white',marginTop:matches? '8%':'6%',marginLeft:'24%' }}>
<b>My Privilege offers</b>
<div style={{fontSize:'0.9rem'}}>
<h>Exclusive offers and loyalty rewards for you</h>

</div>
    </div>
<div  style={{position: 'relative',bottom: '240px',float:'right',marginRight:matches? '40%': '40%',marginTop:matches ? '9%' :'10%'}} >
<img src={Reward} width="355"/>

</div>


</div>
</div>
</Grid>




<Grid item xs={matches ? 1:3.2} style={{ bottom:matches ? '380px':'',position:'relative',marginRight:matches?'70%':'',}}>
        <div>
<div style={{border:'1px solid #333',borderColor:'#333',marginLeft:matches?'30px':'2%',marginTop:'8%',borderRadius:'10px',height: matches ?'9vh':'12vh',width: matches ? '350px':'',marginTop:matches ? '25%':''}} >
<div style={{color:'white',marginTop:matches? '8%':'6%',marginLeft:'24%' }}>
<b>My Wishlist</b>
<div style={{fontSize:'0.9rem'}}>
<h>have a look at your favorite products</h>

</div>
    </div>
<div  style={{position: 'relative',bottom:matches ? '240px' : '240px',float:'right',marginRight:matches? '40%': '40%',marginTop:matches ? '9%' :'10%'}} >
<img src={Wishlist} width="355"/>

</div>


</div>
</div>
</Grid>





<Grid item xs={matches ? 1:3.2} style={{ bottom:matches ? '760px':'',position:'relative',marginRight:matches?'70%':''}}>
        <div>
<div style={{border:'1px solid #333',borderColor:'#333',marginLeft:matches?'30px':'2%',marginTop:'8%',borderRadius:'10px',height: matches ?'9vh':'12vh',width: matches ? '350px':'',marginTop:matches ? '25%':''}} >
<div style={{color:'white',marginTop:matches? '8%':'6%',marginLeft:'24%' }}>
<b>My Devices & plans</b>
<div style={{fontSize:'0.9rem'}}>
<h>Manage your device & plance</h>

</div>
    </div>
<div  style={{position: 'relative',bottom:matches ? '240px' : '240px',float:'right',marginRight:matches? '40%': '40%',marginTop:matches ? '9%' :'10%'}} >
<img src={Device} width="355"/>

</div>


</div>
</div>
</Grid>








</Grid>







</div>
 )
 
  }
 
    
    


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Support from "../../../assets/support.png";
import { Grid, Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

export default function MyServiceComponent({ }) {
  var navigate = useNavigate()
  const theme = useTheme();
  const matches = useMediaQuery('(max-width:800px)')
  const matches_sm = useMediaQuery('(max-width:400px)')

  const handleClick = () => {
    localStorage.clear()
    navigate('/home')
  }
  return (
    <div style={{ position: 'relative', bottom: matches ? '2280px' : '700px' }}>

      <Grid container spacing={3}>
        <Grid item xs={matches ? '' : 1.4}>

        </Grid>



        <Grid item xs={3.2}>
          <div>
            <div style={{ border: '1px solid #333', borderColor: '#333', marginLeft: matches ? '' : '2%', marginTop: '8%', borderRadius: '10px', height: matches ? '9vh' : '12vh', width: matches ? '355px' : '', marginTop: matches ? '25%' : '' }} >
              <div style={{ color: 'white', marginTop: matches ? '8%' : '6%', marginLeft: '24%' }}>
                <b>My service Requets</b>
                <div style={{ fontSize: matches ? '0.8rem' : '0.9rem' }}>
                  <h>Manage complaints,feedback,service requests</h>

                </div>
              </div>
              <div style={{ position: 'relative', bottom: matches ? '240px' : '260px', float: 'right', marginRight: matches ? '40%' : '40%', marginTop: matches ? '9%' : '10%' }} >
                <img src={Support} width="355" />

              </div>


            </div>
          </div>
        </Grid>


        <Grid item xs={3.2}>
          <div>
          <Button onClick={handleClick} fullWidth style={{color:"white"}}>
            <div style={{ border: '1px solid #333', borderColor: '#333', marginLeft: matches ? '' : '2%', marginTop: '8%', borderRadius: '10px', height: matches ? '9vh' : '12vh', width: matches ? '355px' : '700px', marginTop: matches ? '25%' : '' }} >
              <div style={{ color: 'white', marginTop: matches ? '8%' : '8%', marginLeft: '24%' }}>
                Logout myaccount
              <div style={{ fontSize: matches ? '0.8rem' : '0.9rem' ,color:'black' }}>
                <h></h>
              </div>
            </div>
            <div style={{ position: 'relative', bottom: matches ? '2px' : '60px', float: 'right', marginRight: matches ? '40%' : '80%', marginTop: matches ? '9%' : '10%' }} >
             <LogoutIcon/>
            </div>
          </div>
          </Button>
        </div>
      </Grid>







    </Grid>







</div >
 )

}




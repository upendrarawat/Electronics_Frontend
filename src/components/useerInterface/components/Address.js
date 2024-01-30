import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Grid,Button,Divider} from "@mui/material";
import { styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';
import {useState} from 'react'
import {Typography,FormGroup,FormControlLabel,Checkbox} from "@mui/material";

const options = {
  shouldForwardProp: (prop) => prop !== 'borderColor',
};
const outlinedSelectors = [
  '& .MuiOutlinedInput-notchedOutline',
  '&:hover .MuiOutlinedInput-notchedOutline',
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline',
];
const TextField = styled(
  MuiTextField,
  options,
)(({ borderColor }) => ({
  '& label.Mui-focused': {
    color: borderColor,
  },
  [outlinedSelectors.join(',')]: {
    borderWidth:0.1,
    borderColor:'white',
    borderRadius:'10px',
 TextFieldColor:'none'
 
  },
}));

export default function Address() {
  const [open, setOpen] = React.useState(false);
  const [categoryName,setCategoryName]=useState('')
  const [errors,setErrors]=useState({})
  const [active, setActive] = useState(false);
  const [actives, setActives] = useState(false);
  const [activate, setActivate] = useState(false);

  const handleClick = () => {
    setActive(!active );
  };
  const handleColor = () => {
    setActives(!actives);
  };

  const handleChange = () => {
    setActivate(!activate);
  };

  const handleError=(error,placeholder)=>{
    setErrors((prev)=>({...prev,[placeholder]:error}))
    
    }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const validation=()=>{
   var error=false  
 
   if(categoryName.length==0)
     {error=true
       
     handleError('Pls Input Enter Your  Name...','categoryName')
         
 }

    return error
  }
  


  const handleSubmit=async()=>{
var error=validation()
if(error==false)
{
  
}
  
  }



  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} style={{justifyContent:'center',}}>
       
        Address
      </Button>
      <Dialog 
      fullWidth
      maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

       
        <DialogContent style={{}}>
          <DialogContentText id="alert-dialog-description">
  
          <Grid container spacing={3} >
          <Divider style={{width:'90%', backgroundColor:'black',marginTop:'2%',marginLeft:'3%'}}/>
       
          <Grid  item xs={6} style={{border:' none transparent'}} >
          <Grid >

<h style={{stylewidth:' 300px', height:'16px', margin:' 0 128px 10px 7px',justifyContent:'start',fontSize:'16px', fontWeight:700,lineHeight:'normal' ,letterSpacing: 'normal',color:'black'}}>Content Details</h> 
</Grid>
        <Grid style={{color:'#191919' }}>
         <h style={{fontWeight:0.1,fontSize:13,marginLeft:'2%'}}>Full Name*</h> 
        </Grid>
        <TextField 
            value={categoryName}
             onFocus={()=>handleError(null,'categoryName')}
            error={errors.categoryName}
            helperText={errors.categoryName}
            onChange={(event)=>setCategoryName(event.target.value)} placeholder="Enter  Full Name" fullWidth/>
        </Grid>
      
        <Grid  item xs={6} style={{border:' none transparent'}} >
        <Grid style={{color:'black',marginTop:'6%'}}>
        <h style={{fontWeight:0.1,fontSize:13,marginLeft:'2%'}}>Mobile Number*</h>
        </Grid>
         
        <TextField  placeholder=" +91 Enter Your Number"    fullWidth style={{backgroundColor:'#f6f6f6',borderRadius:'10px'}} />
        </Grid>
      
        </Grid>



        
        <Grid container spacing={3} >
          <Grid  item xs={6} style={{border:' none transparent'}} >
          <Grid style={{marginTop:'6%'}}>

             <h style={{stylewidth:' 300px', height:'16px', margin:' 0 128px 10px 7px',justifyContent:'start',fontSize:'16px', fontWeight:700,lineHeight:'normal' ,letterSpacing: 'normal',color:'black'}}>Address Details</h> 
          </Grid>
        <Grid style={{color:'#191919'}}>
         <h style={{fontWeight:0.1,fontSize:13,marginLeft:'2%'}}>Address Nick Name*</h> 
        </Grid>
        <TextField placeholder="Enter Nick Name"  fullWidth style={{backgroundColor:'#f6f6f6',borderRadius:'10px'}} />
        </Grid>
      
        <Grid  item xs={6} style={{border:' none transparent'}} >
        <Grid style={{color:'black',marginTop:'12%'}}>
        <h style={{fontWeight:0.1,fontSize:13,marginLeft:'2%'}}>Pin Code*</h>
        </Grid>
         
        <TextField  placeholder="Pincode"    fullWidth style={{backgroundColor:'#f6f6f6',borderRadius:'10px'}} />
        </Grid>
      
        </Grid>



        
        <Grid container spacing={3}  style={{marginTop:'1%;'}}>
          <Grid  item xs={6} style={{border:' none transparent'}} >
        <Grid style={{color:'#191919' ,marginTop:'2%'}}>
         <h style={{fontWeight:0.1,fontSize:13,marginLeft:'2%'}}>Address (Flat no., Building, Company, Street)*</h> 
        </Grid>
        <TextField placeholder="Flat no./Building Name/Society"  fullWidth style={{backgroundColor:'#f6f6f6',borderRadius:'10px'}} />
        </Grid>
      
        <Grid  item xs={6} style={{border:' none transparent'}} >
        <Grid style={{color:'black',marginTop:'2%'}}>
        <h style={{fontWeight:0.1,fontSize:13,marginLeft:'2%'}}>Landmark*</h>
        </Grid>
         
        <TextField   placeholder="Landmark"   fullWidth style={{backgroundColor:'#f6f6f6',borderRadius:'10px'}} />
        </Grid>
      
        </Grid>



        <Grid container spacing={3} >
          <Grid  item xs={12} style={{border:' none transparent'}} >
        <Grid style={{color:'#191919',marginTop:'2%'}}>
         <h style={{fontWeight:0.1,fontSize:13,marginLeft:'2%'}}>Locality / Sector / Area*</h> 
        </Grid>
        <TextField error={true} placeholder="Locality / Sector / Area"  fullWidth style={{backgroundColor:'#f6f6f6',borderRadius:'10px',borderColor:'red'}} />
        </Grid>
      
      
      
        </Grid>




        <Grid container spacing={3}  style={{marginTop:'1%;'}}>
          <Grid  item xs={6} style={{border:' none transparent'}} >
        <Grid style={{color:'#191919',marginTop:'5%'}}>
         <h style={{fontWeight:0.1,fontSize:13,marginLeft:'2%'}}>State*</h> 
        </Grid>
        <TextField error={true} placeholder="State"  fullWidth style={{backgroundColor:'#f6f6f6',borderRadius:'10px'}} />
        </Grid>
      
        <Grid  item xs={6} style={{border:' none transparent'}} >
        <Grid style={{color:'black',marginTop:'5%'}}>
        <h style={{fontWeight:0.1,fontSize:13,marginLeft:'2%'}}>City*</h>
        </Grid>
         
        <TextField  error={true} placeholder="City"   fullWidth style={{backgroundColor:'#f6f6f6',borderRadius:'10px'}} />
        </Grid>
      
        </Grid>




        <Grid container spacing={3}  style={{marginTop:'1%;'}}>
          <Grid  item xs={6} >
        <Grid style={{color:'#191919',marginTop:'5%'}}>
         <h style={{fontWeight:0.1,fontSize:13,marginLeft:'2%'}}>Address Type*</h> 
        </Grid>

        
        </Grid>
        </Grid>



        <Grid container spacing={2} style={{marginTop:'1%',}}>
        <Grid item xs={1.5}>
        <div onClick={handleColor} style={{border:'1px solid black', borderColor: actives ? "#12DAA8" : "black",width:'75px',height:'40px',color:'black',borderRadius:'5px',justifyContent:'center',textAlign:'center'}}>
        <div style={{marginTop:'10%'}}>
        <b style={{marginTop:10,fontSize:'0.7rem'}} >Home</b> 
        </div>
        </div>
          </Grid>

          <Grid item xs={1.5}>
        <div onClick={handleChange} style={{border:'1px solid black',borderColor: activate ? "#12DAA8" : "black",width:'75px',height:'40px',color:'black',borderRadius:'5px',justifyContent:'center',textAlign:'center'}}>
        <div style={{marginTop:'15%',fontSize:'0.7rem'}}>
        <b style={{marginTop:10}} >Work</b> 
        </div>
        </div>
          </Grid>



          <Grid item xs={1.5}>
        <div  onClick={handleClick}   style={{border:'1px solid black', borderColor: active ? "#12DAA8" : "black",width:'75px',height:'40px',color:'black',borderRadius:'5px',justifyContent:'center',textAlign:'center'}}>
        <div style={{marginTop:'15%',fontSize:'0.7rem'}}>
       
        <b  
        style={{marginTop:10 }}>Other</b> 
        </div>
        </div>
          </Grid>




          </Grid>
       
       <Grid container spacing={2} style={{marginTop:'1%'}}>
        <Grid item xs={12}>
        <FormGroup style={{padding:0 }}>
            <FormControlLabel control={<Checkbox  sx={{paddingTop:0,paddingBottom:0.2,color: "#black",'&.Mui-checked': {color: "#12daa8"}}} />} label={<Typography style={{fontSize:'0.8rem' ,lineHeight:'1.8rem', textTransform: 'capitalize', color: '#626262',}}><b>Make This My Default Address</b></Typography>} />
           
          </FormGroup>
          </Grid>
          </Grid>


        <Grid container spacing={2} style={{marginTop:'1%',}}>
        <Grid item xs={12}>
        <div style={{width:'15%',borderRadius:'10px',marginLeft:'35%'}}><Button  fullWidth variant="contained" onClick={handleSubmit} style={{textTransform:'none',background: '#12daa8',color:"#191919",fontWeight:'bolder',fontSize:'14px',height:'5vh'}} >Save Address</Button></div>
          </Grid>
          </Grid>

       
 


          </DialogContentText>
        </DialogContent>
        {/* /////////////////////////////////////////////////////////////// */}


       
      
        


       
      </Dialog>
    </React.Fragment>
  );
}
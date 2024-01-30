import { Grid,Paper,Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState,} from "react";
import { postData } from "../services/FetchNodeServices";
import Swal from 'sweetalert2'
import Heading from './projectComponent/Heading';

import { DropzoneArea } from "material-ui-dropzone";
import categoryicon from '../../src/assets/category.png'

var useStyles = makeStyles({
root: {
        height: '99vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
       
    },
 box: {
        height: 430,
        width: '50%',
   
        marginTop: 10,
        padding: 30,
        borderRadius: 10
    }
})


export default function Banner() {
    const useStyle = useStyles()
  
    
    const [logo, setLogo] = useState({ bytes: '', filename: '' })
    const [getErrors, setErrors] = useState({})
  
    const [files,setFiles]=useState([])

 
    const handleReset = () => {
      
       
        setLogo({ bytes: '', filename: '' })
    }

    const handleError = (error, label) => {
        setErrors((prev) => ({ ...prev, [label]: error }))
    }

    const validation = () => {
        var error = false
        
      
        if (files.length === 0) {
            error = true
            handleError()
        }
        return error
    }

    function handleLogo(event) {
        //setLogo({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) })
    }


    const handleSumit = async () => {
        var error = validation()
        if (error === false) {
            var formData = new FormData()

          
            files.map((file,index)=>{
                formData.append('files'+index,file)
            })
            var response = await postData('banner/submit_banner', formData)
            if (response.status === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Brand added sucessfully!',
                    showConfirmButton: true
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Brand not added!',
                    showConfirmButton: true
                })
            }
        }
    }


    return (
        <div className={useStyle.root}>
         <Paper elevation={10} className={useStyle.box}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Heading  image={categoryicon} caption="New Banner" link='/dashboard/categorybanner' />
                    </Grid>
                    <Grid item xs={12} className={useStyle.center}>

<div style={{width:'100%'}}>
                    <DropzoneArea
  acceptedFiles={['image/*']}
  dropzoneText={"Drag and drop an image here or click"}
  onChange={(files) => setFiles(files)}
  filesLimit={20}
  fullWidth
 
/> 
</div>
                    </Grid>
                    <Grid item xs={12}>
                        <p style={{ color: '#FF0000', fontSize: '12.3px', marginLeft: '15px', marginTop: '0' }}>{getErrors.logo}</p>
                    </Grid>
                   



                    <Grid item xs={12} className={useStyle.center}>
                        <Button onClick={handleSumit} variant="contained" fullWidth style={{ background: '#004cef', padding: '% 0', fontWeight: 'z00' }}>Submit</Button>
                    </Grid>
                  
                </Grid>
                </Paper>
            </div>
      
    )
}
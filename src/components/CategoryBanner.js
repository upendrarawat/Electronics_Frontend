import { TextField, Grid, FormControl, InputLabel,Paper, Select, MenuItem, Button, Avatar, FormHelperText } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useState, useEffect } from "react"
import { getData, postData } from '../services/FetchNodeServices'
import categoryicon from '../assets/category.png'
import Heading from './projectComponent/Heading'
import Swal from "sweetalert2"
import { DropzoneArea } from "material-ui-dropzone";

const useStyles = makeStyles({
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
        padding: 50,
        borderRadius: 10
    }
})
function CategoryBanner() {
    const classes = useStyles()
    const [categoryId, setCategoryId] = useState('')
    const [categoryList, setCategoryList] = useState([])
    const [brandId, setBrandId] = useState('');
    const [brandList, setbrandList] = useState([])
    const [files,setFiles]=useState([])

    const [picture, setPicture] = useState({ bytes: '', filename: '' })
    const [errors, setErrors] = useState({})

    const fetchAllCategory = async () => {
        var response = await getData('category/display_all_category')
        setCategoryList(response.data)
    }

    useEffect(function () {
        fetchAllCategory()
    }, [])

    const fillCategoryItem = () => {
        return categoryList.map((item) => {
            return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
        })
    }

    const fetchBrandByCategory = async (cid) => {
        var response = await postData('brands/fetch_brands_by_category', {categoryid: cid })
        setbrandList(response.data)
    }

    const handleCategoryChange = (event) => {
        setCategoryId(event.target.value)
        fetchBrandByCategory(event.target.value)
    }

    const fillBrandItem = () => {
        return brandList.map((item) => {
            return <MenuItem value={item.brandid}>{item.brandname}</MenuItem>
        })
    }

    const handlePicture = (event) => {
      //  setPicture({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) })
    }

    const handleSubmit = async () => {
        var error = validation()
        if (error === false) {
            var formData = new FormData()
            files.map((file,index)=>{
                formData.append('files'+index,file)
            })
            formData.append('categoryid', categoryId)
            formData.append('brandid', brandId)

            var response = await postData('categorybanner/submit_category_banner', formData)
            if (response.status === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'CategoryBanner',
                    text: response.message,
                    toast: true
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'CategoryBanner',
                    text: response.message,
                    toast: true
                })
            }
        }
    }

    const validation = () => {
        var error = false
        if (categoryId.length === 0) {
            error = true
            handleError('*Please Select Category', 'categoryId')
        }
        if(brandId.length===0){
            error=true
            handleError('*Please Select Brand','brandId')
        }
       
        if(files.length === 0){
            error=true
            handleError('*Please Select Picture','picture')
        }
        return error
    }

    const handleError = (val, label) => {
        setErrors((prev)=>({ ...prev, [label]: val }))
        console.log(errors)
    }

    return (<div className={classes.root}>
        <Paper elevation={10} className={classes.box}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Heading caption="New CategoryBanner" image={categoryicon} link="/dashboard/category"></Heading>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth size="small" error={errors.categoryId}>
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={categoryId}
                            label="category"
                            onFocus={() => handleError('', 'categoryId')}
                            onChange={handleCategoryChange}
                        >
                            {fillCategoryItem()}
                        </Select>
                        <FormHelperText>{errors.categoryId}</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth size="small" error={errors.brandId}>
                        <InputLabel>Brand</InputLabel>
                        <Select
                            value={brandId}
                            label="Brand"
                            onFocus={()=>handleError('','brandId')}
                            onChange={(event) => setBrandId(event.target.value)}
                        >
                            {fillBrandItem()}
                        </Select>
                        <FormHelperText>{errors.brandId}</FormHelperText>
                    </FormControl>
                </Grid>

                <div style={{width:'100%'}}>
                    <DropzoneArea
  acceptedFiles={['image/*']}
  dropzoneText={"Drag and drop an image here or click"}
  onChange={(files) => setFiles(files)}
  filesLimit={7}
  fullWidth
 
/> 
</div>
             

                <Grid item xs={6}>
                    <FormControl fullWidth size="small" error={errors.picture}>
                       
                        <FormHelperText>{errors.picture}</FormHelperText>
                    </FormControl>
                </Grid>

               

                <Grid item xs={12}>
                    <Button onClick={handleSubmit} fullWidth variant="contained">Submit</Button>
                </Grid>

                

            </Grid>
        </Paper>
    </div>)
}

export default CategoryBanner
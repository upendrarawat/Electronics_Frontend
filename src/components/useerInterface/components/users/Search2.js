import { TextField,InputAdornment, withTheme } from "@mui/material";
import Search from '@mui/icons-material/Search';

export default function SearchComponent(props)
{
return(<div style={{background:'#ffffff',width:'97%',borderRadius:3,display:'flex',alignItems:'center'}}> 
    <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  variant="filled"
  placeholder="Searching for building Name and Area..."
  size="small"
  fullWidth
  InputProps={{
    disableUnderline:true,
    endAdornment: (
      <InputAdornment position="end" >
        <Search/>
      </InputAdornment>
    ),
  }}
/>
  </div>)
}
{/* <select id="country" name="country" style={{  width:' 10rem',padding: '12px 20px',margin: '8px 0',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox'}}> 
<option value="australia">Australia</option>
<option value="canada">Canada</option>
<option value="usa">USA</option>
</select>  */}
// width:' 100%',padding: '12px 20px',margin: '8px 0',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox'

import { postData,serverURL } from '../../../../services/FetchNodeServices'
import Swal from "sweetalert2";
import { useState } from "react";
import { useDispatch } from "react-redux";
export default function ShoppingComponent(props)
{    var dispatch=useDispatch()
    const [title,setTitle]=useState('')
    const [userName,setUserName]=useState('')
    const [middleName,setMiddleName]=useState('')
    const [lastName,setlastName]=useState('')
    const [number,setNumber]=useState(props.mobileno)
    const [email,setEmail]=useState('')
    const [pincode,setPincode]=useState('')
    const [address,setAddress]=useState('')
    const [errors,setErrors]=useState({})
    const handleError=(error,label)=>{
      setErrors((prev)=>({...prev,[label]:error}))
    }
    
   const validation=()=>{
    var error=false
    if(title.length==0)
    {
      error=true
      handleError('pls input Title','title')
    }
    if(userName.length==0)
    {
      error=true
      handleError('pls input Name','userName')
    }
    if(middleName.length==0)
    {
      error=true
      handleError('pls input middlename','middleName')
    }
    if(lastName.length==0)
    {
      error=true
      handleError('pls input Lastname','lastName')
    }
    if(number.length==0)
    {
      error=true
      handleError('pls input no.','number')
    }
    if(address.length==0)
    {
      error=true
      handleError('pls input Address','address')
    }
    if(email.length==0)
    {
      error=true
      handleError('pls input Email','email')
    }
    return error
   }

    const handleSubmit=async()=>{
        var error=validation()
        if(error==false)
        {
       var body={title:title,username:`${userName} ${middleName} ${lastName}`,mobileno:number,emailid:email,address:address,pincode:pincode}
       var response= await postData('useraccount/submit_useraccount',body)
      if(response.status)
      {
        Swal.fire({
          icon: 'success',
          title: 'Shipping Information',
          text: response.message,
          toast:true
        })
        dispatch({type:'ADD_USER',payload:[number,body]})
        localStorage.setItem("User",JSON.stringify(body))
      }
      else
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          toast:true
        })
      }
        }
      }
    return(<div style={{height:'100%',color:'#000'}}>
        <div style={{fontSize:15,display:'flex',justifyContent:'center'}}>
       <div style={{marginTop:'1%',marginLeft:'30%'}}> Continue Creating Account…</div>
        </div>
        <div style={{fontSize:17,marginLeft:'15%'}}>
       <b>ENTER SHIPPING INFORMATION</b>
        </div>
        <div style={{marginLeft:'15%',marginTop:'2%'}}>
        <div style={{width:'70%',height:'70vh',borderRadius:5,background:'black',padding:15,position:'relative',bottom:'10px',outline:'none'}}>
            <div style={{fontSize:13,padding:4,color:'white',position:'relative',bottom:'10px'}}>
               <b> Contact information</b>
            </div>
            <div style={{display:'flex',flexDirection:'row',marginLeft:'1%',position:'relative',bottom:'12px'}}>
          <div>
         <div  style={{fontSize:13,padding:4,color:'white'}}>
         <label>Title</label>
            </div>
            <div>
     
        
             <select id="country" name="country" error={errors.title}  onFocus={()=>handleError('','title')} helperText={errors.title} value={title} onChange={(event)=>setTitle(event.target.value)} size="small" style={{  width:' 18rem',padding: '12px 20px',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox',outline:'none'}}> 
<option value="Select">- Select -</option>
<option value="Mr">Mr</option>
<option value="Mrs">Mrs</option>
<option value="Miss">Miss</option>
<option value="Ms">Ms</option>
<option value="Dr">Dr</option>
<option value="Prof">Prof</option>
<option value="Others">Others</option>
</select>  
         </div>
         </div>
         <div style={{marginLeft:'5%'}}>
            <div  style={{fontSize:13,padding:4,color:'white'}} >
             First Name*
            </div>
             <input error={errors.userName} placeholder="Enter Your First Name*" onFocus={()=>handleError('','userName')} helperText={errors.userName}  size="small" value={userName} onChange={(event)=>setUserName(event.target.value)} style={{width:' 15rem',padding: '12px 20px',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox',outline:'none',}}/>       
         </div>
         </div>
        
        
         <div style={{display:'flex',flexDirection:'row',marginTop:'3%',marginLeft:'1%',position:'relative',bottom:'25px'}}>
         <div>
         <div  style={{fontSize:13,padding:4,color:'white'}}>
         <label>Middle Name</label>
            </div>
             <input error={errors.middleName}  placeholder="Enter Your Middle Name" onFocus={()=>handleError('','middleName')} helperText={errors.middleName}  size="small" value={middleName} onChange={(event)=>setMiddleName(event.target.value)} style={{width:' 15.4rem',padding: '12px 20px',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox',outline:'none'}}/>       
         </div>
         <div style={{marginLeft:'5%'}}>
            <div  style={{fontSize:13,padding:4,color:'white'}} >
            <label>Last Name*</label>
            </div>
             <input error={errors.lastName} placeholder="Enter Your Last Name*" onFocus={()=>handleError('','lastName')} helperText={errors.lastName}  size="small" value={lastName} onChange={(event)=>setlastName(event.target.value)} style={{width:'15rem',padding: '12px 20px',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox',marginLeft:'20%',float:'right',outline:'none'}}/>       
         </div>
         </div>

         <div style={{display:'flex',flexDirection:'row',marginTop:'3%',marginLeft:'1%',position:'relative',bottom:'38px'}}>
         <div>
         <div  style={{fontSize:13,padding:4,color:'white',}}>
               <label>Email Id</label>
            </div>
             <input error={errors.email} placeholder="Enter Your Email Id"  onFocus={()=>handleError('','email')} helperText={errors.email}  value={email} onChange={(event)=>setEmail(event.target.value)} size="small"  style={{width:' 15rem',padding: '12px 20px',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox',outline:'none'}}/>       
         </div>
         <div style={{marginLeft:'6%'}}>
            <div  style={{fontSize:13,padding:4,color:'white'}} >
             <lable>Mobile Number*</lable>
            </div>
             <input value={number} placeholder="Enter Your Mobile Number*" error={errors.number}  onFocus={()=>handleError('','number')} helperText={errors.number}  size="small" onChange={(event)=>setNumber(event.target.value)}  style={{width:'15rem',padding: '12px 20px',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox',float:'right',outline:'none'}}/>       
         </div>
         </div>
         <div style={{marginTop:'5%',fontSize:14,color:'white',position:'relative',bottom:'50px'}}>
         <b>Enter Shipping Address:</b>
         </div>
         <div style={{marginTop:'4%',fontSize:14,marginLeft:'1%',position:'relative',bottom:'68px'}}>
         <div style={{display:'flex',flexDirection:'row'}}>
          <div>
         <div  style={{fontSize:13,padding:4,color:'white'}}>
            <label>First  Address* </label> 
            </div>
            <div>
             <input  error={errors.address} placeholder="Enter Your First Address* "   onFocus={()=>handleError('','address')} helperText={errors.address} value={address} onChange={(event)=>setAddress(event.target.value)} size="small"  style={{width:' 15rem',padding: '12px 20px',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox',outline:'none'}}/>       
         </div>
         </div>
         <div style={{marginLeft:'5%',marginLeft:'6%'}}>
            <div  style={{fontSize:13,padding:4,color:'white'}} >
             <label>Second Address </label>
            </div>
             <input size="small" placeholder="Enter Your Second Address "  style={{width:'15rem',padding: '12px 20px',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox',float:'right',outline:'none'}}/>       
         </div>
         </div>   
          <div style={{display:'flex',flexDirection:'row',marginTop:'2%',position:'relative',bottom:'8px'}}>
          <div>
         <div  style={{fontSize:13,padding:4,color:'white'}}>
              State 
            </div>
            <div>
            <select id="country" name="country" style={{  width:' 10rem',padding: '12px 20px',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox',outline:'none'}}> 
            <option value="Select">- Select -</option>
<option value="MP">MP</option>


</select>      
         </div>
         </div>
         <div style={{marginLeft:'5%'}}>
            <div  style={{fontSize:13,padding:4,color:'white'}} >
             City
            </div>
            <select id="country" name="country" style={{  width:' 10rem',padding: '12px 20px',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox',outline:'none'}}> 
<option value="Select">- Select -</option>
<option value="Bhopal">Bhopal</option>
<option value="Indore">Indore</option>
<option value="Gwalior">Gwalior</option>
<option value="Shivpuri">Shivpuri</option>
<option value="Jabalpur">Jabalpur</option>
<option value="Morena">Morena</option>
</select>      
         </div>
         <div style={{marginLeft:'5%'}}>
            <div  style={{fontSize:13,padding:4,color:'white'}} >
             Pincode*
            </div>
             <input error={errors.pincode}  placeholder="Enter Your Pincode*" onFocus={()=>handleError('','pincode')} helperText={errors.pincode}  size="small" value={pincode} onChange={(event)=>setPincode(event.target.value)} style={{  width:' 10rem',padding: '12px 20px',display:'inlineBlock', border:'1px solid #ccc',borderRadius:'4px',boxSizing:' borderBox',outline:'none'}}/>       
         </div>
         
         </div>
         <div onClick={handleSubmit} style={{marginLeft:'20%',border:'1px solid #12DAA8',cursor:'pointer',width:'50%',borderRadius:6,padding:2,marginTop:'3%',display:'flex',justifyContent:'center',background:'#12DAA8',fontSize:14,}}>
                 <div  style={{padding:6}}><b>Submit Your Shipping information</b></div>
                </div>
         </div>
        </div>
     
        </div>
     
       
    </div>)
}
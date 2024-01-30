import {FormControl} from "@mui/material";
import * as React from 'react';
import box1 from "../../../assets/box1.png";
import FormControlLabel from '@mui/material/FormControlLabel';
import { postData, serverURL } from "../../../services/FetchNodeServices";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import useRazorpay from "react-razorpay";
import LoginComponent from "./users/LoginComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function SmallScreenCartComponent(props)
{ var data=props.productCart
  var user=useSelector(state=>state.user)
  var userData=Object.values(user)[0]
  const [Razorpay] = useRazorpay();
  const [status,setStatus]=React.useState(false)
  var dispatch=useDispatch()
var navigate=useNavigate()
  var originalAmount=data.reduce((p1,p2)=>{
    return p1+(p2.price*p2.qty)

   },0)

   var actualAmount=data.reduce((p1,p2)=>{
    return p1+(p2.offerprice*p2.qty)

   },0)
   var yousave=originalAmount-actualAmount
  
    const options = {
      key: "rzp_test_GQ6XaPC6gMPNwH", // Enter the Key ID generated from the Dashboard
      amount: actualAmount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Electronics Bazzar",
      description: "Test Transaction",
      image:  `${serverURL}/images/croma.webp`,
      
      handler: async function (response) {
        alert(response.razorpay_payment_id);
        
        alert(response.razorpay_signature);
        var body={cart:data,user:userData,paymentstatus:response.razorpay_payment_id}
        var result=await postData('userinterface/order_submit',body)
        if(result.status)
        {alert('order submitted')}
        else
        {
          alert('fail to submit order')
        }
      },
      prefill: {
        name: userData?.username,
        email: userData?.email,
        contact:userData?.mobileno ,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
  

    const handlePayment = async (params) => {

      const rzp1 = new Razorpay(options);

  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
   
    alert(response.error.metadata.payment_id);
  });

  rzp1.open();
    }

  
   const handleClick=()=>{
    var userData=JSON.parse(localStorage.getItem('User'))
    if(userData)
    {
      dispatch({type:'ADD_USER',payload:[userData.mobileno,userData]})
    navigate('/useraccount',{state:{mobileno:userData?.mobileno,user:[userData],status:true}})
    }
    else
    {
    setStatus(true)
    }

   }
  

    return(<div>
             <div style={{width:'82%',marginTop:'45%'}}>
             {/* <div style={{padding:5,border:'1px solid #fff',width:'100%',borderRadius:8,background:'#fff'}}>
             <span style={{padding:4,fontSize:17}}><b>Delivery option for </b><span style={{color:'green'}}><b>400049</b></span> <span style={{color:'green',width:'10%',marginLeft:'20%',borderBottom:"1px solid 'green'"}}><b>Change</b></span></span>
             <div style={{marginTop:'1%'}}>
             <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
               <div style={{color:'black'}} >
<FormControlLabel label={<img src={box1} style={{width:'30px',marginTop:'30%'}}   />}   value="Male" control={<Radio  style={{color:'#12DAA8'}}/>}/><b style={{fontSize:'0.8rem'}}>Express Delivery by today</b>
</div>

      </RadioGroup>
    </FormControl>
             </div>
             </div>
           */}

                <div style={{marginTop:'5%',padding:5,border:'1px solid #fff',width:'300px',height:'260px',borderRadius:8,background:'#fff',float:'right'}}>
             <span style={{padding:4,fontSize:'1.2rem',color:'#333',}}><b style={{marginTop:'30%'}}>Order Summary ( 4 items ) </b></span>
             <div style={{marginTop:'4%',display:'flex',flexDirection:'row',width:'100%',marginLeft:'2%'}}>
             <span style={{fontSize:"1vw"}}>Original Price</span>
             <span style={{fontSize:"1vw",marginLeft:'46%'}}>₹{originalAmount}</span>
             </div>
             <div style={{marginTop:'4%',display:'flex',flexDirection:'row',width:'100%',marginLeft:'2%'}}>
            <span style={{fontSize:"1vw",}}>Amount Saved</span><span style={{fontSize:"1vw",marginLeft:'44%'}}>₹{yousave}</span>
             </div>
          
             <div style={{marginTop:'4%',display:'flex',flexDirection:'row',width:'100%',marginLeft:'2%'}}>
            <span style={{fontSize:"1vw"}}>Delivery</span><span style={{fontSize:"1vw",marginLeft:'60%'}}><s>₹40.00</s></span>
             </div>
             <div style={{marginTop:'4%',display:'flex',flexDirection:'row',width:'100%',marginLeft:'2%'}}>
             <span style={{fontSize:"1vw"}}>Total</span><span style={{fontSize:"1vw",marginLeft:'68%'}}>₹{actualAmount}</span>

             </div>
             <div  style={{border:'1px solid #12DAA8',width:'98%',borderRadius:6,padding:2,marginTop:'5%',display:'flex',justifyContent:'center',background:'#12DAA8',color:'#103749',fontSize:10}}>
                 {props.title=="Checkout"?
                 <div onClick={handleClick} style={{padding:6,cursor:'pointer'}}><b>{props.title} </b></div>
                 :
                 <div onClick={handlePayment} style={{padding:6,cursor:'pointer'}}><b>{props.title} </b></div>}
                </div>
             </div>
             </div> 
             <LoginComponent status={status} setStatus={setStatus}/>
             </div>)
}
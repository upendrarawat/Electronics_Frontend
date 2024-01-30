import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { serverURL } from "../../../services/FetchNodeServices";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function HighlightsComponent(){
    const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.down('md'));
      const matchesSearch = useMediaQuery(theme.breakpoints.down('sm'));

    var settings1 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: matches?2.5:3,
        slidesToScroll: 1,
        arrows:matches?false:true,
        rows:1,      
      };

      var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:matches?2.5:3,
        slidesToScroll: 1,
        arrows:matches?false:true,
        rows:1,     
      };

      var data1 = ['h1.webp','h15.gif','h3.webp','h4.webp','h5.webp','h6.webp']
      const highlightsSlider1=()=>{
        return data1.map((item)=>{
            return(<div>
                <div style={{margin:'1.5%'}}>
                <img src={`${serverURL}/images/${item}`} width='100%' style={{borderRadius:'5%'}} />
                </div>
            </div>)
        })
      }

      var data2 = ['h8.webp','h9.webp','h10.webp','h11.webp','h12.webp','h13.webp']
      const highlightsSlider2=()=>{
        return data2.map((item)=>{
            return(<div>
                <div style={{margin:'1.5%'}}>
                <img src={`${serverURL}/images/${item}`} width='100%' style={{borderRadius:'5%',}} />
                </div>
            </div>)
        })
      }

    return (<div style={{width:matches?'100%':'70%',marginLeft:matches?'0%':'14%',marginTop:'2%'}}>
              <div style={{color:'#fff',fontSize:matches?'3vw':'1.5vw',marginBottom:7}}>Highlights</div>
                <Slider {...settings1}>
                    {highlightsSlider1()}                 
                </Slider>
                <Slider {...settings2}>
                    {highlightsSlider2()}                  
                </Slider>
    </div>)
}




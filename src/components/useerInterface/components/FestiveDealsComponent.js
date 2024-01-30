import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { serverURL } from "../../../services/FetchNodeServices";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function FestiveDealsComponent(){
    const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.down('md'));

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: matches?4.5:4,
        slidesToScroll: 3,
        arrows:matches?false:true
      };

      var data = [{id:0,icon:'g1.webp'},
                  {id:1,icon:'g2.webp'},
                  {id:2,icon:'g3.webp'},
                  {id:3,icon:'g4.webp'},
                  {id:4,icon:'g5.webp'},
                  {id:5,icon:'g6.webp'},
                  {id:6,icon:'g7.webp'},
                   ]

      const festiveDealsSlider=()=>{
        return data.map((item)=>{
            return(<div>
                <img src={`${serverURL}/images/${item.icon}`} style={{width:'95%',padding:'3%'}}/>               
            </div>)
        })
      }

    return (<div style={{width:matches?'100%':'80%',marginLeft:matches?'0%':'0%',marginTop:'3%'}}>
              <div style={{color:'#fff',fontSize:matches?'3vw':'1.5vw'}}>Festive Fiesta Deals</div>
                <Slider {...settings}>
                    {festiveDealsSlider()}
                </Slider>
    </div>)
}



import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { useRouter } from "next/router";
import Link from "next/link";
import { convertSlug } from "../untils";
export interface DataSlider {
    image?:string,
    filmName?:string
    id?:number,
}
interface DataSlide {
    dataSlide?:DataSlider[],
    settingSlide?:object,
    title?:string,
    post?:string,
    tooltip?:string,
    icon?:any
}
const Slide = (props:DataSlide) => {
    const { dataSlide, settingSlide, title, post, tooltip, icon } = props;
    const router = useRouter();
    return(
        <div>
            <h2 className="tooltip">{title}
                    <Link href={`${post}`}>
                        <span className="tooltiptext">{tooltip} {icon}</span>
                    </Link>
            </h2>
            <div className="container">
                    <Slider {...settingSlide}>
                        {dataSlide?.map((item:any,index) => {
                            if(item.poster_path === null){
                                return
                                    
                            }
                            
                            return (
                                <div className="movieItem" key={index} onClick = {() => {
                                        router.push({
                                            pathname: `/movie/[slugMovie]`,
                                            query:{"slugMovie":convertSlug(item.filmName),id:item.id}
                                        })
                                }} >
                                        <img src={item.image} className = "img"></img>
                                </div>
                        )
                        })}
                    </Slider>
            </div>
            <style jsx>{`
                    .container{
                        height:100%;
                        width:90%;
                        margin-left:75px;
                    }
                    .tooltip{
                        color:white;
                        margin-left:93px;
                        margin-top:80px;
                        cursor:pointer;
                    }
                    .tooltiptext{
                        font-size:15px;
                        margin-top:8px;
                        color:grey;
                        display:inline-block;
                        position:relative;
                    }
                    .tooltip .tooltiptext {
                        visibility: hidden;
                        width: 120px;
                        padding-left:30px;
                         /* Position the tooltip */
                        position: absolute;
                        z-index: 1;
                    }
                    .tooltip:hover .tooltiptext {
                        visibility: visible;
                    }
                    .img{
                        height:100%;
                        width:100%;
                        position:relative;
                        padding: 10px;
                        border-radius:10px;
                    }
                    .movieItem{
                        height:400px;
                        cursor:pointer;
                        outline:none;
                    }
                    .img:active{
                        border:2px solid grey;
                    }
                    .movieItem:hover  {
                        animation:zom 0.5s ease 1 forwards;
                        height:400px;
                        width:400px;
                        border:2px solid white;
                    }
                    @keyframes zom {
                        50%{
                            transform:scale(1,2)
                        }
                        100%{
                            transform:scale(1)
                        }
                    }
            `}</style>
        </div>
    )
}
export default Slide;
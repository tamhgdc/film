// import HomePage, { getServerSideProps as HomePageGetServerSideProps } from "./home-page"
// export const getServerSideProps = HomePageGetServerSideProps;
import React, { useState, useEffect } from "react"
import {GetServerSideProps} from "next"
import getPopularMovie from "../src/service/getPopularMovie";
import getMovieTheater from "../src/service/getMovieTheater";
import getTopMovie from "../src/service/getTopMovie";
import getCartoonMovie from "../src/service/getCartoonMovie";
import getNowPlaying from "../src/service/getNowPlaying";
import Slide from "../src/containers/Slide"
import { VscTriangleRight } from 'react-icons/vsc'
type Props = {
  dataPopularMovie?:Array<object>,
  dataTopMovie?:Array<object>,
  dataMovieTheater?:Array<object>,
  dataNowPlaying?:Array<object>,
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const resPopularMovie =await getPopularMovie.getAll() 
  const resMovieTheater = await getMovieTheater.getAll(1)
  const resTopMovie = await getTopMovie.getAll()
  const resNowPlaying = await getNowPlaying.getAll()
  return{
      props: { 
            dataPopularMovie:resPopularMovie.data.results,
            dataTopMovie:resTopMovie.data.results,
            dataMovieTheater:resMovieTheater.data.results,
            dataNowPlaying:resNowPlaying.data.results
      }
  }
}
const Home = ({ dataPopularMovie, dataNowPlaying, dataMovieTheater, dataTopMovie} : Props) => {
  const [dataCartoonMovie, setDataCartoonMovie] = useState<any>();
  useEffect(() => {
    getCartoonMovie(1)
      .then(res => {
          setDataCartoonMovie(res.data.results)
      })
  },[])
  return(
    <div className="container">
      <Slide
          dataSlide = {dataTopMovie?.map((item:any) => {
                return {
                    image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                    id:item.id,
                    filmName:item.original_title,
                }
          })}
          settingSlide = {{
              className: "center",
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              pauseOnHover: true,
              speed: 1000,
              centerMode:true,
              slidesPerRow: 1
          }}
      />
      <Slide 
          dataSlide = {dataNowPlaying?.map((item:any) => {
                return {
                    image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                    filmName:item.original_title,
                    id:item.id
                }
          })}
          title = "Trực Tiếp"
          post = "/"
          settingSlide = {{
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 1
          }}
          tooltip = "Xem tất cả"
          icon = {<VscTriangleRight style={{
            "position":"relative",
            "left":"80px",
            "bottom":"15px"
          }}/>}   
      />
      <Slide 
          dataSlide = {dataPopularMovie?.map((item:any) => {
                return {
                    image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                    filmName:item.original_title,
                    id:item.id
                }
          })}
          title = "Phim Đề Xuất"
          post = "/"
          settingSlide = {{
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 1
          }}
          tooltip = "Xem tất cả"
          icon = {<VscTriangleRight style={{
            "position":"relative",
            "left":"80px",
            "bottom":"15px"
          }}/>}
      />
      <Slide 
          dataSlide = {dataMovieTheater?.map((item:any) => {
                return {
                    image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                    filmName:item.original_title,
                    id:item.id
                }
          })}
          title = "Phim Chiếu Rạp"
          post = "/movie-theater"
          settingSlide = {{
              infinite: true,
              speed: 500,
              slidesToShow: 6,
              slidesToScroll: 1
          }}
          tooltip = "Xem tất cả"
          icon = {<VscTriangleRight style={{
            "position":"relative",
            "left":"80px",
            "bottom":"15px"
          }}/>}
      />
      <Slide 
          dataSlide = {dataCartoonMovie?.map((item:any) => {
                return {
                    image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                    filmName:item.original_title,
                    id:item.id
                }
          })}
          title = "Phim Hoạt Hình"
          post = "/cartoon"
          settingSlide = {{
              infinite: true,
              speed: 500,
              slidesToShow: 6,
              slidesToScroll: 1
          }}
          tooltip = "Xem tất cả"
          icon = {<VscTriangleRight style={{
            "position":"relative",
            "left":"80px",
            "bottom":"15px"
          }}/>}
      />
               {/* <LoadingMoreMovie /> */}
              <style jsx>{`
                    .container{
                        margin-top:50px;
                    }
              `}</style>
          </div>
  )
}

export default Home
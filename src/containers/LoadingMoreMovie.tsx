import React, {useCallback, useEffect, useState} from "react";
import { useRouter } from "next/router";
import InfiniteScroll from 'react-infinite-scroll-component';
import { convertSlug } from "../untils";
type Props = {
    title?:string,
    fetchData :() => void;
    items?:Array<object>,
    hasMore?:boolean,
}
const LoadingMoreMovie = ({ title, fetchData, items, hasMore }:Props) => {
    const router = useRouter()
    return(
        <div className="container">
            <h2 className="title">{title}</h2>
            <InfiniteScroll
                    dataLength={Number(items?.length)}
                    next = {fetchData}
                    hasMore = {Boolean(hasMore)}
                    loader={<h4>Loading...</h4>}
            >
                    <div className="container">
                        <div className="row m-6">
                            {items?.map((item:any,index:any) => {
                                if(!item.poster_path){
                                    return
                                }
                            return(
                                <img key={index} src = {`https://image.tmdb.org/t/p/w500`+item.poster_path} className = "img" onClick={() => {
                                        router.push({
                                            pathname: `/movie/[slugMovie]`,
                                            query:{"slugMovie":convertSlug(item.original_title),id:item.id}
                                        })
                                }}/>
                            )
                            })}
                        </div>
                    </div>
            </InfiniteScroll>
            <style jsx>{`
                    .container{
                        margin-left:20px;
                        margin-top:10px;
                    }
                    .title{
                        color:white;
                        margin-top:80px;
                        margin-left:70px;
                        cursor:pointer;
                    }
                    .img{
                        height:350px;
                        width:282px;
                        padding-left: 25px;
                        margin-top:20px;
                        border-radius:10px;
                        cursor:pointer;
                    }
                    .img:hover  {
                        animation:zom 0.5s ease 1 forwards;
                        height:350px;
                    }
                    @keyframes zom {
                        50%{
                            transform:scale(1,2)
                        }
                        {/* 100%{
                            transform:scale(1)
                         } */}
                    }
            `}</style>
        </div>
    )
}
export default LoadingMoreMovie;
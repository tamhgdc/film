/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState,useCallback } from "react";    
import { useRouter } from "next/router"
import getDetailMovie from "../../src/service/getDetailMovie";
import Video from "../../src/containers/video";
import LoadingMoreMovie from "../../src/containers/LoadingMoreMovie";
import getRecommendMovie from "../../src/service/getRecommendMovie";
const name = () => {
    const router = useRouter()
    const del = router.query
    const [filmInformation, setFilmInformation] = useState<any>({})
    const [items, setItems] = useState<any>([])
    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    useEffect(() => {
        if(del.id){
            getDetailMovie.getAll(del.id)
                .then(res => {
                    setFilmInformation(res.data)
                })
            getRecommendMovie.getAll(del.id,1)
                .then(res => {
                    if(res?.data?.results && res.data.results.length > 0){
                        setItems(res.data.results)
                        setPage(2)
                }
                })
        }
    },[del.id])
    const fetchData = useCallback(() => {
        getRecommendMovie.getAll(del.id,page).then(res => {
            if(!page && !items){
                    return
            }
            setItems([...items,...res.data.results])
        })
        if(items.length === 0 ){ 
            setHasMore(false)
        }
        setPage(page+1)
}, [page, items,del.id]);
    return(
        <div className = "container">
            <div className = "container-left">
                <Video id = {Number(del.id)} />
            </div>
            <div className = "container-right">
                
                <h3 className = "nameFilm">Tên Phim: {filmInformation.original_title}</h3>
                <p className = "country">Quốc Gia: {filmInformation.original_language}</p>
                <p className = "review">Tóm tắt: {filmInformation.overview}</p>
                <p className = "mark">Điểm: {filmInformation.vote_average}</p>
                <p className = "date">Ngày Chiếu: {filmInformation.release_date}</p>
                <p className = "view">View: {filmInformation.vote_count}</p>
            </div>
            <LoadingMoreMovie 
                title="Tương Tự"
                fetchData = {fetchData}
                hasMore = {hasMore}
                items = {items}
            />
            <style jsx>{`
                .container-left,.container-right{
                    display: inline-block;
                }
                .container-left{
                    margin-left:200px;
                    position: relative;
                    top:50px;
                }
                .container-right{
                    margin-left:30px;
                    margin-top:90px;
                }
                .nameFilm,.review{
                    color: white;
                    font-size: 20x;
                    width: 500px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 25px;
                    -webkit-line-clamp: 3;
                    height: 75px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                }
                .country,.mark,.date,.view{
                    color: grey;
                    font-size: 16px;
                }
                {/* .review{
                    width: 500px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 25px;
                    -webkit-line-clamp: 3;
                    height: 75px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                } */}
            `}</style>
        </div>
    )

}
export default name;
import React, { useEffect, useState, useCallback } from "react";    
import { useRouter } from "next/router"
import getSearchMovieByName from "../../src/service/getSearchMovieByName";
import LoadingMoreMovie from "../../src/containers/LoadingMoreMovie";
const search = () => {
    const router = useRouter()
    const txt = router.query
    const [items, setItems] = useState<any[]>([])
    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    useEffect(() => {
        getSearchMovieByName(txt.q,1)
            .then(res => {
                if(res?.data?.results && res.data.results.length > 0){
                        setItems(res.data.results)
                        setPage(2)
                }
            })
    },[page, txt.q])
    const fetchData = useCallback(() => {
        getSearchMovieByName(txt.q,page).then(res => {
        if(!page && !items){
            return
        }
        setItems([...items,...res.data.results])
    })
    if(items.length === 0 ){ 
        setHasMore(false)
    }
        setPage(page+1)
}, [page, items]);
    
    return(
        <div className="container">
            <h2 className="title">Kết quả tìm kiếm cho "{txt.q}"</h2>
            <LoadingMoreMovie
                fetchData = {fetchData}
                hasMore = {hasMore}
                items = {items}
            />
            <style jsx>{`
                .container{
                    margin-left:25px;
                    margin-top:10px;
                }
                .title{
                    color:white;
                    margin-top:100px;
                    margin-left:65px;
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
                .title{
                    color:white;
                }
            `}</style>
        </div>
    )
}
export default search;
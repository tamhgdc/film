import React, { useState, useEffect, useCallback } from "react"
import LoadingMoreMovie from "../src/containers/LoadingMoreMovie"
import getCartoonMovie from "../src/service/getCartoonMovie"
const CarToon = () => {
      const [items, setItems] = useState<any>([])
      const [page, setPage] = useState(0)
      const [hasMore, setHasMore] = useState(true)
      useEffect(() => {
            getCartoonMovie(1)
            .then(res => {
                  if(res?.data?.results && res.data.results.length > 0){
                        setItems(res.data.results)
                        setPage(2)
                  }
            })
      },[])
      const fetchData = useCallback(() => {
            getCartoonMovie(page).then(res => {
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
            <div className="main">
                  <LoadingMoreMovie 
                        title="Phim Hoạt Hình"
                        fetchData = {fetchData}
                        hasMore = {hasMore}
                        items = {items}
                  />
            </div>
      )
}
export default CarToon;
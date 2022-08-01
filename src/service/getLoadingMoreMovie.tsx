import instance from "../axiosClient";

const getLoadingMoreMovie = {
    getAll(page:any){
        const url = `popular?language=en-US&page=${page}`
        return instance.get(url)
    }
}
export default getLoadingMoreMovie;
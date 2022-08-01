import instance from "../axiosClient";

const getDetailMovie = {
    getAll(id:any){
        const url = `${id}?language=en-US`
        return instance.get(url)
    }
}
export default getDetailMovie
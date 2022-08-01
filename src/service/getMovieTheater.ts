import instance from "../axiosClient";

const getMovieTheater = {
     getAll(page:any){
          const url = `upcoming?language=en-US&page=${page}`
          return instance.get(url)
     }
}
export default getMovieTheater;
import instance from "../axiosClient";

const getTopMovie = {
     getAll(){
          const url = `top_rated?language=en-US&page=2`
          return instance.get(url)
     }
}
export default getTopMovie
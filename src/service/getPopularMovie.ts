import instance from "../axiosClient";

const getPopularMovie = {
     getAll(){
          const url = `popular?language=en-US&page=2`
          return instance.get(url)
     }
}
export default getPopularMovie
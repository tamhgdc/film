import instance from "../axiosClient";

const getNowPlaying = {
    getAll(){
        const url = `now_playing?language=en-US&page=2`
        return instance.get(url)
    }
}
export default getNowPlaying
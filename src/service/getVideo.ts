import instance from "../axiosClient";

const getVideo = {
    getAll(id:number){
        const url = `${id}/videos?language=en-US`
        return instance.get(url)
    }
}
export default getVideo;
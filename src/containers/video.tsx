import React,{ useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import getVideo from '../service/getVideo';
type Props = {
    id?:number
}
const Video = ({ id }: Props) => {
    const [key, setKey] = useState<any>([])
    useEffect(() => {
        getVideo.getAll(Number(id))
            .then(res => { 
                setKey(res.data.results)
            })
    },[id])
    return(
        <div>
            <ReactPlayer url={'https://www.youtube.com/watch?v=' + key?.[0]?.key}
                width='650px'
                height = '350px'
                controls
                playing = {true}
            />
        </div>
    );
}
export default Video;
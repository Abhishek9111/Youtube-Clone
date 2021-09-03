import React from 'react'
import VideoItem from './VideoItem'
import {Grid} from '@material-ui/core'

const VideoList = (props)=>{
    const {videos,onVideoSelect} = props
    console.log(videos,"Test")
    const listofVideos=videos.map((video,id)=><VideoItem key={id} video={video} onVideoSelect={onVideoSelect}/>) 
    return(
        <Grid container spacing={10}>
            {listofVideos}
        </Grid>
    )
}

export default VideoList
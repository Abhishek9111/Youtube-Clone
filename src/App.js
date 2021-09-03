import React from 'react'
import './App.css';
import Searchbar from './components/Searchbar';
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'
import {Grid} from '@material-ui/core'
import youtube from './api/youtube'

class App extends React.Component{
    
    state={
        video:[],
        selectedVideo:null
    }

    handleSubmit = async (searchTerm)=>{
        const response = await youtube.get('search',{
            params:{
                part:'snippet',
                maxResults:5,
                key:'AIzaSyD_hMZfji6xWVQCxg3Nxullzg0aTqpbQ1M',
                q:searchTerm
            }
        })
        // console.log(response)
        this.setState({video:response.data.items,selectedVideo:response.data.items[0]})
    }
    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }

    render(){
        return(
        <Grid container spacing={10} justifyContent="center">
            <Grid item xs={12}>
                <Grid container spacing={10}>
                    <Grid item xs={12} >
                        <Searchbar onFormSubmit={this.handleSubmit}/>
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={this.state.video} onVideoSelect={this.onVideoSelect}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>  
        )
    }
}

export default App;




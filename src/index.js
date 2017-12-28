import React, { Component } from "react"
import ReactDOM from "react-dom"
import YTSearch from "youtube-api-search"
import _ from "lodash"

import SearchBar from "./components/search_bar"
import VideoList from "./components/video_list"
import VideoDetail from "./components/video_detail"
import "./style/style.css"
const API_KEY = "AIzaSyDyndQeWIFJVV6zr31s8MohvpJdIeksthU"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo : null
    }
    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term : term }, (videos) => {
      this.setState(
        {
          videos: videos,
          selectedVideo: videos[0]
        } );
    })
  }
  render() {
    //the passed function to debounce can only be called every 300sec
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)

    return(
      <div className="row">
        <SearchBar onSearchTermChange={ videoSearch } />
          <div className="col-md-6">
              <VideoDetail video={this.state.selectedVideo} />
          </div>

          <div className="col-md-6">
            <VideoList
            onVideoSelect={selectedVideo =>this.setState({selectedVideo})}
            videos={this.state.videos} />
          </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector(".container"))

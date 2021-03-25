import React from "react";
import SearchBar from "./SearchBar";
import Gif from "./Gif";
import GifList from "./GifList";
import giphy from "giphy-api";

class App extends React.Component {
  state = {
    gifs: [],
    selectedGif: null,
  };

  search = (term) => {
    giphy("WGmnFCv7LgRX6uPQ4V902CirhNMMUIt3").search(
      {
        q: term,
        rating: "g",
        limit: 10,
      },
      (err, res) => {
        this.setState({ gifs: res.data });
      }
    );
  };

  selectedGif = (id) => {
      this.setState({
          selectedGif: id
      })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} className="gif" />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} selectedGif={this.selectedGif}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

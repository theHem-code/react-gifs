import React from "react";
import Gif from "./Gif";

class GifList extends React.Component {
  renderGifs = () => {
    return this.props.gifs.map((gif) => {
      return (
        <div>
          <Gif id={gif.id} key={gif.id} selectedGif={this.props.selectedGif} />
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderGifs()}</div>;
  }
}

export default GifList;

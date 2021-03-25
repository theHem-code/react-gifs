import React from "react";

class Gif extends React.Component {
  handleClick = () => {
      this.props.selectedGif(this.props.id);
  };

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;

    return (
      <div className="selected-gif">
        <img src={src} alt="gif" className="gif" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Gif;

import React from "react";
import ReactDOM from "react-dom";

const audioClips = [
  {
    label: "Major 3rd",
    sound:
      "https://dl.dropboxusercontent.com/s/6109vm1cre62toq/Major%203rd.mp3?dl=0",
  },
  {
    label: "Minor 7th",
    sound:
      "https://dl.dropboxusercontent.com/s/m3a2fpz8f3a2qt3/Minor%207th.mp3?dl=0",
  },
];

export default class TodoList extends React.Component {
  soundPlay = (src) => {
    const sound = new Audio(src);
    sound.play();
  };

  renderSound = () => {
    return audioClips.map((audioClips, index) => {
      return (
        <button key={index} onClick={() => this.soundPlay(audioClips.sound)}>
          {audioClips.label}
        </button>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>yo</h2>
        {this.renderSound()}
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));

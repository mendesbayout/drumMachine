function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const sounds = [
{
  key: 'Q',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },

{
  key: 'W',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },

{
  key: 'E',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  key: 'A',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  key: 'S',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  key: 'D',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  key: 'Z',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  key: 'X',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  key: 'C',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' }];




const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

const App = () =>
React.createElement("div", { id: "display", className: "display" },
React.createElement("h1", null, "Play it"),
sounds.map((sound, idx) =>
React.createElement(DrumPad, { text: sound.key, key: idx, audio: sound.mp3 })));




class DrumPad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playSound",











    () => {
      this.audio.current.play();

      const id = this.audio.current.id;

      const parent = this.audio.current.parentNode;
      parent.classList.add('active');

      const display = parent.parentNode;
      console.log(display);
      display.querySelector('h1').innerText = `${id} is playing..`;
    });this.audio = React.createRef();}componentDidMount() {this.audio.current.addEventListener('ended', e => {const parent = e.target.parentNode;parent.classList.remove('active');});}


  render() {

    const { text, audio } = this.props;

    return (
      React.createElement("div", { className: "drum-pad", onClick: this.playSound, id: `drum-${text}` },
      text,
      React.createElement("audio", { ref: this.audio, src: audio, className: "clip", id: text })));


  }}

document.addEventListener('keydown', e => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);


  if (audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add('active');

    const display = parent.parentNode;
    console.log(display);
    display.querySelector('h1').innerText = `${id} is playing..`;
    audio.play();
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('drum-machine'));
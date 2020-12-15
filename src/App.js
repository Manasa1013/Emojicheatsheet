import React, { useState } from "react";
import "./styles.css";

const emojiSmileyDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "☹️": "Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😀 ": "Grinning Face"
};
const listEmojiKeys = Object.keys(emojiSmileyDictionary);
// console.log(listEmojiKeys)

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("");
  function emojiInputHandler(event) {
    var userEmojiInput = event.target.value;
    //the emoji or the input entered
    emojiMeaning = emojiSmileyDictionary[userEmojiInput];
    //value of emoji or input
    console.log(emojiMeaning);
    if (emojiMeaning === undefined) {
      emojiMeaning = "Oops!!try only smiley emojis";
    }
    setEmojiMeaning(emojiMeaning);
  }
  function styleEmoji() {
    const manStyle = {
      padding: "1rem 2rem",
      margin: "2rem",
      textDecoration: "none",

      display: "block",
      textAlign: "none",
      overflow: "hidden",

      fontSize: "2rem"
    };
    return manStyle;
  }
  function listItemClickHandler(emoji) {
    // var emojiDisplay = [emojiSmileyDictionary[emoji]];
    // console.log(emojiSmileyDictionary[emoji]);
    setEmojiMeaning(emojiSmileyDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>Use apt emojis with this app!!</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter the emoji/emoticon to know the meaning"
      />
      <h1>{}</h1>
      <h1 style={{ color: "#ff1458" }}> {emojiMeaning} </h1>
      <ul style={styleEmoji()}>
        {listEmojiKeys.map(function (emoji, index) {
          return (
            <span
              key={emoji}
              style={{ cursor: "pointer", margin: "5px" }}
              onClick={() => listItemClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </ul>
    </div>
  );
}

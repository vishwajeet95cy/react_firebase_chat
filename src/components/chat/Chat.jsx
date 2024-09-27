import EmojiPicker from "emoji-picker-react";
import "./chat.css";
import { useState } from "react";

const Chat = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet. </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              suscipit obcaecati reiciendis consectetur. Reiciendis qui ex fuga,
              sunt asperiores ad consequatur possimus libero mollitia magni nisi
              delectus accusamus corrupti quisquam!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              suscipit obcaecati reiciendis consectetur. Reiciendis qui ex fuga,
              sunt asperiores ad consequatur possimus libero mollitia magni nisi
              delectus accusamus corrupti quisquam!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              suscipit obcaecati reiciendis consectetur. Reiciendis qui ex fuga,
              sunt asperiores ad consequatur possimus libero mollitia magni nisi
              delectus accusamus corrupti quisquam!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              suscipit obcaecati reiciendis consectetur. Reiciendis qui ex fuga,
              sunt asperiores ad consequatur possimus libero mollitia magni nisi
              delectus accusamus corrupti quisquam!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              suscipit obcaecati reiciendis consectetur. Reiciendis qui ex fuga,
              sunt asperiores ad consequatur possimus libero mollitia magni nisi
              delectus accusamus corrupti quisquam!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              suscipit obcaecati reiciendis consectetur. Reiciendis qui ex fuga,
              sunt asperiores ad consequatur possimus libero mollitia magni nisi
              delectus accusamus corrupti quisquam!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camer.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          name="message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;

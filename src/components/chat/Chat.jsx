import "./chat.css";

const Chat = () => {
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
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camer.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" name="message" placeholder="Type a message..." />
        <div className="emoji">
          <img src="./emoji.png" alt="" />
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;

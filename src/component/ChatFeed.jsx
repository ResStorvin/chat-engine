import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;  // This line uses object destructuring to extract chats, activeChat, userName, and messages from the props object.
  
  const chat = chats && chats[activeChat];

  // render messages
  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1]; // if there are messages make sure to find message
      const isMyMessage = userName === message.sender.username;  // pretty obvious, no need to explain

      return (
        <>
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage   // if is my message we're going to render MyMessage component
              ? <MyMessage message={message} />
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
            }
          </div>
          <div className="read-receipts"
            style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            read-receipts
          </div>
          </div>
          </>
      );
    });
  };

  if(!chat) return 'Loading...';

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username}`)}
        </div>
      </div>

      {renderMessages()}
      <div style={{ height: '100px' }} />       {/* self closing div */}
      <div className="message-form-container">
        < MessageForm {...props} chatId={activeChat} />
      </div>
      </div>
    )
}
export default ChatFeed;
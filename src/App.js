import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./component/ChatFeed.jsx";
import './App.css';

const App = () => {
    return (
        < ChatEngine
            height= "100vh"
            projectID= "99cef950-a9e7-4eab-88bc-50db4e544950"
            userName="cody"
            userSecret="321321"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            // so that you can render your own component for the entire chat feed
            />
    );
}

export default App;
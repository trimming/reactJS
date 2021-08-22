import './App.css';
import { Message } from "./components/Message";
import { MessageList } from "./components/MessageList";

const messageText = 'My First React App';

function App() {

  return (
    <div className="App">
      <Message text={messageText} />
      <MessageList />
    </div>
  );
}

export default App;

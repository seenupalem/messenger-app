import React, { useState } from "react";
import FriendList from "./components/FriendList";
import ChatWindow from "./components/ChatWindow";
import styles from "./styles/App.module.css";

const friends = ["Friend1", "Friend2", "Friend3"];

export interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

export type ChatMap = Record<string, Message[]>;

const App: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<string>(friends[0]);
  const [chats, setChats] = useState<ChatMap>({});

  const handleSendMessage = (content: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const newMessage: Message = { sender: "You", content, timestamp };
    setChats((prev) => ({
      ...prev,
      [selectedFriend]: [...(prev[selectedFriend] || []), newMessage],
    }));
  };

  return (
    <div className={styles.container}>
      <FriendList
        friends={friends}
        selected={selectedFriend}
        onSelect={setSelectedFriend}
      />
      <ChatWindow
        messages={chats[selectedFriend] || []}
        onSend={handleSendMessage}
        friend={selectedFriend}
      />
    </div>
  );
};

export default App;

import React from "react";
import type { Message } from "../App";
import MessageInput from "./MessageInput";
import styles from "../styles/ChatWindow.module.css";

interface Props {
  messages: Message[];
  onSend: (msg: string) => void;
  friend: string;
}

const ChatWindow: React.FC<Props> = ({ messages, onSend, friend }) => (
  <div className={styles.chat}>
    <div className={styles.header}>Chat with {friend}</div>
    <div className={styles.messages}>
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={msg.sender === "You" ? styles.you : styles.them}
        >
          <div>{msg.content}</div>
          <span className={styles.time}>{msg.timestamp}</span>
        </div>
      ))}
    </div>
    <MessageInput onSend={onSend} />
  </div>
);

export default ChatWindow;

import React from "react";
import styles from "../styles/FriendList.module.css";

interface Props {
  friends: string[];
  selected: string;
  onSelect: (friend: string) => void;
}

const FriendList: React.FC<Props> = ({ friends, selected, onSelect }) => (
  <div className={styles.sidebar}>
    <h2>Friends</h2>
    <ul>
      {friends.map((friend) => (
        <li
          key={friend}
          className={selected === friend ? styles.selected : ""}
          onClick={() => onSelect(friend)}
        >
          {friend}
        </li>
      ))}
    </ul>
  </div>
);

export default FriendList;

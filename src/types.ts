export type Message = {
  sender: "me" | "friend";
  text: string;
  timestamp: string;
};

export type Chat = {
  [friendName: string]: Message[];
};

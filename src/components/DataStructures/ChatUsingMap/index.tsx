import { users, messages, User, Message } from "../data";
import { MessageItem } from "./MessageItem";

const nameByIdReduce = (users: User[]) =>
  users.reduce((prev, user) => ({ ...prev, [user.id]: user.name }), {});

const nameByIdMap = (users: User[]) =>
  new Map(users.map(({ id, name }) => [id, name]));

export function ChatUsingMap() {
  const usersArray = nameByIdReduce(users);
  const usersMap = nameByIdMap(users);

  return (
    <>
      <h3>Chatt with ID Reduce</h3>
      {messages.map(({ id, text, userId }) => (
        <MessageItem
          id={id}
          text={text}
          userId={usersArray[userId as keyof typeof usersArray]}
        />
      ))}
      <h3>Chat with ID Map</h3>
      {messages.map(({ id, text, userId }) => (
        <MessageItem id={id} text={text} userId={usersMap.get(userId) ?? ""} />
      ))}
    </>
  );
}

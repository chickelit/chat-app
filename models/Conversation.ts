import { User } from ".";

interface Conversation {
  userIdOne?: number;
  userIdTwo?: number;
  user: User;
  latestMessage?: object;
}

export default Conversation;

import { User } from ".";

interface Conversation {
  id: number;
  userIdOne?: number;
  userIdTwo?: number;
  user: User;
  latestMessage?: object;
}

export default Conversation;

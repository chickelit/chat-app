import { User } from ".";

interface Conversation {
  id: number;
  userIdOne?: number;
  userIdTwo?: number;
  user: User;
  latestMessage?: object;
  messages: any[];
}

export default Conversation;

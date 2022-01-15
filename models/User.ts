import { Conversation } from ".";

interface User {
  id: number;
  email: string;
  name: string;
  username: string;
  avatar?: {
    url: string;
  };
  friendship?: boolean;
  friendshipRequest?: boolean;
  existingConversation?: Conversation;
}

export default User;

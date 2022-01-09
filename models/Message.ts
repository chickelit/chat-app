import { User } from ".";

interface Message {
  id: number;
  userId: number;
  conversationId?: number;
  groupId?: number;
  category: "media" | "text";
  content?: string;
  owner: User;
  media?: {
    url: string;
  };
  createdAt: string;
  updatedAt: string;
}

export default Message;

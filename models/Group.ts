import { User } from ".";

interface Group {
  id: number;
  userId: number;
  title: number;
  createdAt: string;
  updatedAt: string;
  owner?: User;
  members?: User[];
  messages: any[];
  latestMessage?: object;
  groupCover?: {
    url: string;
  };
}

export default Group;

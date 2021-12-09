import { User } from ".";

interface Group {
  id: number;
  userId: number;
  title: number;
  createdAt: string;
  updatedAt: string;
  groupCover?: {
    url: string;
  };
  owner?: User;
  latestMessage?: object;
}

export default Group;

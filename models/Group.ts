import { User } from ".";

interface Group {
  id: number;
  userId: number;
  title: number;
  createdAt: string;
  updatedAt: string;
  owner?: User;
  latestMessage?: object;
  groupCover?: {
    url: string;
  };
}

export default Group;

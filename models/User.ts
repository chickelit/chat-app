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
}

export default User;

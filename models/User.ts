interface User {
  id: number;
  email: string;
  name: string;
  username: string;
  avatar?: {
    url: string;
  };
}

export default User;

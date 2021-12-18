/* eslint-disable import/no-mutable-exports */
import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import View from "@/store/view";
import Auth from "~/store/auth";
import Profile from "~/store/users/profile";
import Error from "~/store/error";
import Avatar from "~/store/users/avatar";
import Register from "~/store/register";
import ForgotPassword from "~/store/forgotPassword";
import Conversation from "~/store/conversations";
import Friend from "~/store/friends/main";
import Group from "~/store/groups/main";
import FriendshipRequest from "~/store/friends/requests";
import UserSearch from "~/store/users/search";
import MembersStore from "~/store/groups/members";

let view: View;
let auth: Auth;
let profile: Profile;
let error: Error;
let avatar: Avatar;
let register: Register;
let forgotPassword: ForgotPassword;
let conversation: Conversation;
let friendship: Friend;
let group: Group;
let friendshipRequest: FriendshipRequest;
let userSearch: UserSearch;
let member: MembersStore;

const initializeStores = (store: Store<any>): void => {
  view = getModule(View, store);
  auth = getModule(Auth, store);
  profile = getModule(Profile, store);
  error = getModule(Error, store);
  avatar = getModule(Avatar, store);
  register = getModule(Register, store);
  forgotPassword = getModule(ForgotPassword, store);
  conversation = getModule(Conversation, store);
  friendship = getModule(Friend, store);
  group = getModule(Group, store);
  friendshipRequest = getModule(FriendshipRequest, store);
  userSearch = getModule(UserSearch, store);
  member = getModule(MembersStore, store);
};

export {
  initializeStores,
  view,
  auth,
  profile,
  error,
  avatar,
  register,
  forgotPassword,
  conversation,
  friendship,
  group,
  friendshipRequest,
  userSearch,
  member,
};

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
import FriendshipRequest from "~/store/friends/requests";
import UserSearch from "~/store/users/search";
import Mode from "~/store/mode";
import ConversationMessageStore from "~/store/messages/conversations";

let view: View;
let auth: Auth;
let profile: Profile;
let error: Error;
let avatar: Avatar;
let register: Register;
let forgotPassword: ForgotPassword;
let conversation: Conversation;
let friendship: Friend;
let friendshipRequest: FriendshipRequest;
let userSearch: UserSearch;
let mode: Mode;
let conversationMessage: ConversationMessageStore;

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
  friendshipRequest = getModule(FriendshipRequest, store);
  userSearch = getModule(UserSearch, store);
  mode = getModule(Mode, store);
  conversationMessage = getModule(ConversationMessageStore, store);
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
  friendshipRequest,
  userSearch,
  mode,
  conversationMessage,
};

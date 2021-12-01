/* eslint-disable import/no-mutable-exports */
import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import View from "@/store/view";
import Auth from "@/store/auth";
import Profile from "~/store/profile";
import Error from "~/store/error";

let view: View;
let auth: Auth;
let profile: Profile;
let error: Error;

const initializeStores = (store: Store<any>): void => {
  view = getModule(View, store);
  auth = getModule(Auth, store);
  profile = getModule(Profile, store);
  error = getModule(Error, store);
};

export { initializeStores, view, auth, profile, error };

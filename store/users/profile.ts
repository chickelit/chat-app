import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { User } from "~/models";
import { $axios, $cookies } from "~/utils/nuxt-instance";

interface UpdatePayload {
  name?: string;
  username?: string;
}

@Module({ name: "users/profile", stateFactory: true, namespaced: true })
export default class Profile extends VuexModule {
  private user = {} as User;

  public get $single() {
    return this.user;
  }

  @Mutation
  private UPDATE_USER(user: User) {
    this.user = user;
  }

  @Mutation
  private SET_USER_AVATAR(avatar: User["avatar"]) {
    this.user.avatar = avatar;
  }

  @Action({ rawError: true })
  public async show() {
    if (!$cookies.get("token")) return;

    const user = await $axios.$get("/users/profile");

    this.context.commit("UPDATE_USER", user);
  }

  @Action({ rawError: true })
  public async update(payload: UpdatePayload) {
    const user = await $axios.$put("/users/profile", payload);

    this.context.commit("UPDATE_USER", user);
  }
}

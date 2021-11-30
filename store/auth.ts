import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { $axios, $cookies } from "~/utils/nuxt-instance";

interface CreatePayload {
  email: string;
  password: string;
}

type Token = string | null;

@Module({ name: "auth", stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  private token = null as Token;

  get $token() {
    return this.token;
  }

  @Mutation
  UPDATE_TOKEN(token: Token) {
    this.token = token;
  }

  @Action({ rawError: true })
  public async create(payload: CreatePayload) {
    const { token } = await $axios.$post("/auth", payload);

    $cookies.set("token", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    this.context.commit("UPDATE_TOKEN", token);
  }
}

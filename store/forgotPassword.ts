import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { User } from "~/models";
import { $axios } from "~/utils/nuxt-instance";

interface CreatePayload {
  email: string;
  redirectUrl: string;
}

interface ShowPayload {
  key: string;
}

interface UpdatePayload {
  key: string;
  password: string;
  passwordConfirmation: string;
}

@Module({ name: "forgotPassword", stateFactory: true, namespaced: true })
export default class ForgotPassword extends VuexModule {
  private user = {} as User;

  public get $user() {
    return this.user;
  }

  @Mutation
  private UPDATE_USER(user: User) {
    this.user = user;
  }

  @Action({ rawError: true })
  public async create(payload: CreatePayload) {
    await $axios.post("/forgot-password", payload);
  }

  @Action({ rawError: true })
  public async show({ key }: ShowPayload) {
    const user = await $axios.$get(`/forgot-password/${key}`);

    this.context.commit("UPDATE_USER", user);
  }

  @Action({ rawError: true })
  public async update(payload: UpdatePayload) {
    await $axios.put("/forgot-password", payload);
  }
}

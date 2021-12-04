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
  name: string;
  username: string;
  password: string;
  passwordConfirmation: string;
}

@Module({ name: "register", stateFactory: true, namespaced: true })
export default class Register extends VuexModule {
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
    await $axios.post("/register", payload);
  }

  @Action({ rawError: true })
  public async show({ key }: ShowPayload) {
    const user = await $axios.$get(`/register/${key}`);

    this.context.commit("UPDATE_USER", user);
  }

  @Action({ rawError: true })
  public async update(payload: UpdatePayload) {
    await $axios.put("/register", payload);
  }
}

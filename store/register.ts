import { Action, Module, VuexModule } from "vuex-module-decorators";
import { $axios } from "~/utils/nuxt-instance";

interface CreatePayload {
  email: string;
  redirectUrl: string;
}

@Module({ name: "register", stateFactory: true, namespaced: true })
export default class Register extends VuexModule {
  @Action({ rawError: true })
  public async create(payload: CreatePayload) {
    await $axios.post("/register", payload);
  }
}

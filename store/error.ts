import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({ name: "error", stateFactory: true, namespaced: true })
export default class Error extends VuexModule {
  error = {} as any;

  get $error() {
    return this.error;
  }

  @Mutation
  UPDATE_ERROR(error: any) {
    this.error = error;
  }

  @Action({ rawError: true })
  public update(error: any) {
    this.context.commit("UPDATE_ERROR", error);
  }
}

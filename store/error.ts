import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({ name: "error", stateFactory: true, namespaced: true })
export default class Error extends VuexModule {
  private error = {} as any;

  public get $error() {
    return this.error;
  }

  @Mutation
  private UPDATE_ERROR(error: any) {
    this.error = error;
  }

  @Action({ rawError: true })
  public update(error: any) {
    this.context.commit("UPDATE_ERROR", error);
  }
}

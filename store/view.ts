import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({
  name: "view",
  stateFactory: true,
  namespaced: true,
})
export default class View extends VuexModule {
  public view = "Conversations";
  public navigationActiveClass = "conversations-anchor";

  @Mutation
  private SET_VIEW(view: string) {
    this.view = view;
  }

  @Mutation
  private SET_NAVIGATION_ACTIVE_CLASS(navigationActiveClass: string) {
    this.navigationActiveClass = navigationActiveClass;
  }

  public get $view() {
    return this.view;
  }

  public get $navigationActiveClass() {
    return this.navigationActiveClass;
  }

  @Action
  public setView(view: string) {
    this.context.commit("SET_VIEW", view);
  }

  @Action
  public setNavigationActiveClass(navigationActiveClass: string) {
    this.context.commit("SET_NAVIGATION_ACTIVE_CLASS", navigationActiveClass);
  }
}

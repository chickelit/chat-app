import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({
  name: "view",
  stateFactory: true,
  namespaced: true,
})
export default class View extends VuexModule {
  public view = "Conversations";
  public previousView = "Conversations";
  public navigationActiveClass = "conversations-anchor";
  public previousNavigationActiveClass = "conversations-anchor";

  @Mutation
  private SET_VIEW(view: string) {
    this.view = view;
  }

  @Mutation
  private SET_PREVIOUS_VIEW(previousView: string) {
    this.previousView = previousView;
  }

  @Mutation
  private SET_NAVIGATION_ACTIVE_CLASS(navigationActiveClass: string) {
    this.navigationActiveClass = navigationActiveClass;
  }

  @Mutation
  private SET_PREVIOUS_NAVIGATION_ACTIVE_CLASS(previousNavigationActiveClass: string) {
    this.previousNavigationActiveClass = previousNavigationActiveClass;
  }

  public get $view() {
    return this.view;
  }

  public get $previousView() {
    return this.previousView;
  }

  public get $navigationActiveClass() {
    return this.navigationActiveClass;
  }

  public get $previousNavigationActiveClass() {
    return this.previousNavigationActiveClass;
  }

  @Action
  public setView(view: string) {
    this.context.commit("SET_VIEW", view);
  }

  @Action
  public setPreviousView(previousView: string) {
    this.context.commit("SET_PREVIOUS_VIEW", previousView);
  }

  @Action
  public setNavigationActiveClass(navigationActiveClass: string) {
    this.context.commit("SET_NAVIGATION_ACTIVE_CLASS", navigationActiveClass);
  }

  @Action
  public setPreviousNavigationActiveClass(previousNavigationActiveClass: string) {
    this.context.commit("SET_PREVIOUS_NAVIGATION_ACTIVE_CLASS", previousNavigationActiveClass);
  }
}

import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { $cookies } from "~/utils/nuxt-instance";

interface UpdatePayload {
  mode: "dark" | "light";
}

@Module({
  name: "mode",
  stateFactory: true,
  namespaced: true,
})
export default class Mode extends VuexModule {
  private mode: "light" | "dark" = "light";

  @Mutation
  private SET_MODE(mode: "light" | "dark") {
    this.mode = mode;
  }

  public get $mode() {
    return this.mode;
  }

  @Action({ rawError: true })
  public show() {
    let mode = $cookies.get("mode") ? $cookies.get("mode") : "light";

    if (!["light", "dark"].includes(mode)) {
      $cookies.set("mode", "light");
      mode = "light";
    }

    this.context.commit("SET_MODE", mode);
  }

  @Action({ rawError: true })
  public update({ mode }: UpdatePayload) {
    $cookies.set("mode", mode, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    this.context.commit("SET_MODE", mode);
  }
}

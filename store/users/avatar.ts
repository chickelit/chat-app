import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { $axios } from "~/utils/nuxt-instance";

interface UpdatePayload {
  file: Blob;
}

@Module({ name: "users/avatar", stateFactory: true, namespaced: true })
export default class Profile extends VuexModule {
  private avatarBlob = "" as string;

  public get $blob() {
    return this.avatarBlob;
  }

  @Mutation
  UPDATE_BLOB(blob: string) {
    this.avatarBlob = blob;
  }

  @Action({ rawError: true })
  public async update({ file }: UpdatePayload) {
    const formData = new FormData();
    formData.append("file", file);

    const avatar = await $axios.$put("/users/avatar", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    this.context.commit("UPDATE_BLOB", URL.createObjectURL(file));
    this.context.commit("users/profile/SET_USER_AVATAR", avatar, {
      root: true,
    });
  }
}

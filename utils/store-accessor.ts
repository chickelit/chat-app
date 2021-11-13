import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import View from "@/store/view";

// eslint-disable-next-line import/no-mutable-exports
let view: View;

const initializeStores = (store: Store<any>): void => {
  view = getModule(View, store);
};

export { initializeStores, view };

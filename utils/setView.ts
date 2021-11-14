import { view } from "~/store";

interface View {
  newView?: string;
  navigationActiveClass?: string;
}

export default ({newView, navigationActiveClass}: View) => {
  if (newView) {
    view.setView(newView);
  }
  if (navigationActiveClass) {
    view.setNavigationActiveClass(navigationActiveClass);
  }
}
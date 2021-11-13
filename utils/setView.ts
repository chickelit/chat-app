import { view } from "~/store";

interface View {
  newView?: string;
  activeClass?: string;
}

export default ({newView, activeClass}: View) => {
  if (newView) {
    view.setView(newView);
  }
  if (activeClass) {
    view.setNavigationActiveClass(activeClass);
  }
}
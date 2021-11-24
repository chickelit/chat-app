import { view } from "~/store";

interface View {
  newView: string;
  previousView: string;
  navigationActiveClass?: string;
  previousNavigationActiveClass?: string;
}

export default ({
  newView,
  previousView,
  navigationActiveClass,
  previousNavigationActiveClass,
}: View) => {
  view.setView(newView);
  view.setPreviousView(previousView);

  if (navigationActiveClass) {
    view.setNavigationActiveClass(navigationActiveClass);
  }
  
  if (previousNavigationActiveClass) {
    view.setPreviousNavigationActiveClass(previousNavigationActiveClass);
  }
};

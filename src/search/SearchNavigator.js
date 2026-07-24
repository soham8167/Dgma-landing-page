export const navigateToResult = (item) => {
  if (!item) {
    return;
  }

  if (item.url) {
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", item.url);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  }

  if (item.scrollId) {
    window.requestAnimationFrame(() => {
      const target = document.getElementById(item.scrollId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }
};

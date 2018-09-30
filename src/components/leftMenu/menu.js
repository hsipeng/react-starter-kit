const menu = function(routes) {
  let menu = [];
  routes.map(route => {
    if (route.parent === "0") {
      menu.push(route);
    }
  });
  menu.map(m => {
    let subMenu = [];
    routes.map(r => {
      if (r.parent === m.id) {
        subMenu.push(r);
      }
    });
    m.children = subMenu;
  });
  return menu;
};

export default menu;

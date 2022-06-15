const useMenu = (resource) => {
  let items = [];
  const menu = resource?.menu?.data;
  if (menu) {
    for (const key in menu) {
      // Adding a unique id to the link object.
      if (!['id', 'type'].includes(key)) {
        items.push({ ...menu[key], id: key });
      }
    }
  }
  return { items };
}

export default useMenu;

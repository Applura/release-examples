import { isRef, ref, watchEffect } from "vue";

const mapMenu = (menu) => {
 const items = [];
  if (menu) {
    for (const key in menu) {
      // Adding a unique id to the link object.
      if (!['id', 'type'].includes(key)) {
        items.push({ ...menu[key], id: key });
      }
    }
  }
  return items;
}
export default function useMenu(resource) {
  const items = ref([]);
  function mapResourceToMenu() {
    items.value = mapMenu(resource.value?.menu?.data);
  }
  if (isRef(resource)) {
    watchEffect(mapResourceToMenu);
  } else {
    mapResourceToMenu();
  }
  return { items };
}

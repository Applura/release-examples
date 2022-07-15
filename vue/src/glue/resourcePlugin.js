import { bootstrap } from 'client';
import { ref, shallowRef, onUnmounted } from 'vue';
import { resourceKey, problemKey, loadingKey, followKey } from "./keys";

export default {
  install: (app, options) => {
    const resource = shallowRef({});
    const problem = shallowRef({});
    const loading = ref(false);
    const client = bootstrap();
    (async () => {
      for await (
        const {
          resource: clientResource,
          problem: clientProblem
        } of client.start()
        ) {
        resource.value = clientResource;
        problem.value = clientProblem;
      }
    })();

    const follow = async (link, options = {}) => {
      loading.value = true;
      await client.follow(link, options);
      loading.value = false;
    }


    onUnmounted(() => {
      client.stop();
    });

    app.provide(resourceKey, resource);
    app.provide(problemKey, problem);
    app.provide(loadingKey, loading);
    app.provide(followKey, follow);
  }
}

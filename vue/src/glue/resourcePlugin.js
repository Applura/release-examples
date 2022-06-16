import { bootstrap } from 'client';
import { ref, onUnmounted } from 'vue';
import { resourceKey, problemKey, loadingKey, followKey } from "./keys";

export default {
  install: (app, options) => {
    const resource = ref(null);
    const problem = ref(null);
    const loading = ref(false);
    const client = bootstrap();
    (async () => {
      for await (const { resource: clientResource, problem: clientProblem } of client.start()) {
        resource.value = clientResource;
        problem.value = clientProblem;
        loading.value = false;
      }
    })();

    const follow = async (link, options = {}) => {
      loading.value = true;
      await client.follow(link, options);
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

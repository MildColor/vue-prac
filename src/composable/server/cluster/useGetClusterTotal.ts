import { clusterApis } from "@/server/cluster";
import { useAsyncState } from "@vueuse/core";
import { watch } from "fs";
import { ref } from "vue";

function useGetClusterTotal() {
  //   const state = ref(null);

  const { state, isReady, isLoading, execute } = useAsyncState(
    async (args) => {
      const response = await clusterApis.getClusterTotal();

      return response;
    },
    // 초기 상태
    null,
    // 옵션
    {}
  );

  //   watch(clusterSummary, () => {
  //     return execute();
  //   });

  return { state, isReady, isLoading, execute };
}

export default useGetClusterTotal;

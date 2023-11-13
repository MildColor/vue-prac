import DefaultVue from "@/layouts/default/Default.vue";

const DashBoard = () => import("@/views/DashBoard.vue");
const ClusterSummary = () => import("@/views/ClusterSummary.vue");
const StatisticsSearchTrend = () => import("@/views/StatisticsSearchTrend.vue");
const StatisticsSearchword = () => import("@/views/StatisticsSearchword.vue");
const Auth = () => import("@/views/AuthView.vue");

const NotFound = () => import("@/views/404NotFound.vue");

const routes = [
  {
    path: "/",
    component: DefaultVue,

    children: [
      {
        path: "login",
        name: "로그인",
        component: Auth,
      },

      {
        path: "dashboard",
        name: "대시보드",
        component: DashBoard,
      },
      {
        path: "cluster",
        name: "클러스터",
        redirect: "/cluster/summary",

        children: [
          {
            path: "summary",
            name: "클러스터 개요",
            component: ClusterSummary,
          },
        ],
      },
      {
        path: "statistics",
        name: "통계",
        redirect: "/statistics/searchtrend",
        children: [
          {
            path: "searchtrend",
            name: "검색추이",
            component: StatisticsSearchTrend,
          },
          {
            path: "searchword",
            name: "검색어 통계",
            component: StatisticsSearchword,
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

export default routes;

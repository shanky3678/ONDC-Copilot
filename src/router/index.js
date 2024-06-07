import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import DefenderView from "@/views/DefenderView.vue";
import DatabaseView from "@/views/DatabaseView.vue";
import VerificationView from "@/views/VerificationView.vue";
import MainView from "@/views/MainView.vue";
import AuthVerificationView from "@/views/AuthVerificationView.vue";
import LawDataTable from "@/views/LawDataTable.vue";
import LawDataTableView from "@/views/LawDataTableView";
import PricingView from '@/views/PricingView.vue'
import { useServerStore } from "@/stores/server";
import { isEmptyOrNull } from "@/shared/utils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Initial",
      component: AuthVerificationView,
    },
    {
      path: "/main",
      name: "Main",
      component: MainView,
      meta: { requiresAuth: true },

    },
    {
      path: "/law-data",
      name: "LawDataTable",
      component: LawDataTable,
      meta: { requiresAuth: true },

    },
    {
      path:"/pricing",
      name:"Pricing",
      component: PricingView,
      meta: { requiresAuth: true },
    },

    {
      path: "/law-data-view",
      name: "LawDataTableView",
      component: LawDataTableView,
      meta: { requiresAuth: true },

    },
    {
      path: "/home",
      name: "Home",
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/defender",
      name: "Defender",
      component: DefenderView,
      meta: { requiresAuth: true },
    },
    {
      path: "/database",
      name: "Database",
      component: DatabaseView,
      meta: { requiresAuth: true },
    },
    {
      path: "/verification",
      name: "Verification",
      component: VerificationView,
      meta: { requiresAuth: true },
    },
    {
      path: "/auth",
      name: "Auth",
      component: AuthVerificationView,
      meta: { requiresAuth: false },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const server = useServerStore();
  console.log("Starting the router guard");
  server.setUniBusy(true);

  // let data = await server.checkIfAccessTokenIsExistAndValid()
  
  if (to.path === "/login" ) {
    server.setUniBusy(false);
    next(); // Allow navigation to the login route
   
  }

  // Check if the user is verified as logged in
  const isValid = await server.checkIfAccessTokenIsExistAndValid();
  const isValidUser = await server.userDetails;
  if ((!isValid || !isValidUser) && to.meta.requiresAuth) {
    server.setUniBusy(false);
    next("/login");
     // Redirect to the login route
  } else {
    server.setUniBusy(false);
    // Proceed with the navigation
    next();
  }
  // server.setUniBusy(false);
});

export default router;

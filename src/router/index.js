import Vue from "vue";
import VueRouter from "vue-router";
// import About from "../views/About.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/beliefs",
    name: "Beliefs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/about/Beliefs"),
  },
  {
    path: "/values",
    name: "Values",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/about/Values.vue"),
  },
  {
    path: "/activities",
    name: "Activities",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/about/Activities.vue"
      ),
  },
  {
    path: "/conference",
    name: "Conference",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/leaders/Conference.vue"
      ),
  },
  {
    path: "/district",
    name: "District",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/leaders/District.vue"
      ),
  },
  {
    path: "/local",
    name: "Local",

    component: () =>
      import(/* webpackChunkName: "about" */ "../components/leaders/Local.vue"),
  },
  {
    path: "/media",
    name: "Media",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Media.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/contact/Contact.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

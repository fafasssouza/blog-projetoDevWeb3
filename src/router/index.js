import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PostsView from '../views/PostsView.vue'
import PostView from '../views/PostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: "/posts",
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    }, 
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    }, 
    {
      path: '/posts',
      name: 'posts',
      component: PostsView,
    },
    {
      path: '/post',
      name: 'post',
      children: [
        {
          path: "/:id",
          component: PostView
        }
      ]
    },

  ],
})

export default router

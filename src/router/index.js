import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PostsView from '../views/PostsView.vue'
import PostView from '../views/PostView.vue'
import { usePosts } from '@/stores/posts'

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
      path: '/post/:title',
      name: 'post',
      component: PostView,
      beforeEnter: async (to, from, next) => {
        const title = to.params.title
        const context = usePosts();
        const article = context.hasItemByTitle(title);
        if (article) {
          next();
        } else {
          next({name: "posts"});
        }
      },
      props: true
    },

  ],
})

export default router

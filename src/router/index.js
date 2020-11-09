import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home'
import News from '@/views/News'
import About from '@/views/About'
import Coin from '@/views/Coin'
import Links from '@/components/Links'
import Reddit from '@/components/Reddit'
import Twitter from '@/components/Twitter'
import Youtube from '@/components/Youtube'
import NotFoundComponent from '@/components/NotFoundComponent'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {path: '/',name: 'Home',component: Home},
    { path: '/news', name: 'News', component: News},
    { path: '/about', name: 'About', component: About},
    {path: "/coin/:icon",name: "coin",component: Coin,
    props: true,
    children: [
      {path: 'links', name: 'links', props: true, component: Links},
      {path: 'reddit', name: 'reddit', props: true, component: Reddit},
    {path: 'twitter', name: 'twitter', props: true, component: Twitter},
    {path: 'youtube', name: 'youtube',props: true, component: Youtube}
  ]},
    { path: "/:catchAll(.*)", component: NotFoundComponent }
  ]
});

export default router;

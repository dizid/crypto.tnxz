import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home'
import News from '@/views/News'
import Search from '@/views/Search'
import PortfolioManagement from '@/views/PortfolioManagement'
import Portfolio from '@/views/Portfolio'
import TradeData from '@/views/TradeData'
import About from '@/views/About'
import Coin from '@/views/Coin'
import Links from '@/components/Links'
import Reddit from '@/components/Reddit'
import Twitter from '@/components/Twitter'
import Youtube from '@/components/Youtube'
import NotFoundComponent from '@/components/NotFoundComponent'

import test from '@/views/test'

 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {path: '/',name: 'Home',component: Home},

    { path: '/test', name: 'test', component: test},

    { path: '/news', name: 'News', component: News},
    { path: '/search', name: 'Search', component: Search},
    { path: '/portfolio', name: 'PortfolioManagement', component: PortfolioManagement},
    { path: '/viewportfolio', name: 'Portfolio', component: Portfolio},
       { path: '/about', name: 'About', component: About},
    {path: "/coin/:icon",name: "coin",component: Coin,
    props: true,
    children: [
      { path: 'tradedata', name: 'tradedata', props: true, component: TradeData},
      {path: 'links', name: 'links', props: true, component: Links},
      {path: 'reddit', name: 'reddit', props: true, component: Reddit},
    {path: 'twitter', name: 'twitter', props: true, component: Twitter},
    {path: 'youtube', name: 'youtube',props: true, component: Youtube}
  ]},
    { path: "/:catchAll(.*)", component: NotFoundComponent }
  ]
});

export default router;

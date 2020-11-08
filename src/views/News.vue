<template>
    <section class="section">
           <div class="box" v-for="item in news">
               <div class="card">
                    <div class="card-image">
                    </div>
                    <div class="card-content">
                        <div class="media">
                        <div class="media-left">
                            <figure class="image is-128x128">
                            <img  v-bind:src="item.imageurl" alt="">
                            </figure>
                        </div>
                        <div class="media-content">
                            <a class="title is-link" v-bind:href="item.guid" target="_blank">{{item.title}}</a>
                        </div>
                        </div>

                        <div class="content">
                          {{item.body}}
                        <br>
                        <br>

                        <nav class="level is-mobile">
                          <div class="level-left">
                            <div class="field is-grouped is-grouped-multiline">

                              <div class="control">
                                <div class="level-item tags has-addons">
                                 <span class="tag"><i class="fas fa-thumbs-up"></i></span>
                                 <span class="tag is-link">{{item.upvotes}}</span>
                                </div>
                              </div>

                              <div class="control">
                                <div class="level-item tags has-addons">
                                  <span class="tag"><i class="fas fa-thumbs-down"></i></span>
                                  <span class="tag is-link">{{item.downvotes}}</span>
                                </div>
                              </div>
                              </div>
                            </div>

                          <div class="level-right">
                            <div class="level-item tags has-addons">
                              <span class="tag"><i>source</i></span>
                              <span class="tag is-primary">{{item.source}}</span>
                            </div>
                          </div>
                        </nav>

                        </div>
                    </div>
                </div>
             </div>
      </section>
</template>

<script>

import axios from 'axios'

export default {
  name: 'news',
  data: () => ({
    news: [],
    errors: []
  }),

  created () {
    axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
      .then(response => {
        this.news = response.data.Data
        console.log(response.data.Message) // This will give you access to the full object
      })
      .catch(e => {
        this.errors.push(e)
      })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a.title:hover{
  color:#3273dc;
}

</style>
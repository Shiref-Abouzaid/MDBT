<template>
  <section class="single-topic">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="topic-content">
            <h3>{{$route.params.catName}}</h3>
              <div class="news-card" v-for="(singleNews, index) in news" :key="index">
                <a target="_blank" :href="singleNews.url">
                  <div class="card">
                      <div class="card-hover">
                          <div class="card-img">
                              <img :src="singleNews.urlToImage" class="card-img-top" alt="...">
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">{{singleNews.title}}</h5>
                              <div class="desc">
                                <p>{{singleNews.description}}</p>
                                <a class="more" target="_blank" :href="singleNews.url">Read More</a>
                              </div>
                          </div>
                      </div>
                  </div>
                </a>
              </div>
          </div>
        </div>
        ​
        <div class="col-md-4">
          <div class="topic-ads">
            <h3>Ads</h3>
            <!-- <div class="row" v-for="topic in 4" :key="topic">
              <div class="col-12">
                <div class="ads">
                  <div class="ads-box">
                    <img src="/images/person.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      news: []
    }
  },
  computed: {
    countryCode() {
      return this.$store.getters['locale/countryCode'];
    },
    lang() {
      return this.$store.getters['locale/langCode']
    }
  },
  async fetch() {
    console.log(this.countryCode, this.$route.params.catName, this.lang);
    let newsData = await axios.get('http://newsapi.org/v2/top-headlines?country=' + this.countryCode + '&category=' + this.$route.params.catName + '&language=' + this.lang + '&apiKey=e17973d784244ad2996849eb3d0299e5');
    this.news = newsData.data.articles
    console.log('news data >> ', newsData.data)
  }
}
</script>

<template>
  <section class="main-topics">
    <div class="container">

      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
              <li class="breadcrumb-item active" aria-current="page">News</li>
          </ol>
      </nav>

      <div class="cards">
        <h3>Select Topic</h3>
        <div class="row">

          <div class="col-4">
            <div class="news-card">
              <nuxt-link to="general">
                <div class="card">
                    <div class="card-hover">
                        <div class="card-img">
                            <img src="/images/news.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <div class="card-head">
                                <h5 class="card-title">General</h5>
                            </div>
                        </div>
                    </div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="col-4">
            <div class="news-card">
              <nuxt-link to="business">
                <div class="card">
                    <div class="card-hover">
                        <div class="card-img">
                            <img src="/images/news-business.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <div class="card-head">
                                <h5 class="card-title">Business</h5>
                            </div>
                        </div>
                    </div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="col-4">
            <div class="news-card">
              <nuxt-link to="sports">
                <div class="card">
                    <div class="card-hover">
                        <div class="card-img">
                            <img src="/images/news-sports.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <div class="card-head">
                                <h5 class="card-title">Sports</h5>
                            </div>
                        </div>
                    </div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="col-4">
            <div class="news-card">
              <nuxt-link to="health">
                <div class="card">
                    <div class="card-hover">
                        <div class="card-img">
                            <img src="/images/news-health.png" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <div class="card-head">
                                <h5 class="card-title">Health</h5>
                            </div>
                        </div>
                    </div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="col-4">
            <div class="news-card">
              <nuxt-link to="science">
                <div class="card">
                    <div class="card-hover">
                        <div class="card-img">
                            <img src="/images/news-science.jpeg" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <div class="card-head">
                                <h5 class="card-title">Science</h5>
                            </div>
                        </div>
                    </div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="col-4">
            <div class="news-card">
              <nuxt-link to="technology">
                <div class="card">
                    <div class="card-hover">
                        <div class="card-img">
                            <img src="/images/news-technology.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <div class="card-head">
                                <h5 class="card-title">Technology</h5>
                            </div>
                        </div>
                    </div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="col-4">
            <div class="news-card">
              <nuxt-link to="entertainment">
                <div class="card">
                    <div class="card-hover">
                        <div class="card-img">
                            <img src="/images/news-entertainment.jpeg" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <div class="card-head">
                                <h5 class="card-title">Entertainment</h5>
                            </div>
                        </div>
                    </div>
                </div>
              </nuxt-link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

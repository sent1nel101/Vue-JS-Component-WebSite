const app = Vue.createApp({
})

app.component('nav-component',{
    data(){
        return{
            title: 'October Vue Practice',
            string: 'Test String',
            navLinkServices: 'services.html',
            navLinkHome: 'index2.html'
        }
    },
    template:`
    <div class="navbar navbar-expand-md navbar-dark bg-faded">
      <div class="container-fluid" id="navNav">
        <a style="color: goldenrod" class="navbar-brand" href="index2.html">D|M</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-collapsable"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-collapsable">
          <ul class="navbar-nav me-auto">
            <li class="nav-item"><a class="nav-link active" href="index2.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>            
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html"
                >Contact</a
              >
            </li>
          </ul>
         
        </div>
      </div>
    </div>
    
    `
})
app.component('c2a-component', {
    data(){
        return{
            title: 'Sign Up NOW!!',
            subtitle: 'Join our newsletter for a treat.',
        }
    },
    template:
    `    
  <div class="container">
  <div class="jumbotron">
  <h1 class="display-4">{{title}}</h1>
  <p class="lead">{{subtitle}}</p>
  <hr style="color: gold" class="my-4">
  <p>Get ready to truly experience the web for the first time.</p>
  <p class="lead">
    <a class="btn btn-transparent bg-gradient btn-lg" style="color: goldenrod; text-shadow: 2px 2px #333;" href="contact.html" role="button">Sign Up</a>
  </p>
</div>
</div>
<br>
    <blockquote class="blockquote mb-0 mx-4">
      <p>We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures that we can have if only we seek them with our eyes open.</p>
      <footer class="blockquote-footer">Jawaharlal Nehru <cite title="The Discovery of India">The Discovery of India</cite></footer>
    </blockquote>
    `
})
app.component('carousel-component',{
    data(){
        return{  
            link1: 'https://picsum.photos/300/200',          
            link2: 'https://picsum.photos/300/201',          
            link3: 'https://picsum.photos/301/200'          
        }
    },
    template:
        `
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="link1" class="d-block" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="link2" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="link3" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        `
    
})
app.component('contact-form-component', {
    template:
    `
    <div class="input-group input-group-sm mb-3">
    <input type="text" class="form-control" placeholder="username" aria-label="Username">
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="email.com" aria-label="Server">
  </div>

  <div class="input-group input-group-sm">
    <span class="input-group-text">Comments:</span>
    <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>

  <button action="mailto:bjj.sent1nel@gmail.com" class="btn btn-transparent bg-gradient" style="width: 100px; color: white; margin-top: 1rem;" type="submit">Submit</button>
    `
})
app.component('contact-component', {
    data(){
        return{
            title: "Let's Talk!!",
            subtitle: "Your vision can be a reality!",
        }
    },
    template:
    `    
  <div class="container">
  <div class="jumbotron">
  <h1 class="display-4">{{title}}</h1>
  <p style="color:goldenrod" class="lead">{{subtitle}}</p>
</div>
</div>
    `
})
app.mount('#app')


<template>
  <div class="relative flex justify-center items-center bg-gradient-to-tr from-green-500 to-yellow-500 h-full md:h-2/3 z-10 overflow-hidden">
    <div class="md:w-3/4 absolute px-4 md:px-20 text-center text-white font-light bg-gray-950 bg-opacity-50 py-10">
      <router-link :to="'/vim-ventures'"><h1 class="hover:text-purple-300 text-purple-400 max-md:text-3xl text-5xl my-5">VimVentures</h1></router-link>
      <p class="max-md:text-xs">
        Embark on 'VimVentures' - an interstellar coding journey!
        <br>
        <br>
        I am currently working on a game to teach VIM, the game is written in C++ using the
        <a href="https://www.libsdl.org/" class="hover:text-purple-300 text-purple-400">SDL2</a>
        Library. My philosophy in making this game is to:
      </p>
      <ul class="max-md:text-xs p-2"> 
        <li class="ml-6 py-2">
          A. Make learning Vim fun for all levels of users, this entails a feature complete game with a tutor.
        </li>
        <li class="ml-6 py2">
          B. Maintaining an open policy on all works in this project, including providing access to code, assets and resources for non-commercial learning purposes.
        </li>
      </ul>
      <p class="max-md:text-xs py-2">
        You can see the project 
        <a href="https://github.com/Ofthemasses/VimVentures" class="hover:text-purple-300 text-purple-400">here</a>
        on GitHub, and the project wiki 
        <a href="/#/vim-ventures" class="hove:text-purple-300 text-purple-400">here</a>.
      </p>
    </div>
  </div>
  <div class="relative flex justify-center items-center h-full md:h-2/3 overflow-hidden z-10">
    <div class="md:w-3/4 absolute text-center px-4 md:px-20 text-gray-100 font-light">
      <h1 class="max-md:text-3xl text-5xl my-5">About</h1>
      <p class="max-md:text-xs">Hi! I'm Finlay Metcalfe, a Student and Developer in
        <a href="https://www.google.com/maps?q=Wellington" class="hover:text-purple-300 text-purple-400">Wellington</a>, New Zealand.
      I am in my honours year studying a Bachelor of Engineering, Majoring in Software Engineering at
        <a href="https://www.wgtn.ac.nz/" class="hover:text-purple-300 text-purple-400">Victoria University of Wellington</a>.
        I use this website to host projects I am working on. This includes repositories, games and steam workshop content. I have an 
        <a href="https://github.com/Ofthemasses/toru-api-handler" class="hover:text-purple-300 text-purple-400">API</a>
        setup to display my projects, you can see them by following the links at the top of the website.
      </p>
    </div>
  </div>
  <div class="-z-10">
    <img class="filter blur-sm brightness-[.2] fixed top-0 overflow-hidden w-full max-md:h-full object-cover" :src="curImage">
    <transition name="fade" mode="out-in">
      <div :key="curImage">
        <img class="filter blur-sm brightness-[.2] fixed top-0 w-full mx-md:h-full object-cover" :src="curImage">
      </div>
    </transition>
    </div>
  <div class="relative flex justify-center items-center bg-gray-950 h-full md:h-2/3">
    <div class="md:w-3/4 absolute text-center px-4 md:px-20 text-gray-100 font-light">
        <h1 class="max-md:text-3xl text-5xl my-5">Interests</h1>
        <p class="max-md:text-xs">
          I have a wide range of interests, here is a list of the things I am interested in at the moment:
          <ul class="max-md:text-xs py-2">
            <li class="py-2">
              <b class="font-bold">Video Games</b> particularly the Half-Life series, Portal series, and Counter-Strike games.
            </li>
            <li class="py-2">
              <b class="font-bold">Music</b>, I play piano and enjoy listening to bands like Pink Floyd, Led Zeppelin, and I am always on the look out for new music! On piano I enjoy playing songs by The Doors, Genesis and Lou Reed. 
            </li>
            <li class="py-2">
                I am learning <b class="font-bold">Finnish</b> and enjoy watching 
                <a href="https://areena.yle.fi/tv" class="hover:text-purple-300 text-purple-400">Yle Areena</a>.
                Minä en konjugation suomalainen sanat hyvä, mutta yrittän!
            </li>
            <li class="py-2">
                <b class="font-bold">Engineering</b>, I enjoy activities like assembling computers and working on cars, anything I can get my hands on!
            </li>
          </ul>
        </p>
      </div>
  </div>
  <div class="relative flex items-center justify-center h-full md:h-2/3">
    <div class="w-full md:w-3/4 absolute md:px-40 text-gray-100 font-light">
      <h1 class="max-md:text-3xl text-5xl my-5 text-center">Contact Me</h1>
      <p class="text-center mt-8">
        If you want to collaborate or ask a question, get in touch!
      </p>
      <div class="flex justify-center items-center mt-8">
          <a href="mailto:finlaymetcalfe@hotmail.com">
            <svg class="fill-white mr-5" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
          </a>
          <a href="https://steamcommunity.com/id/ofthemasses">
            <svg class="fill-white mr-5" height="2em" viewBox="0 0 256 259" xmlns="http://www.w3.org/2000/svg">
              <path d="M127.778579,0 C60.4203546,0 5.24030561,52.412282 0,119.013983 L68.7236558,147.68805 C74.5451924,143.665561 81.5845466,141.322185 89.1497766,141.322185 C89.8324924,141.322185 90.5059824,141.340637 91.1702465,141.377541 L121.735621,96.668877 L121.735621,96.0415165 C121.735621,69.1388208 143.425688,47.2457835 170.088511,47.2457835 C196.751333,47.2457835 218.441401,69.1388208 218.441401,96.0415165 C218.441401,122.944212 196.751333,144.846475 170.088511,144.846475 C169.719475,144.846475 169.359666,144.83725 168.99063,144.828024 L125.398299,176.205276 C125.425977,176.786507 125.444428,177.367738 125.444428,177.939743 C125.444428,198.144443 109.160732,214.575753 89.1497766,214.575753 C71.5836817,214.575753 56.8868387,201.917832 53.5655182,185.163615 L4.40997549,164.654462 C19.6326942,218.967277 69.0834655,258.786219 127.778579,258.786219 C198.596511,258.786219 256,200.847629 256,129.393109 C256,57.9293643 198.596511,0 127.778579,0 Z M80.3519677,196.332478 L64.6033732,189.763644 C67.389592,195.63131 72.2239585,200.539484 78.6359521,203.233444 C92.4932392,209.064206 108.472481,202.430791 114.247888,188.435116 C117.043333,181.663313 117.061785,174.190342 114.294018,167.400086 C111.526251,160.609831 106.295171,155.31417 99.5879487,152.491048 C92.9176301,149.695603 85.7767911,149.797088 79.5031858,152.186594 L95.777656,158.976849 C105.999942,163.276114 110.834309,175.122157 106.571948,185.436702 C102.318812,195.751247 90.574254,200.631743 80.3519677,196.332478 Z M202.30901,96.0424391 C202.30901,78.1165345 187.85204,63.5211763 170.092201,63.5211763 C152.323137,63.5211763 137.866167,78.1165345 137.866167,96.0424391 C137.866167,113.968344 152.323137,128.554476 170.092201,128.554476 C187.85204,128.554476 202.30901,113.968344 202.30901,96.0424391 Z M145.938821,95.9870838 C145.938821,82.4988323 156.779242,71.5661525 170.138331,71.5661525 C183.506646,71.5661525 194.347066,82.4988323 194.347066,95.9870838 C194.347066,109.475335 183.506646,120.408015 170.138331,120.408015 C156.779242,120.408015 145.938821,109.475335 145.938821,95.9870838 Z"></path>
            </svg>
          </a>
          <a href="https://discord.com/users/900286399440388106">
            <svg class="fill-white" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
              <g id="图层_2" data-name="图层 2">
                <g id="Discord_Logos" data-name="Discord Logos">
                  <g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White">
                    <path class="cls-1" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                  </g>
                </g>
              </g>
            </svg>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      imageIndex: 0,
      slidePath: 'src/assets/home-slides/'
    };
  },
  computed:{
    imageLinks()
    {
      return ['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg'];
      // Return list of all filenames inside slidePath
    },
    curImage(){
      return this.slidePath + this.imageLinks[this.imageIndex];
    }
  },
  methods:{
    nextSlide() {
      this.imageIndex = (this.imageIndex + 1) % this.imageLinks.length;
    },
    startSlides() {
      setInterval(this.nextSlide, 6000);
    }
  },
  mounted(){
    this.startSlides();
  }
}
</script>

<style scoped>
 .fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
 }
 .fade-enter, .fade-leave-to {
  opacity: 0;
 }
</style>

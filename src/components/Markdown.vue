<template>
  <div class="relative flex justify-center items-center">
    <h1 class="max-md:text-3xl text-5xl mt-8 mb-2 text-gray-100">{{this.$route.params.markdownPath }}</h1>
  </div>
  <div class="bg-gray-200 m-8 p-8 max-w rounded shadow-lg markdown-body" v-html="renderedMarkdown">
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import axios from 'axios';
import 'github-markdown-css/github-markdown-light.css';

export default {
  name: 'Markdown',
  data() {
    return {
      markdownContent: '',
      renderedMarkdown: ''
    };
  },
  methods: {
    async fetchMarkdownContent() {
      try {
        console.log(this.$route.params.markdownPath);
        const response = await axios.get('/vim-game-sdl2/'+this.$route.params.markdownPath+".md");
        this.markdownContent = response.data;
      }
      catch (e) {
        this.markdownContent = "Could not fetch markdown content: "+e;
      }
      this.renderMarkdown();
    },
    renderMarkdown() {
      const md = MarkdownIt();
      md.renderer.rules['link_open'] = function(tokens, idx, options, env, self){
        const hrefIndex = tokens[idx].attrIndex('href');
        let hrefVal = tokens[idx].attrs[hrefIndex][1];

        const isExternal = new URL(hrefVal, window.location.href).hostname !== window.location.hostname;

        if (!isExternal){
          hrefVal = '/#/markdown/' + hrefVal;
          tokens[idx].attrs[hrefIndex][1] = hrefVal;
        }
        return self.renderToken(tokens, idx, options);
      }
      this.renderedMarkdown = md.render(this.markdownContent);
    }
  },
  mounted() {
    this.fetchMarkdownContent()
  }
};
</script>

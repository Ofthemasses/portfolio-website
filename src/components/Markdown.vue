<template>
  <div>
    <vue-markdown :source="markdownContent" :options="options"/>
  </div>
</template>

<script>
// Import the vue-markdown-render component
import VueMarkdown from 'vue-markdown-render';
import axios from 'axios';

export default {
  name: 'Markdown',
  components: {
    VueMarkdown
  },
  data() {
    return {
      markdownContent: '[Hello, Markdown!](https://www.google.com/)',
      options: {
        renderer: {
          rules: {
          link_open: function (tokens, idx, options, env, self) {
            const token = tokens[idx]
            const href = token.attr[token.attrIndex('href')[1]]
            return `<router-link to="markdown/${href}">${md.utils.escapeHtml(token.content)}</router-link>`;
          } 
          }
        }
      }
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
    },
  },
  mounted() {
    this.fetchMarkdownContent()
  }
};
</script>

<style scoped>
/* Add any necessary styles for your component */
</style>


<template>
  <div class="relative flex justify-center items-center">
    <h1 class="max-md:text-3xl text-5xl mt-8 mb-2 text-gray-100">{{this.$route.params.markdownPath }}</h1>
  </div>
  <div class="bg-gray-200 m-8 p-8 max-w rounded shadow-lg">
    <vue-markdown class="markdown" :source="markdownContent" :options="options"/>
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

<style>
.markdown {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    padding: 20px;
}

.markdown h1 {
    font-size: 24px;
}

.markdown h2 {
    font-size: 22px;
}

.markdown h3 {
    font-size: 20px;
}

.markdown p {
    margin-bottom: 10px;
}

.markdown ul,
.markdown ol {
    margin-bottom: 10px;
}

.markdown li {
    margin-bottom: 5px;
}

.markdown a {
    color: #007bff;
    text-decoration: none;
}

.markdown a:hover {
    text-decoration: underline;
}

.markdown pre {
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
    margin-bottom: 15px;
}

.markdown code {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}

.markdown blockquote {
    border-left: 4px solid #007bff;
    padding-left: 15px;
    margin-left: 0;
}
</style>


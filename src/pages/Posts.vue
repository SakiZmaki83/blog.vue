<template>
<div class="container">
      <div class="row">
          <div class="col-6">
              <AppPosts :posts="posts"/>
          </div>
          
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppPosts from '../components/AppPosts.vue'
import { post } from '../services/PostService'

export default {
    components: {
        AppPosts
       
    },
    created(){
        console.log(this.getPosts())
    },
    data(){
        return {
            posts: []
        }
    },
    computed: {
        routePost () {
            return this.posts.find(post => post.id === this.$route.params.id)
        }
    },

    methods: {
        getPosts() {
            post.getPost()
            .then(response => this.posts = response.data)
        }
    }
   
}

</script>
<template>
  
    <div class="card">
      
        <div class="list-group-item" v-for="(post, key) in posts" :key="key">
            {{ post.title }}
       <router-link class="nav-link" :to="{ name:'single-post', params:{id:post.id}}">View post</router-link>
        </div>
    
    </div>
  
</template>

<script>
import { post } from '../services/PostService'
export default {
  props: ['posts'],
  
}
</script>
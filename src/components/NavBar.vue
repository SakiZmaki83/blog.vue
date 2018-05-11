<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <router-link class="navbar-brand" to="posts">PostsApp</router-link>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="posts">Posts</router-link>
          </li>
         
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
 
}
</script>
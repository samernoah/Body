<template>
<header class="header">
  <h2>Body</h2>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/body">Body</router-link> 
    <router-link to="/about">About</router-link>
  </nav>
  <hr/>
  </header>
</template>



<style>
.header{
  margin: 39px 0 0 0;
  }
  .header hr{
    width: 75%;
  }
.header h2{
  position: absolute;
  top: -5%;
  left: 4%;
  color: rgb(143, 210, 236);
  font-size: 4rem;
}
.header nav {
padding-right:130px;
text-align: right;
}
.header nav a{
  text-decoration: none;
}


</style>
<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center !important;
  color: #2c3e50;
  margin-top: 60px;
}
#email {
  width: 50%;
  margin: 0 auto;
}
#vista {
  background:#ff8a80;
  border-radius:1em;
  box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 10px;
  margin: 0 auto;
  padding: 2em;
  width: 80%;
}
</style>

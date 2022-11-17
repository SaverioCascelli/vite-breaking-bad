
<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
  <div class="row">
    <div class="col-1 logo">
        <img src="/Breaking_Bad_logo.svg" alt="Breaking Bad">
    </div>
    <div class="col-2">
        <h1>Breaking Bad Api</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>

    img{
        width: 100%;
        height: 100%;
    }

    .logo{
        height: 50px;
    }

    .row{
        color: white;
    }
</style>
<template>

  <router-view></router-view>
</template>

<script>
export default {
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}
:root{
  --bg-dark-color:#0B2447;
  --item-color:#19376D;
  --text-color:#576CBC;
  --text-lighti-color:#A5D7E8;
  --btn-color:rgb(4, 4, 215);
  --margin-side:5px 30px;
  --font-12:12px;
}
body{
  background-color: var(--bg-dark-color);
}
</style>
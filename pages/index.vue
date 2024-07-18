<template>
  <pre>

{{ applicationUI }}
</pre
  >
  <br>
  <br> 
  <br>
  <br>
  <br>

  <pre>

{{ marketing }}
</pre
  >
</template>

<script lang="ts" setup>
// const paths = ['application-ui', 'marketing', 'ecommerce'];
const applicationUI = await queryContent('/application-ui')
  .only(['_path', '_dir'])
  .find();
const marketing = await queryContent('/marketing').only(['_path', '_dir']).find();
</script>

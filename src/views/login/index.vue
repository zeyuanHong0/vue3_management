<template>
  <div class="login_container"></div>
</template>

<script lang="ts">
export default { name: 'login' }
</script>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const username = ref('')
const password = ref('')
</script>
<style lang="scss" scoped>
@import './scss/index.scss';
</style>

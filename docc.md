<script setup>
import { data } from './docc.data.ts'
</script>

<ul>
<li v-for="module in data">
  <a target="_self" :href="module.link">{{ module.text }}</a>
</li>
</ul>
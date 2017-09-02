<template>

  <div>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>


<script>
  import { Group, Cell } from 'vux'

  export default {
    name: 'f',
    components: {
      Group,
      Cell
    },
    data () {
      return {
        title: 'form test',
        value: 100
      }
    }
  }
</script>

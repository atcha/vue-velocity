<template>
    <div class="p-4 rounded" :class="alertClass">
        {{ content }}
    </div>
</template>

<script>
  export default {
    name: "Alert",
    props: ['type','content'],
    computed: {
      alertClass() {
        let returnClass = '';
        switch (this.type) {
          case 'succes':
            returnClass = 'text-green-normal bg-green-light';
            break;
          case 'info':
            break;
          case 'error':
            returnClass = 'text-red-normal bg-red-light';
            break;
          case 'warning':
            break;
        }
        return returnClass;
      }
    }
  }
</script>

<style scoped>

</style>
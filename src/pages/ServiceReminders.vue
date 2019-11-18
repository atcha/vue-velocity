<template>
	<main class="flex flex-wrap p-20 min-h-screen">
		<h1 class="text-2xl leading-none text-black-1 mr-2">Service Reminders</h1>
	</main>
</template>

<script>
  export default {
    name: "ServiceReminders",
    data() {
      return {
        stages: ['on-hold', 'in-progress', 'needs-review', 'approved'],
        blocks: [
          {
            id: 1,
            status: 'on-hold',
            title: 'Test',
          },
        ]
      }
    }
  }
</script>

<style scoped>
</style>
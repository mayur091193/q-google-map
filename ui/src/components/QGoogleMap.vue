<template>
    <div :style="{'height':height}" class="bg-blue">
        {{map_data}}
    </div>
</template>

<script>
    export default {
        name: "QGoogleMap",
        props: ['height','map_data','options']
    }
</script>

<style scoped>

</style>

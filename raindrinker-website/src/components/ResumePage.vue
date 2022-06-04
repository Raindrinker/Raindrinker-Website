<template>
    <div class="body">
        <ResumeDocument class="doc"/>
    </div>
</template>

<script>
    import ResumeDocument from "./ResumeDocument";
    export default {
        name: "ResumePage",
        components: {ResumeDocument}
    }
</script>

<style scoped>
    .body {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 64px 32px;

        overflow-y: auto;
    }

    .doc {
        -webkit-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
    }
</style>
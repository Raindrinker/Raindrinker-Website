<template>
    <div class="body">
      <div class="button-row">
        <div class="download-button" @click="onClickDownload">
          <img src="../assets/icons/download.png"/> DONWNLOAD AS PDF
        </div>
      </div>
      <VueHtml2pdf ref="html2pdf" filename="CV_Ferran_Ruiz_Sala" :manual-pagination="true" :margin="200">
        <section slot="pdf-content">
          <ResumeDocument class="doc"/>
        </section>
      </VueHtml2pdf>
      <ResumeDocument class="doc"/>
    </div>
</template>

<script>
    import ResumeDocument from "./ResumeDocument";
    import VueHtml2pdf from 'vue-html2pdf'
    export default {
        name: "ResumePage",
        components: {ResumeDocument, VueHtml2pdf},
        methods: {
          onClickDownload() {
            this.$refs.html2pdf.generatePdf()
          }
        }
    }
</script>

<style scoped>
    .body {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 32px 32px;

        overflow-y: auto;
    }

    .doc {
        -webkit-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
    }

    .button-row {
      width: 100%;
      display: flex;
    }

    .download-button {
      height: 32px;
      display: flex;
      font-family: Nunito, sans-serif;

      align-items: center;

      justify-content: left;

      margin-bottom: 12px;

      opacity: 0.5;

      cursor: pointer;

      transition: 0.2s;

      margin-left: 32px;
    }

    .download-button:hover {
      opacity: 1;
    }

    .download-button img {
      height: 20px;
      padding-right: 12px;
    }
</style>
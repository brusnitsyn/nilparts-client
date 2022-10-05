<script>
let EditorJS = null, ImageTool = null, ParagraphTool = null, TableTool = null,
    HeaderTool = null

if (process.client) {
  EditorJS = require('@editorjs/editorjs')
  ImageTool = require('@editorjs/image')
  ParagraphTool = require('@editorjs/paragraph')
  TableTool = require('@editorjs/table')
  HeaderTool = require('@editorjs/header')
}

export default {
  mounted() {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Начните печатать...',
      tools: {
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: `${this.$config.serverAPI}/blog/uploadImage`
            }
          }
        },
        header: {
          class: HeaderTool,
        },
        table: {
          class: TableTool,
        }
      }
    })
  }
}
</script>

<template>
  <div>
    <div class="sticky top-[49px] z-40 backdrop-filter backdrop-blur-md bg-white/50 dark:bg-slate-900/50 px-4">
      <div class="max-w-4xl mx-auto flex justify-between items-center py-2">
        <span>
          Новая новость
        </span>
        <Button type="secondary">
          Опубликовать
        </Button>
      </div>
    </div>
    <PageWrapper>
      <PageBody>
        <PageSection>
          <div class="">
            <div id="editor"></div>
          </div>
        </PageSection>
      </PageBody>
    </PageWrapper>
  </div>
</template>

<style scoped>
:deep(.ce-block__content),
:deep(.ce-toolbar__content),
:deep(.cdx-block){
  max-width: 56rem;
}
</style>

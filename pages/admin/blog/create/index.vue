<script>
let EditorJS = null,
  ImageTool = null,
  ParagraphTool = null,
  TableTool = null,
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
              byFile: `${this.$config.serverAPI}/blog/uploadImage`,
            },
          },
        },
        header: {
          class: HeaderTool,
        },
        table: {
          class: TableTool,
        },
      },
      i18n: {
        /**
         * @type {I18nDictionary}
         */
        messages: {
          /**
           * Other below: translation of different UI components of the editor.js core
           */
          ui: {
            blockTunes: {
              toggler: {
                'Click to tune': 'Нажмите, чтобы настроить',
                'or drag to move': 'или перетащите',
              },
            },
            inlineToolbar: {
              converter: {
                'Convert to': 'Конвертировать в',
              },
            },
            toolbar: {
              toolbox: {
                Add: 'Добавить',
              },
            },
          },

          /**
           * Section for translation Tool Names: both block and inline tools
           */
          toolNames: {
            Text: 'Параграф',
            Heading: 'Заголовок',
            List: 'Список',
            Warning: 'Примечание',
            Image: 'Изображение',
            Checklist: 'Чеклист',
            Quote: 'Цитата',
            Code: 'Код',
            Delimiter: 'Разделитель',
            'Raw HTML': 'HTML-фрагмент',
            Table: 'Таблица',
            Link: 'Ссылка',
            Marker: 'Маркер',
            Bold: 'Полужирный',
            Italic: 'Курсив',
            InlineCode: 'Моноширинный',
          },

          /**
           * Section for passing translations to the external tools classes
           */
          tools: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
             * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
             */
            warning: {
              // <-- 'Warning' tool will accept this dictionary section
              Title: 'Название',
              Message: 'Сообщение',
            },

            /**
             * Link is the internal Inline Tool
             */
            link: {
              'Add a link': 'Вставьте ссылку',
            },
            /**
             * The "stub" is an internal block tool, used to fit blocks that does not have the corresponded plugin
             */
            stub: {
              'The block can not be displayed correctly.':
                'Блок не может быть отображен',
            },
          },

          /**
           * Section allows to translate Block Tunes
           */
          blockTunes: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
             * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
             *
             * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
             */
            delete: {
              Delete: 'Удалить',
            },
            moveUp: {
              'Move up': 'Переместить вверх',
            },
            moveDown: {
              'Move down': 'Переместить вниз',
            },
          },
        },
      },
    })
  },
}
</script>

<template>
  <div>
    <div
      class="sticky top-[49px] z-40 backdrop-filter backdrop-blur-md bg-white/50 dark:bg-slate-900/50 px-4"
    >
      <div class="max-w-4xl mx-auto flex justify-between items-center py-2">
        <span> Новая новость </span>
        <Button type="secondary"> Опубликовать </Button>
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
:deep(.cdx-block) {
  max-width: 56rem;
}
</style>

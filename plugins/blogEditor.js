import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Image from '@editorjs/image'

export default (context, inject) => {
  const defaultOptions = {
    id: '',
    data: {},
    placeholder: '',
    onChange: () => {
    },
  }

  const editor = (options = defaultOptions) => {
    return new EditorJS({
      placeholder: options.placeholder,
      /**
       * Id of Element that should contain Editor instance
       */
      holder: options.id,
      /**
       * Available Tools list.
       * Pass Tool's class or Settings object for each Tool you want to use
       */
      tools: {
        header: Header,
        image: Image,
      },
      i18n: {
        messages: {
          ui: {
            "toolbar": {
              "toolbox": {
                "Add": "Добавить"
              }
            }
          },
          toolNames: {
            "Text": "Параграф",
            "Heading": "Заголовок",
            "List": "Список",
            "Warning": "Примечание",
            "Checklist": "Чеклист",
            "Quote": "Цитата",
            "Code": "Код",
            "Delimiter": "Разделитель",
            "Raw HTML": "HTML-фрагмент",
            "Table": "Таблица",
            "Link": "Ссылка",
            "Marker": "Маркер",
            "Bold": "Полужирный",
            "Italic": "Курсив",
            "InlineCode": "Моноширинный",
          },
          blockTunes: {
            "delete": {
              "Delete": "Удалить"
            },
            "moveUp": {
              "Move up": "Переместить вверх"
            },
            "moveDown": {
              "Move down": "Переместить вниз"
            }
          },
        }
      },
      /**
       * Previously saved data that should be rendered
       */
      data: options.data || {},
      onChange(data) {
        // pass in function from component to run on change
        options.onChange(data)
      }
    })
  }
}

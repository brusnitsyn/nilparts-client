export function debounce(fn, delay) {
  let timeoutID = null
  return function () {
    clearTimeout(timeoutID)
    const args = arguments
    const that = this
    timeoutID = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}

export const defaultDelimiters = /[-!$%^&*()_+|~=`{}[\]:";'<>?,./\\ ]/
export function unmaskText(text) {
  return text
    ? String(text).replace(new RegExp(defaultDelimiters, 'g'), '')
    : text
}

export function deepClone(source) {
  if (!source || typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  for (let keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}

export const findMax = (array, field) => {
  if (!array || array.lenght === 0) return 1
  return Math.max(...array.map((o) => o[field]), 0)
}

export const varToString = (varObj) => Object.keys(varObj)[0]

export function findObjectWithValue(obj, key, value) {
  if (obj[key] === value) {
    return obj
  } else {
    let keys = Object.keys(obj)
    for (let i = 0, len = keys.length; i < len; i++) {
      let k = keys[i]
      if (obj[k] && typeof obj[k] === "object") {
        let found = findObjectWithValue(obj[k], key, value);
        if (found) {
          return found
        }
      }
    }
  }
}

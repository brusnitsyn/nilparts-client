export function makeFilter(filterName, filterValue, filterType = null) {
  if (filterType === 'filter') {
    return { filter: { [filterName]: filterValue } }
  } else {
    return { [filterName]: filterValue }
  }
}

export function getPropsObject(source) {
  if (!source || typeof source !== 'object') throw new Error('error arguments')

  let props = {}
  for (let keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        props = Object.assign(props,
          getPropsObject(source[keys]),
        )
      } else {
        props = Object.assign(props, { [keys]: source[keys] })
      }
    }
  }

  return props
}


export function formatterQuery(source) {
  if (!source || typeof source !== 'object') throw new Error('error arguments')

  let query = {}
  for (let keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        query = Object.assign(query,
          {[keys]: [getPropsObject(source[keys])]},
        )
      } else {
        query = Object.assign(query, { [keys]: source[keys] })
      }
    }
  }

  return query
}

<script>
export default {
  props: {
    items: Array,
    columns: Array,
    filterKey: String
  },
  data() {
    const sortOrders = {};
    this.columns.forEach(function(key) {
      sortOrders[key] = 1;
    });
    return {
      sortKey: '',
      sortOrders
    }
  },
  computed: {
    filteredData() {
      const sortKey = this.sortKey
      const filterKey = this.filterKey && this.filterKey.toLowerCase()
      const order = this.sortOrders[sortKey] || 1
      let items = this.items
      if (filterKey) {
        items = items.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            )
          })
        })
      }
      if (sortKey) {
        items = items.slice().sort(function(a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return items
    },
    sortOrders() {
      const columnSortOrders = {}

      this.columns.forEach(function(key) {
        columnSortOrders[key] = 1
      })

      return columnSortOrders
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
}
</script>

<template>
  <table>
    <thead>
    <tr>
      <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey === key }">
        {{ capitalize(key) }}
        <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="entry in filteredData">
      <td v-for="key in columns">
        {{ entry[key] }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

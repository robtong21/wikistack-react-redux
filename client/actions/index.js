export const add = (page) => {
  return {
    type: 'ADD_PAGE',
    page
  }
}

export const fetch = (pages) => {
  return {
    type: 'FETCH_PAGES',
    pages
  }
}

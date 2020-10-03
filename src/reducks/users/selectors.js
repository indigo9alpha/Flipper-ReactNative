import {createSelector} from 'reselect'

const usersSelector = (state) => state.users;

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
)

export const getIsSignedIn = createSelector(
  [usersSelector],
  state => state.isSignedIn
)

export const getPages = createSelector(
  [usersSelector],
  state => state.pages
)

export const getBooks = createSelector(
  [usersSelector],
  state => state.books
)
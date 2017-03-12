import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { StyleSheet, css } from 'aphrodite'
import * as Colors from '../styles/base'

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryColor,
    width: '100%',
    borderStyle: 'none',
    height: '50px',
    color: Colors.indigo,
    cursore: 'pointer'
  },
  loading: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: Colors.green
  }
})

export default class List extends Component {
  static propTypes = {
    loadingLabel: PropTypes.string.isRequired,
    pageCount: PropTypes.number,
    renderItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onLoadMoreClick: PropTypes.func.isRequired,
    nextPageUrl: PropTypes.string
  }

  static defaultProps = {
    isFetching: true,
    loadingLabel: 'Loading...'
  }

  renderLoadMore () {
    const { isFetching, onLoadMoreClick } = this.props
    return (
      <button className={css(styles.button)}
              onClick={onLoadMoreClick}
              disabled={isFetching}>
        {isFetching ? 'Loading...' : 'Load More'}
      </button>
    )
  }

  render () {
    const {
      isFetching, nextPageUrl, pageCount,
      items, renderItem, loadingLabel
    } = this.props

    const isEmpty = items.length === 0
    if (isEmpty && isFetching) {
      return <div className={css(styles.loading)}>{loadingLabel}</div>
    }

    const isLastPage = !nextPageUrl
    if (isEmpty && isLastPage) {
      return <div className={css(styles.loading)}>Nothing here!</div>
    }

    return (
      <div>
        {items.map(renderItem)}
        {pageCount > 0 && !isLastPage && this.renderLoadMore()}
      </div>
    )
  }
}

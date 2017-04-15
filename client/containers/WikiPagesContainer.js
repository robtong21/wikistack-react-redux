import { connect } from 'react-redux'
import WikiPages from '../components/WikiPages'

const mapStateToProps = (state) => {
  console.log("state in WikiPagesContainer", state)
  return {
    // pages: [{title: "Another one bites the dust", id: 1}, {title: "hey blue", id: 2}]
    pages: state
  }
}

const WikiPagesContainer = connect(mapStateToProps, null)(WikiPages)

export default WikiPagesContainer

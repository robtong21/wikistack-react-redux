import { connect } from 'react-redux'
import AddPage from '../components/AddPage'

const mapStateToProps = (state) => {
  console.log("state in AddPageContainer:", state)
  return {
    pages: state.pages,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleAddPage: (page) => {
//       dispatch(addPage(page))
//     }
//   }
// }

const AddPageContainer = connect(mapStateToProps, null)(AddPage)

export default AddPageContainer

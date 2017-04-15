import React, { Component } from 'react';
import { addPage } from '../dispatchers'
import store from '../index'

export default class AddPage extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const page = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      title: evt.target.title.value,
      content: evt.target.content.value,
      status: evt.target.status.value,
      tags: evt.target.tags.value
    }
    console.log("hello!")
    store.dispatch(addPage(page))
    evt.target.name.value = ''
    evt.target.email.value = ''
    evt.target.title.value = ''
    evt.target.content.value = ''
    evt.target.status.value = ''
    evt.target.tags.value = ''
  }

  render () {
    return (
      <div>
        <h3>Add a Page</h3>
        <hr />
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="name" className="col-sm-2 control-label">Author Name</label>
            <div className="col-sm-10">
              <input name="name" type="text" className="form-control"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="col-sm-2 control-label">Author Email</label>
            <div className="col-sm-10">
              <input name="email" type="text" className="form-control"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="title" className="col-sm-2 control-label">Page Title</label>
            <div className="col-sm-10">
              <input name="title" type="text" className="form-control"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="content" className="col-sm-2 control-label">Content</label>
            <div className="col-sm-10">
              <textarea name="content"></textarea>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="status" className="col-sm-2 control-label">Status</label>
            <div className="col-sm-10">
              <select name="status">
                <option>open</option>
                <option>closed</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tags" className="col-sm-2 control-label">Tags</label>
            <div className="col-sm-10">
              <input name="tags" type="text" className="form-control" />
            </div>
          </div>

          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary">submit</button>
          </div>

        </form>
      </div>
    );
  }
}

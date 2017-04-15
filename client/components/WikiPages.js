import React, { Component } from 'react';

export default class WikiPages extends Component {

  render () {
    console.log("this props in WikiPages", this.props)
    console.log("this state in WikiPages", this.state)
    return (
      <div>
        <h3>Pages</h3>
        <hr />
        <form>
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </form>
        <hr />
        <ul className="list-unstyled">
          <ul>
            {
              this.props.pages.map(page => {
                return (
                  <li key={page.id}>
                    <a href="">{page.title}</a>
                  </li>
                )
              })
            }
          </ul>
        </ul>
      </div>
    );
  }
}

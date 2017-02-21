import React, { Component } from 'react';

export default class WikiPages extends Component {

  render () {
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
              [].map(a => {
                return (
                  <li>
                    <a href="">{ page.name }</a>
                  </li>
                );
              })
            }
          </ul>
        </ul>
      </div>
    );
  }
}

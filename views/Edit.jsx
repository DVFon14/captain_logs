import React, { Component } from "react";

class Edit extends Component {
  render() {
    const { log } = this.props;
    console.log(`edit line 6 ${log}`);
    return (
      <div>
        <nav>
          <a href='/logs'> Changed my mind</a>
        </nav>
        <h1>Edit Log</h1>
        <form
          action={`/logs/${this.props.log.id}?_method=PUT`}
          method='POST'
        >
          Title: <input type='text' name='title' defaultValue={log.title} />{" "}
          <br />
          Entry: <input type='text' name='entry' defaultValue={log.entry}/>{" "}
          <br />
          Ship is Broken:{" "}
          {log.shipIsBroken ? (
            <input type='checkbox' name='shipIsBroken' defaultChecked />
          ) : (
            <input type='checkbox' name='shipIsBroken' />
          )}{" "}
          <br />
          <input type='submit' value='submit changes' />
        </form>
      </div>
    );
  }
}

export default Edit;




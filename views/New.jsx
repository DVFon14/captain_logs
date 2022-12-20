const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Logs Page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/logs" method="POST">
              Title: <input type="text" name="title" /><br/>
              Entry: <input type="text" name="entry" /><br/>
              Click if ship is broken: <input type="checkbox" name="shipIsBroken" /><br/>
              <input type="submit" value="Create Log"/>
            </form>
            <a href="/logs">I don't want to create a new log</a>
        </div>);
    }
  }

// module.exports = New;
export default New
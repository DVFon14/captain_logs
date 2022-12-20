import React, { Component } from "react";

class Index extends Component {
  render() {
    const { logs } = this.props;
    console.log(this.props);

    return (
      <div>
        <nav>
          <a href="/logs/new"> Create a New Log</a>
        </nav>
        
        <h1>Logs Index Page</h1>

        <ul>{/* loop through the logs array using map */}
        
        {logs.map((logsElement)=>{
            return (
                <li>The <a href={`/logs/${logsElement.id}`}>{logsElement.title}</a> <br />
                {logsElement.entry } <br />
                    <br />
                {logsElement.shipIsBroken ? `The ship is broken` : `The ship is not broken`}
                <br />

                
                <form action={`/logs/${logsElement.id}?_method=DELETE`} method="POST">
                  <input type ='submit' value ='DELETE'/>
                </form>


                <a href ={`/logs/${logsElement.id}/edit`}>Edit this Log</a>
                </li>
            )
        })}
        
        </ul>
      </div>
    );
  }
}

module.exports = Index;


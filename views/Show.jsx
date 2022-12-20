const React = require('react')

    class Show extends React.Component {
       render () {
         console.log("Show line 5:", this.props)
         const log = this.props.log;
         // const { log } = this.props;

         return(
            <div>
               <nav>
                  <a href='/logs'>Back to logs list</a>
               </nav>
               <h1>Show Page</h1>
               <p>
               The {log.title} is {log.entry}. {/*try putting these in <p></p> to see how it changes the presentation*/}
               {log.shipIsBroken? ' It is ready to eat.': ' It is not ready to eat...wait a little longer.'}
               </p>
            </div>
         )
 
        }
     }
     module.exports  = Show;
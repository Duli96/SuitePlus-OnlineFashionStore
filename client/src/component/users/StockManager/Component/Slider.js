
import React, { Component } from 'react';

export default class Slider extends Component {
    render() {

      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        return (
        <div>
          <main role="main">
            <section class="jumbotron text-center">
              <div class="container">
                <h1 style={{fontSize:"70px"}}><b>Dashboard</b></h1>
                <h4>Welcome Pasindu </h4><br />              
                <p class="lead text-muted"><b>Current Date: {date} </b></p>                
                <p>
                  <a href="#" class="btn btn-primary my-2">Production List</a>
                  <span>&nbsp;&nbsp;</span>
                  <a href="#" class="btn btn-secondary my-2">Item Operation</a>
                </p>
              </div>            
            </section>
          </main>
        </div>
        )
    }
}

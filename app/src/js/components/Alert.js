/** @jsx React.DOM */
'use strict';
var React = require('react');
 
 

var Menu = React.createClass({

  handleClick: function(event) {
      this.props.hideAlert();
  },

  createAlert: function() {
      return {__html: this.props.alert.alertMessage};
  },

  render: function() {
    var alertClass = 'alert fade show';
    switch(this.props.alert.alertType){
      case 1:
        alertClass+= ' alert-danger';
      break;
      case 2:
        alertClass+= ' alert-warning';
      break;
      case 3:
        alertClass+= ' alert-info';
        break;
      default:

    }
    return <div className={alertClass} role="alert">
            <button type="button" className="close" onClick={this.handleClick} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Oh snap!</strong> <span dangerouslySetInnerHTML={this.createAlert()}/>
          </div>
  }

});

module.exports = Menu;

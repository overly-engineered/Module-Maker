/** @jsx React.DOM */
'use strict';
var React = require('react'),
    RoundelType = require('./RoundelType');


var RoundelEdit = React.createClass({

  handleEdit: function(event){
    for(var propertyName in this.props.currentContent) {
      if(propertyName = event.target.id){
        this.props.currentContent[propertyName] = event.target.checked;
      }
    }
    this.props.editMade(this.props.currentContent);
  },

  render: function() {
    var roundelDropDown = '';
    if(this.props.currentContent.roundel){
      roundelDropDown = <RoundelType currentContent={this.props.currentContent} editMade={this.props.editMade}/>
    } else {
      this.props.currentContent.roundelType = 1;
    }
    return (
      <div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" id="roundel" onChange={this.handleEdit}/>
              Roundel
            </label>
          </div>
        </div>
        {roundelDropDown}
      </div>
    );
  }

});

module.exports = RoundelEdit;

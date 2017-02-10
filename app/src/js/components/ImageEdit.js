/** @jsx React.DOM */
'use strict';
var React = require('react');


var ImageEdit = React.createClass({

  handleEdit: function(event){
    for(var propertyName in this.props.currentContent) {
      if(propertyName = event.target.id){
        this.props.currentContent[propertyName] = event.target.value;
      }
    }
    this.props.editMade(this.props.currentContent);
  },

  render: function() {
    return (
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <textarea onChange={this.handleEdit} type="text" className="form-control" id="image" aria-describedby="imageHelp" value={this.props.currentContent.image}/>
        <small id="imageHelp" className="form-text text-muted">Enter the image for the asset</small>

        <label htmlFor="imageDescription">Image Description</label>
        <textarea onChange={this.handleEdit} type="text" className="form-control" id="imageDescription" aria-describedby="imageDescriptionHelp" value={this.props.currentContent.imageDescription}/>
        <small id="imageDescriptionHelp" className="form-text text-muted">Enter the image description for the asset</small>
      </div>
    );
  }

});

module.exports = ImageEdit;

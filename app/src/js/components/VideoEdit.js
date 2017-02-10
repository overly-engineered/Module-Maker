/** @jsx React.DOM */
'use strict';
var React = require('react');


var VideoEdit = React.createClass({

  handleEdit: function(event){
    for(var propertyName in this.props.currentContent) {
      if(propertyName = event.target.id){
        if(event.target.id == 'color'){
          this.props.currentContent[propertyName] = event.target.checked;
        } else {
          this.props.currentContent[propertyName] = event.target.value;
        }
      }
    }
    this.props.editMade(this.props.currentContent);
  },

  render: function() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="videoThumbnail">Video Thumbnail</label>
          <input onChange={this.handleEdit} type="text" className="form-control" id="videoThumbnail" aria-describedby="videoThumbnailHelp" value={this.props.currentContent.videoThumbnail}/>
          <small id="videoThumbnailHelp" className="form-text text-muted">Add the image code for the videos thumbnail</small>
          <label htmlFor="heading">Video Code</label>
          <input onChange={this.handleEdit} type="text" className="form-control" id="videoCode" aria-describedby="videoCodeHelp" value={this.props.currentContent.videoCode}/>
          <small id="videoCodeHelp" className="form-text text-muted">Enter the Iframe received from Brightcoves website</small>
          <br />
        </div>
      </div>
    );
  }

});

module.exports = VideoEdit;

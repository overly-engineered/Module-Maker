/** @jsx React.DOM */
'use strict';
var React = require('react');


var CopyEdit = React.createClass({

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
          <label htmlFor="heading">Heading</label>
          <input onChange={this.handleEdit} type="text" className="form-control" id="heading" aria-describedby="headingHelp" value={this.props.currentContent.heading}/>
          <small id="headingHelp" className="form-text text-muted">Enter the heading for the asset (accepts HTML)</small>
          <label htmlFor="heading">Sub-Heading / Sub Copy</label>
          <input onChange={this.handleEdit} type="text" className="form-control" id="subHeading" aria-describedby="subHeadingHelp" value={this.props.currentContent.subHeading}/>
          <small id="subheadinghelp" className="form-text text-muted">Enter the sub-heading or sub copy for the asset this includes price sections (not always applicable) (accepts HTML)</small>
          <label htmlFor="bodyCopy">Body copy</label>
          <input onChange={this.handleEdit} type="text" className="form-control" id="bodyCopy" aria-describedby="bodyHelp" value={this.props.currentContent.bodyCopy}/>
          <small id="bodyHelp" className="form-text text-muted">Enter the body copy for the asset (accepts HTML)</small>
          <label htmlFor="bodyCopyTwo">Body copy Hidden</label>
          <input onChange={this.handleEdit} type="text" className="form-control" id="bodyCopyTwo" aria-describedby="bodyCopyTwoHelp" value={this.props.currentContent.bodyCopyTwo}/>
          <small id="bodyCopyTwoHelp" className="form-text text-muted">Enter the second body copy for the asset (accepts HTML) this is normally used for content which extends or slides down</small>
          <br />
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" id="color" onChange={this.handleEdit}/>
              White text
            </label>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = CopyEdit;

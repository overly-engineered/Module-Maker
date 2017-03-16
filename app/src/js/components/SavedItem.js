/** @jsx React.DOM */
'use strict';
var React = require('react');

var SavedItem = React.createClass({

  handleModuleView: function(){
    this.props.viewModule(this.props);
  },
  createIframe: function(){
    var iframe = this.refs.frame.getDOMNode();
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write('');
    iframe.contentWindow.document.close();
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var parser = new DOMParser();
    var html = parser.parseFromString(this.props.data.img, "text/html");
    var childNodes = $(html.body).children();
    $(childNodes).each(function(index, el) {
      $(iframeDocument.body).append(el);
    });
  },
  componentDidMount: function(){
    this.createIframe();
  },
  componentDidUpdate: function(){
    this.createIframe();
  },
  viewSave: function(){
    this.props.viewSavedModule(this.props);
  },
  getCode: function(){
    var parser = new DOMParser();
    this.props.getSavedCode(parser.parseFromString(this.props.data.img, "text/html"), this.props.data.state, this.props.module);
  },
  deleteSave: function() {
    this.props.deleteSaveItem(this.props.key);
  },
  render: function() {
  	//onClick={this.handleModuleView}
    var dateObj = new Date(this.props.data.date)
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate = year + "/" + month + "/" + day;
    return (
      
        <div className="list-group-item" key={this.props.key}>
        	<div className="row saveItem">
        		<div className="col-md-5">
  	      		<div className="saveFrameContainer">
                <iframe ref="frame"/>
  	      		</div>
        		</div>
        		<div className="col-md-5">
  				<h4>{this.props.data.name}</h4>
  				<p>Date Saved: {newdate}<br/>
  				Site: {this.props.site.name}<br/>
  				Type: {this.props.module.name}<br/>
          Promo: {this.props.data.state.promoID} <br/>
          Page: {this.props.data.state.currentPage}</p>
        		</div>
        		<div className="col-md-2">
        			<div className="btn btn-primary btn-lg btn-block" onClick={this.getCode}>Get Code</div>
        			<div className="btn btn-info btn-lg btn-block" onClick={this.viewSave}>Edit</div>
              <div className="btn btn-danger btn-lg btn-block" onClick={this.deleteSave}>Delete</div>
        		</div>
        	</div>
        </div>
      
    );
  }

});

module.exports = SavedItem;

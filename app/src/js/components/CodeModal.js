/** @jsx React.DOM */
'use strict';

var React = require('react');

var CodeModal = React.createClass({
  
  copyTheCode: function(event){
    this.refs.codeModalBody.getDOMNode()
    this.refs.codeModalBody.getDOMNode().setAttribute('contenteditable', "true");
    this.refs.codeModalBody.getDOMNode().focus();
    try {
      document.execCommand('copy');
      this.refs.codeModalBody.getDOMNode().setAttribute('contenteditable', "false");
      this.refs.successAlert.getDOMNode().style.display = 'block';
    }
    catch(error) {
      alert(error);
    }
    
  },
  focusElement: function(){
    document.execCommand('selectAll',false,null);
  },
  saveModule: function(){
    if(this.refs.saveName.state.value == '' || this.refs.saveName.state.value == null || this.refs.saveName.state.value == undefined){
      var input = this.refs.saveName.getDOMNode();
      input.style.borderColor = 'red';
      alert("Enter a name for the module.\n\nEg. 'Hero Cellar Promo 2'")
    } else {
      this.props.saveModule(this.refs.saveName.state.value);
      this.refs.successSaveAlert.getDOMNode().style.display = 'block';
      var input = this.refs.saveName.getDOMNode();
      input.value = '';
    }
    
  },
  render: function() {
    var style = {display: "none"};
    var saveHTML = '';
    if(!this.props.state.currentContent.savedState){
      saveHTML = <div className="row">
                <div className="col-6 pr-0">
                  <input className="form-control saveForm" type="text" placeholder="Enter a save name" ref="saveName"/>
                </div>
                <div className="col-6 pl-0">
                  <button type="button" className="btn btn-success btn-lg btn-block submitSave" onClick={this.saveModule}>Save module</button><br/>
                </div>
              </div>;
    }
    return (
      <div className="modal fade" ref="codeModal" id="codeModal">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New Module</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.copyTheCode}>Copy the code</button><br/>
              {saveHTML}
              <div ref="successAlert" style={style} className="alert alert-success" role="alert"><strong>Code Copied</strong></div>
              <div ref="successSaveAlert" style={style} className="alert alert-success" role="alert"><strong>Module Saved</strong></div>
              <p onFocus={this.focusElement} ref="codeModalBody" id="codeModalBody"disabled></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = CodeModal;

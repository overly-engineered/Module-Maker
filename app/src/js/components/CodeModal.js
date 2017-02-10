/** @jsx React.DOM */
'use strict';

var React = require('react');

var CodeModal = React.createClass({
  
  copyTheCode: function(event){
    document.getElementById('codeModalBody').setAttribute('contenteditable', "true");
    document.getElementById('codeModalBody').focus();
    try {
      document.execCommand('copy');
      document.getElementById('codeModalBody').setAttribute('contenteditable', "false");
      document.getElementById('successAlert').style.display = 'block';
    }
    catch(error) {
      alert(error);
    }
    
  },
  focusElement: function(){
    document.execCommand('selectAll',false,null);
  },
  render: function() {
    var style = {display: "none"};
    return (
      <div className="modal fade" id="codemodal">
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
              <div id="successAlert" style={style} className="alert alert-success" role="alert"><strong>Code Copied</strong></div>
              <p onFocus={this.focusElement} id="codeModalBody" disabled></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = CodeModal;

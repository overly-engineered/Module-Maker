/** @jsx React.DOM */
'use strict';
var React = require('react'),
ModuleDemo = require('./ModuleDemo'),
ModuleEdit = require('./ModuleEdit'),
ModuleItem = require('./ModuleItem');
    // UsernameLabel = require('./UsernameLabel'),
    // LogOutButton = require('./LogOutButton'),
    // NewBoardButton = require('./NewBoardButton');


var ModuleView = React.createClass({
  
  render: function() {
    
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h2 className="display-4">{this.props.currentModule.name}</h2>
            </div>
          </div>
          <div className="row">
            <div id="demoColumn" className="col-sm-12 col-md-8">
              <ModuleDemo currentContent={this.props.currentContent} 
                          currentModule={this.props.currentModule} 
                          currentSite={this.props.currentSite}
                          editMade={this.props.editMade}
                          resetCta={this.props.resetCta}
                          setIframeSize={this.props.setIframeSize}/>
            </div>
            <div className="col-sm-12 col-md-4">
              <ModuleEdit currentContent={this.props.currentContent} 
                          editMade={this.props.editMade} 
                          getCode={this.props.getCode} 
                          addCta={this.props.addCta} 
                          removeCta={this.props.removeCta}
                          currentModule={this.props.currentModule}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = ModuleView;

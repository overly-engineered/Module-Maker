/** @jsx React.DOM */
'use strict';
var React = require('react'),
ModuleList = require('./ModuleList'),
ModuleView = require('./ModuleView');


var MainSection = React.createClass({

  render: function() {
    var html = '';
    if(this.props.view == 'menu' || this.props.view == 'subMenu'){
      html= <ModuleList modules={this.props.modules} viewModule={this.props.viewModule} viewSubMenu={this.props.viewSubMenu} view={this.props.view} currentModule={this.props.currentModule}/>
    }else{
      html= <ModuleView currentModule={this.props.currentModule}
                        currentContent={this.props.currentContent}
                        editMade={this.props.editMade}
                        getCode={this.props.getCode}
                        currentSite={this.props.currentSite}
                        addCta={this.props.addCta}
                        removeCta={this.props.removeCta} 
                        view={this.props.view}
                        resetCta={this.props.resetCta}
                        setIframeSize={this.props.setIframeSize}
                        />
    }
    return (
      <div>{html}</div>
    );
  }

});

module.exports = MainSection;

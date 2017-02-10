/** @jsx React.DOM */
'use strict';
var React = require('react'),
    ModuleItem = require('./ModuleItem'),
    ModuleCategory = require('./ModuleCategory');


var ModuleList = React.createClass({

  render: function() {
    if(this.props.view == 'subMenu'){
      var moduleItems = this.props.modules.map(function(item) {
        if(item.group == this.props.currentModule.groupIndex){
          return <ModuleItem key={item.id}
                          name={item.name}
                          width={item.width}
                          viewModule={this.props.viewModule}
                          description={item.description}
                          multiCta = {item.multiCta}
                          depth = {item.depth}
                          sizeable = {item.sizeable} />
        } else {
          return '';
        }
        
      }.bind(this))
    } else {
      var moduleItems = this.props.modules.map(function(item) {

        if(item.hasOwnProperty('group')){
          return '';
        } else if(item.category){

          return <ModuleCategory key={item.id}
                          name={item.name}
                          width={item.width}
                          viewModule={this.props.viewModule}
                          description={item.description}
                          multiCta = {item.multiCta}
                          depth = {item.depth}
                          sizeable = {item.sizeable}
                          viewSubMenu={this.props.viewSubMenu}
                          groupIndex={item.groupIndex}/>

        } else {
          return <ModuleItem key={item.id}
                          name={item.name}
                          width={item.width}
                          viewModule={this.props.viewModule}
                          description={item.description}
                          multiCta = {item.multiCta}
                          depth = {item.depth}
                          sizeable = {item.sizeable} />
        }
        
      }.bind(this))
    }
    return (
      <ul className="list-group">
        {moduleItems}
      </ul>
    );
  }

});

module.exports = ModuleList;

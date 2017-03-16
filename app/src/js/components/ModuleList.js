/** @jsx React.DOM */
'use strict';
var React = require('react'),
    ModuleItem = require('./ModuleItem'),
    ModuleCategory = require('./ModuleCategory');


var ModuleList = React.createClass({

  render: function() {
    var moduleItems = [];
    if(this.props.view == 'subMenu'){
      for(var index in this.props.modulesObj){
        if(this.props.modulesObj[index].group == this.props.currentModule.groupIndex){
          if(this.props.currentSite == 3){
            if(this.props.modulesObj[index].tmg == true){
              moduleItems.push(
                <ModuleItem key={index}
                          name={this.props.modulesObj[index].name}
                          viewModule={this.props.viewModule}
                          description={this.props.modulesObj[index].description}/>
              );
            }
          } else {
            moduleItems.push(
                <ModuleItem key={index}
                          name={this.props.modulesObj[index].name}
                          viewModule={this.props.viewModule}
                          description={this.props.modulesObj[index].description}/>
            )
          }
        }
      }

    } else {

      var moduleItems= [];
      
      for(var index in this.props.modulesObj){

        if(!this.props.modulesObj[index].hasOwnProperty('group') && this.props.modulesObj[index].category){

          if(this.props.currentSite == 3){
            if(this.props.modulesObj[index].tmg == true) {
              moduleItems.push( <ModuleCategory key={index}
                          name={this.props.modulesObj[index].name}
                          width={this.props.modulesObj[index].width}
                          viewModule={this.props.viewModule}
                          description={this.props.modulesObj[index].description}
                          multiCta = {this.props.modulesObj[index].multiCta}
                          depth = {this.props.modulesObj[index].depth}
                          sizeable = {this.props.modulesObj[index].sizeable}
                          viewSubMenu={this.props.viewSubMenu}
                          groupIndex={this.props.modulesObj[index].groupIndex}/>);
            }
          } else {
            moduleItems.push( <ModuleCategory key={index}
                          name={this.props.modulesObj[index].name}
                          width={this.props.modulesObj[index].width}
                          viewModule={this.props.viewModule}
                          description={this.props.modulesObj[index].description}
                          multiCta = {this.props.modulesObj[index].multiCta}
                          depth = {this.props.modulesObj[index].depth}
                          sizeable = {this.props.modulesObj[index].sizeable}
                          viewSubMenu={this.props.viewSubMenu}
                          groupIndex={this.props.modulesObj[index].groupIndex}/>);
          }

        } else if(!this.props.modulesObj[index].hasOwnProperty('group')){

          if(this.props.currentSite == 3){
            if(this.props.modulesObj[index].tmg == true) {
              moduleItems.push( <ModuleItem key={index}
                            name={this.props.modulesObj[index].name}
                            width={this.props.modulesObj[index].width}
                            viewModule={this.props.viewModule}
                            description={this.props.modulesObj[index].description}
                            multiCta = {this.props.modulesObj[index].multiCta}
                            depth = {this.props.modulesObj[index].depth}
                            sizeable = {this.props.modulesObj[index].sizeable} />);
            }
          } else {
            moduleItems.push( <ModuleItem key={index}
                            name={this.props.modulesObj[index].name}
                            width={this.props.modulesObj[index].width}
                            viewModule={this.props.viewModule}
                            description={this.props.modulesObj[index].description}
                            multiCta = {this.props.modulesObj[index].multiCta}
                            depth = {this.props.modulesObj[index].depth}
                            sizeable = {this.props.modulesObj[index].sizeable} />);
          }

        }
      }
    }
    return (
      <ul className="list-group">
        {moduleItems}
      </ul>
    );
  }

});

module.exports = ModuleList;

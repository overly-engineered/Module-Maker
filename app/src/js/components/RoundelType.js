/** @jsx React.DOM */
'use strict';
var React = require('react');


var RoundelContent = React.createClass({

  handleEdit: function(event){
    for(var propertyName in this.props.currentContent) {
      if(propertyName = event.target.id){
        if(propertyName == 'roundelType'){
          this.props.currentContent[propertyName] = parseInt(event.target.value);
        } else {
          this.props.currentContent[propertyName] = event.target.value;
        }

      }
    }
    this.props.editMade(this.props.currentContent);
  },

  render: function() {

    var inputString = '';

    switch (this.props.currentContent.roundelType) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
          inputString =
            <div className="form-group">
              <label htmlFor="dataRoundel">Roundel Text top</label>
              <input onChange={this.handleEdit} type="text" className="form-control" id="dataRoundel" aria-describedby="dataRoundelHelp" value={this.props.currentContent.dataRoundel}/>
              <small id="dataRoundelHelp" className="form-text text-muted">Enter the Roundel text for the asset</small>
              <label htmlFor="dataRoundelAmount">Roundel Text bottom</label>
              <input onChange={this.handleEdit} type="text" className="form-control" id="dataRoundelAmount" aria-describedby="dataRoundelAmountHelp" value={this.props.currentContent.dataRoundelAmount}/>
              <small id="dataRoundelAmountHelp" className="form-text text-muted">Enter the Roundel text amount for the asset</small>
            </div>;
        break;

        case 10:
          inputString =
            <div className="form-group">
              <label htmlFor="dataRoundelTop">Roundel Text top</label>
              <input onChange={this.handleEdit} type="text" className="form-control" id="dataRoundelTop" aria-describedby="dataRoundelTopHelp" value={this.props.currentContent.dataRoundelTop}/>
              <small id="dataRoundelHelp" className="form-text text-muted">Enter the Roundel text for the asset</small>
              <label htmlFor="dataRoundelMiddle">Roundel Text middle</label>
              <input onChange={this.handleEdit} type="text" className="form-control" id="dataRoundelMiddle" aria-describedby="dataRoundelMiddleHelp" value={this.props.currentContent.dataRoundelMiddle}/>
              <small id="dataRoundelMiddleHelp" className="form-text text-muted">Enter the Roundel text amount for the asset</small>
              <label htmlFor="dataRoundelBottom">Roundel Text bottom</label>
              <input onChange={this.handleEdit} type="text" className="form-control" id="dataRoundelBottom" aria-describedby="dataRoundelBottomHelp" value={this.props.currentContent.dataRoundelBottom}/>
              <small id="dataRoundelBottomHelp" className="form-text text-muted">Enter the Roundel text amount for the asset</small>
            </div>;
        break;
      default:

        inputString =
          <div className="form-group">
            <label htmlFor="dataRoundel">Roundel Text</label>
            <input onChange={this.handleEdit} type="text" className="form-control" id="dataRoundel" aria-describedby="dataRoundelHelp" value={this.props.currentContent.dataRoundel}/>
            <small id="dataRoundelHelp" className="form-text text-muted">Enter the Roundel text for the asset</small>
          </div>;

    }

    return (
      <div>
        <div className="form-group">
          <label htmlFor="roundelType">RoundelType:</label>
          <select className="form-control" id="roundelType" onChange={this.handleEdit}>
            <option value="1">Standard</option>
            <option value="2">Save Value</option>
            <option value="3">Save Value Fraction</option>
            <option value="10">Save upto</option>
            <option value="5">Under £X</option>
            <option value="6">Percent Off</option>
            <option value="8">Green</option>
            <option value="9">Grey</option>
          </select>
        </div>
        {inputString}
      </div>
    );
  }

});

module.exports = RoundelContent;


//<option value="7">Three lines</option>

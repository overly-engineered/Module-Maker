/** @jsx React.DOM */
'use strict';
var React = require('react'),
    CopyEdit = require('./CopyEdit'),
    CtaEdit = require('./CtaEdit'),
    ImageEdit = require('./ImageEdit'),
    RoundelEdit = require('./RoundelEdit'),
    VideoEdit = require('./VideoEdit');


var ModuleEdit = React.createClass({

  sizeChange: function(e){
    this.props.currentContent.currentColumnSize = e.target.value;
    this.props.editMade(this.props.currentContent);
  },
  

  render: function() {
    var assetSizeHtml = '';
    if(this.props.currentModule.sizeable){
      assetSizeHtml = <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse" aria-expanded="true" aria-controls="collapse">
                Asset Size
              </a>
            </h5>
          </div>
          <div id="collapse" className="collapse" role="tabpanel" aria-labelledby="heading">
            <div className="card-block">
              <label className="custom-control custom-radio">
                <input id="radio1" name="radio" type="radio" className="custom-control-input" value="col-xs-12" onClick={this.sizeChange}/>
                <span className="custom-control-indicator" ></span>
                <span className="custom-control-description">Full Width</span>
              </label>
              <label className="custom-control custom-radio">
                <input id="radio2" name="radio" type="radio" className="custom-control-input" value="col-xs-8" onClick={this.sizeChange}/>
                <span className="custom-control-indicator" ></span>
                <span className="custom-control-description">Two Third Width</span>
              </label>
              <label className="custom-control custom-radio">
                <input id="radio3" name="radio" type="radio" className="custom-control-input" defaultChecked="checked" value="col-xs-6" onClick={this.sizeChange}/>
                <span className="custom-control-indicator" ></span>
                <span className="custom-control-description">Half Width</span>
              </label>
              <label className="custom-control custom-radio">
                <input id="radio4" name="radio" type="radio" className="custom-control-input" value="col-xs-4" onClick={this.sizeChange}/>
                <span className="custom-control-indicator" ></span>
                <span className="custom-control-description">Third Width</span>
              </label>
              <label className="custom-control custom-radio">
                <input id="radio5" name="radio" type="radio" className="custom-control-input" value="col-xs-3" onClick={this.sizeChange}/>
                <span className="custom-control-indicator" ></span>
                <span className="custom-control-description">Quarter Width</span>
              </label>
            </div>
          </div>
        </div>;
    }
    return (
      <form id="accordion" role="tablist" aria-multiselectable="true">
        
        {assetSizeHtml}

        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Copy
              </a>
            </h5>
          </div>
          <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
            <div className="card-block">
              <CopyEdit currentContent={this.props.currentContent} editMade={this.props.editMade}></CopyEdit>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" role="tab" id="headingTwo">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                CTA
              </a>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div className="card-block">
              <CtaEdit currentContent={this.props.currentContent} editMade={this.props.editMade} addCta={this.props.addCta} removeCta={this.props.removeCta}currentModule={this.props.currentModule}></CtaEdit>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" role="tab" id="headingThree">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                Image
              </a>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
            <div className="card-block">
              <ImageEdit currentContent={this.props.currentContent} editMade={this.props.editMade}></ImageEdit>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" role="tab" id="headingFour">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                Roundel
              </a>
            </h5>
          </div>

          <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour">
            <div className="card-block">
              <RoundelEdit currentContent={this.props.currentContent} editMade={this.props.editMade}></RoundelEdit>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" role="tab" id="headingFive">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                Video
              </a>
            </h5>
          </div>

          <div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingFive">
            <div className="card-block">
              <VideoEdit currentContent={this.props.currentContent} editMade={this.props.editMade}></VideoEdit>
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.props.getCode}>Create Module</button>
      </form>
    );
  }

});

module.exports = ModuleEdit;

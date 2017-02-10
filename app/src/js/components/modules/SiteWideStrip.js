/** @jsx React.DOM */
  'use strict';
  var React = require('react');

  var MenuPanelCellar = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },
    createHeading: function() {
      return {__html: this.props.currentContent.heading};
    },
    //background-color:#333e49 !important; style="    vertical-align: bottom;height: 33px;width: auto;margin: 3px 0 0 -50px;position: absolute;"
    componentDidMount: function(){
      this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
    },
    render: function() {
      var html = '';
      var styles = {height: '40px'};
      if(this.props.currentSite == 0){
        html = 
            <section className="notificationBar" id="deliveryFreeBar">
              <p style={styles} ref="row">
                <span className="deliveryBarFirst">Standard delivery on all orders</span>
                <span className="deliveryBarSecond"><img className="cc-icon" src="http://www.waitrose.com/content/dam/waitrose/cellar/design/icons/cc-icon.png"/><span>Click &amp; Collect at your local store</span></span>
              </p>
            </section>
      } else if(this.props.currentSite == 1){
        html = 
          <section className="notificationBar" id="deliveryFreeBar">                        
            <p style={styles} ref="row">
              <span className="deliveryBarFirst">Next day delivery when you order by 6pm</span>
              <span className="deliveryBarSecond" id="countDown">Dont miss out<img className="deliveryBarClockImage" src="http://www.waitroseflorist.com/wcsstore/WaitroseDirectStorefrontAssetStore/Custom/skins/assets/images/gl_deliveryTimer.png"/>0 hours</span>
              <input type="hidden" minutes="0" hours="18" id="localTimeHidden" name="initialCountDown"/> 
            </p>
          </section>;
      } else {
        html = 
          <section className="notificationBar" id="deliveryFreeBar">  
            <p style={styles} ref="row">
              <span className="deliveryBarFirst">FREE next day delivery when you order by midday*</span>
              <span className="deliveryBarSecond" id="countDown">Dont miss out <img className="deliveryBarClockImage" src="http://www.waitrosegifts.com/wcsstore/WaitroseDirectStorefrontAssetStore/Custom/skins/assets/images/gl_deliveryTimer.png"/>0 hours</span>
              <input type="hidden" minutes="0" hours="12" id="localTimeHidden" name="initialCountDown"/>
            </p>
          </section>
      }
      return (
        <div className="rowGrid">
          {html}
        </div>
      );
    }

  });

  module.exports = MenuPanelCellar;

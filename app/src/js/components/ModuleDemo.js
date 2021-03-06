/** @jsx React.DOM */
'use strict';
var React = require('react'),
Card = require('./modules/Card'),
Feature = require ('./modules/Feature'),
Panel = require('./Modules/Panel'),
PanelReveal = require('./Modules/PanelReveal'),
PanelTab = require('./Modules/PanelTab'),
PanelCentral = require('./Modules/PanelCentral'),
ProductOfTheWeek = require('./Modules/ProductOfTheWeek'),
WhatsTrending = require('./Modules/WhatsTrending'),
MenuPanel = require('./Modules/MenuPanel'),
Hero = require('./Modules/Hero'),
CategoryBanner = require('./Modules/CategoryBanner'),
CategoryBannerOneColumn = require('./Modules/CategoryBannerOneColumn'),
CategoryBannerTwoColumn = require('./Modules/CategoryBannerTwoColumn'),
CategoryBannerVideo = require('./Modules/CategoryBannerVideo'),
SitewideStripOffers = require('./Modules/SitewideStripOffers'),
SiteWideStrip = require('./Modules/SiteWideStrip'),
Window = require('./Modules/Window'),
WindowGreen = require('./Modules/WindowGreen'),
WindowRed = require('./Modules/WindowRed'),
WindowGreenLower = require('./Modules/WindowGreenLower'),
WindowRedLower = require('./Modules/WindowRedLower'),
WindowPromoFeature = require('./Modules/WindowPromoFeature'),
WindowStrip = require('./Modules/WindowStrip'),
Article = require('./Modules/Article'),
ArticleTwoColumns = require('./Modules/ArticleTwoColumns'),
ArticleQuoteImage = require('./Modules/ArticleQuoteImage'),
FullWidthBanner = require('./Modules/FullWidthBanner'),
ButtonRow = require('./Modules/ButtonRow');

//TMG COMPONENTS
var CardTMG = require('./Modules/CardTMG'),
HeroTMG = require('./Modules/HeroTMG'),
PanelTMG = require('./Modules/PanelTMG'),
ArticleTMG = require('./Modules/ArticleTMG'),
ArticleTMGTWOCOL = require('./Modules/ArticleTMGTwoColumn');

var Frame = React.createClass({

  render: function() {
    return <iframe ref="demoFrame" onLoad={this.frameLoaded}/>;
  },
  componentWillMount: function() {
  },
  componentDidMount: function() {
    this.renderFrameContents();
  },
  renderFrameContents: function() {
    var doc = this.getDOMNode().contentDocument
    if(doc.readyState === 'complete') {
       React.renderComponent(this.props.head, doc.head);
       React.renderComponent(this.props.children, doc.body);
       
    } else {
       setTimeout(this.renderFrameContents, 0);
    }
  },
  componentDidUpdate: function() {
    this.renderFrameContents();
  },
  componentWillUnmount: function() {
    React.unmountComponentAtNode(this.getDOMNode().contentDocument.body);
  }
});
var innerHTML = '';
var FrameContainer = React.createClass({
  componentDidMount: function(){

  },
  handleClick: function(event) {
      event.preventDefault()
      var el = event.target
  },

  render: function() {
    var CurrentCard, CurrentHero, CurrentPanel, CurrentArticle, CurrentArticleTwoCol;
    if(this.props.currentSite == 3){
      CurrentCard = CardTMG;
      CurrentHero = HeroTMG;
      CurrentPanel = PanelTMG;
      CurrentArticle = ArticleTMG;
      CurrentArticleTwoCol = ArticleTMGTWOCOL;
    } else {
      CurrentCard = Card;
      CurrentHero = Hero;
      CurrentPanel = Panel;
      CurrentArticle = Article;
      CurrentArticleTwoCol = ArticleTwoColumns;
    }
    var styles = {
      overflow: 'hidden'
    }
    var contentStyle = {
      padding:'10px 0px 10px 0px !important',
      marginTop: '0px !important'
    };
    var moduleArray = [
      <CurrentCard currentContent={this.props.currentContent} handleClick={this.handleClick}  editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>, 
      <ProductOfTheWeek currentContent={this.props.currentContent} handleClick={this.handleClick} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>, 
      <Feature currentContent={this.props.currentContent} handleClick={this.handleClick} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>, 
      <CurrentPanel currentContent={this.props.currentContent} handleClick={this.handleClick} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>, 
      <PanelReveal currentContent={this.props.currentContent} handleClick={this.handleClick} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>, 
      <PanelTab currentContent={this.props.currentContent} handleClick={this.handleClick} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <PanelCentral currentContent={this.props.currentContent} handleClick={this.handleClick} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <WhatsTrending currentContent={this.props.currentContent} handleClick={this.handleClick} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>, 
      <MenuPanel currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>, 
      <CurrentHero currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>, 
      <CategoryBanner currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <CategoryBannerOneColumn currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <CategoryBannerTwoColumn currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} resetCta={this.props.resetCta} setIframeSize={this.props.setIframeSize}/>,
      <CategoryBannerVideo currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} resetCta={this.props.resetCta} setIframeSize={this.props.setIframeSize}/>,
      <SiteWideStrip currentContent={this.props.currentContent} handleClick={this.handleClick} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize} currentSite={this.props.currentSite}/>,
      <SitewideStripOffers currentContent={this.props.currentContent} handleClick={this.handleClick} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize} currentSite={this.props.currentSite}/>,
      <Window currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <WindowGreen currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <WindowRed currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <WindowGreenLower currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <WindowRedLower currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <WindowPromoFeature currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <WindowStrip currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <CurrentArticle currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <CurrentArticleTwoCol currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <ArticleQuoteImage currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <FullWidthBanner currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>,
      <ButtonRow currentContent={this.props.currentContent} handleClick={this.handleClick} currentSite={this.props.currentSite} editMade={this.props.editMade} setIframeSize={this.props.setIframeSize}/>];
    innerHTML = moduleArray[this.props.currentModule.id-1];
    var css = '';
    var siteClass = 'cellar editorial home';
    switch (this.props.currentSite) {
      case 0:
        css = <i><link type='text/css' rel='stylesheet' href='https://www.waitrosecellar.com/wcsstore/WaitroseDirectStorefrontAssetStore/Custom/skins/css/screen.css' /><link type='text/css' rel='stylesheet' href='https://www.waitrosecellar.com/wcsstore7.03.06.8/WaitroseCellar/css/store_screen.css' /><link type='text/css' rel='stylesheet' href='https://www.waitrosecellar.com/wcsstore/WaitroseCellar/Attachment/CustomFiles/layout_custom.css' /><link type="text/css" rel="stylesheet" href="css/iframeFixs.css" /></i>
        break;
      case 1:
        css = <i><link type='text/css' rel='stylesheet' href='https://www.waitroseflorist.com/wcsstore/WaitroseDirectStorefrontAssetStore/Custom/skins/css/screen.css' /><link type='text/css' rel='stylesheet' href='https://www.waitroseflorist.com/wcsstore7.03.06.8/WaitroseFlorist/css/store_screen.css' /><link type='text/css' rel='stylesheet' href='https://www.waitroseflorist.com/wcsstore/WaitroseFlorist/Attachment/CustomFiles/layout_custom.css' /><link type="text/css" rel="stylesheet" href="css/iframeFixs.css" /></i>
          siteClass = 'editorial home florist';
        break;
      case 2:
        css = <i><link type='text/css' rel='stylesheet' href='https://www.waitrosegifts.com/wcsstore/WaitroseDirectStorefrontAssetStore/Custom/skins/css/screen.css' /><link type='text/css' rel='stylesheet' href='https://www.waitrosegifts.com/wcsstore7.03.06.8/WaitroseGifts/css/store_screen.css' /><link type='text/css' rel='stylesheet' href='https://www.waitrosegifts.com/wcsstore/WaitroseGifts/Attachment/CustomFiles/layout_custom.css' /><link type="text/css" rel="stylesheet" href="css/iframeFixs.css" /></i>
          siteClass = 'editorial home gifts';
        break;
      case 3:
        css = <i><link type='text/css' rel='stylesheet' href='https://wine.telegraph.co.uk/wcsstore7.03.06.8/WaitrosePartnerTMG/css/store_screen.css' /><link type='text/css' rel='stylesheet' href='https://wine.telegraph.co.uk/wcsstore/WaitroseDirectStorefrontAssetStore/Custom/skins/css/screen.css' /><link type='text/css' rel='stylesheet' href='https://wine.telegraph.co.uk/wcsstore7.03.06.8/WaitrosePartnerTMG/css/screen.css' /><link type='text/css' rel='stylesheet' href='https://wine.telegraph.co.uk/wcsstore7.03.06.8/WaitrosePartnerTMG/Attachment/CustomFiles/layout_custom.css' /><link type="text/css" rel="stylesheet" href="css/iframeFixs.css" /></i>
        break;
      default:
        css = <i><link type='text/css' rel='stylesheet' href='https://www.waitrosecellar.com/wcsstore/WaitroseDirectStorefrontAssetStore/Custom/skins/css/screen.css' /><link type='text/css' rel='stylesheet' href='https://www.waitrosecellar.com/wcsstore7.03.06.8/WaitroseCellar/css/store_screen.css' /><link type='text/css' rel='stylesheet' href='https://www.waitrosecellar.com/wcsstore/WaitroseCellar/Attachment/CustomFiles/layout_custom.css' /><link type="text/css" rel="stylesheet" href="css/iframeFixs.css" /></i>
    }

    return (
        <Frame head={css}
               currentContent={this.props.currentContent} ref="frame">
          <div id="page" className={siteClass}>
            <div className="" id="wtContent" style={contentStyle} ref="wtContent">
              {innerHTML}
            </div>
          </div>
        </Frame>
      
    );
  }
});
var ModuleDemo = React.createClass({

  render: function() {
    return (
      <FrameContainer currentContent={this.props.currentContent} currentModule={this.props.currentModule} site={this.props.site} currentSite={this.props.currentSite} editMade={this.props.editMade} resetCta={this.props.resetCta} setIframeSize={this.props.setIframeSize} ref="frameContainer"></FrameContainer>
    );
  }

});

module.exports = ModuleDemo;

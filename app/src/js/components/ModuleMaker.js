/** @jsx React.DOM */
'use strict';
var React = require('react'),
MainSection = require('./MainSection'),
Menu = require('./Menu'),
CodeModal = require('./CodeModal'),
SignIn = require('./SignIn'),
Firebase = require('firebase');

//Initialize Firebase
var config = {
  apiKey: "AIzaSyBnU-EiSCM_XnqQ42qmvEMeHHRZDtw9Bx4",
  authDomain: "specialist-shops-module-maker.firebaseapp.com",
  databaseURL: "https://specialist-shops-module-maker.firebaseio.com",
  storageBucket: "specialist-shops-module-maker.appspot.com",
  messagingSenderId: "937338399066"
};

firebase.initializeApp(config);
function process(str) {
    var div = document.createElement('div');
    div.innerHTML = str.trim();
    return format(div, 0).innerHTML;
}

function format(node, level) {

    var indentBefore = new Array(level++ + 1).join('    '),
        indentAfter  = new Array(level - 1).join('    '),
        textNode;

    for (var i = 0; i < node.children.length; i++) {

        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i], level);

        if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }

    return node;
}

var ModuleMaker = React.createClass({
  getInitialState: function(){
    var dateObj = new Date();
    var year = dateObj.getUTCMonth() + 1;
    return {
      modules: [{id:0,name:'Card', width:1, description:'Waitrose Style Card', multiCta: false, sizeable:true}, 
                {id:1, name:'Product of the week', width:1, description:'Product of the week pod cellar homepage', multiCta: false}, 
                {id:2,name:'Feature', width:1, description:'Full width feature', multiCta: false}, 
                {id:3, name:'Panel', width:1, description:'Navigation Panel', multiCta: false, group:1, sizeable:true}, 
                {id:4, name: 'Panel reveal', width:1, description:'Panel with reveal on hover', multiCta: false, group:1, sizeable:true},
                {id:5, name:'Panel border', width:1, description:'Panel with a green border when hovered on', multiCta:false, group:1, sizeable:true},
                {id:6, name:'Panel Central', width:1, description:'Panel with white central section', multiCta:false, group:1, sizeable:true},
                {id:7, name:'Whats Trending pod', width:1, description:'Whats trending pod for site homepages', multiCta: false}, 
                {id:8, name:'Menu Panel', width:1, description:'Menu image panels', multiCta: false}, 
                {id:9, name:'Hero', width:2, description:'Site Hero', multiCta: false},
                {id:10, name:'CAT Banner', width:1, description: 'PLP Category banner with no body copy', multiCta: true, group:2}, 
                {id:11, name:'CAT Banner One Column', width:1, description:'PLP Category banner with one column of body copy', multiCta: false, group:2},
                {id:12, name:'CAT Banner Two Column', width:1, description:'PLP Category banner with one Column of copy and one of links', multiCta:true, group:2},
                {id:13, name:'CAT Banner Video', width:1, description:'PLP Category banner with one column of copy and a video', multiCta:true, group:2},
                {id:14, name:'Sitewide Strip', width:2, description:'Sitewide Strip', multiCta:false, group:3, depth:2},
                {id:15, name:'Offers Sitewide Strip', width:2, description:'Offers Red Sitewide Strip with a link', multiCta:false, group:3, depth:2},
                {id:16, name: 'Window', width:1, description:'Window Element', multicCta:false, group:4, sizeable:true},
                {id:99, name:'CAT BANNERS', description:'PLP Category Banners', category: true, groupIndex: 2},
                {id:100, name:'Panels', description:'Image Panels', category: true, groupIndex: 1},
                {id:101, name:'Sitewide Strips', description:'Sitewide strips for various sites', category:true, groupIndex: 3},
                {id:102, name:'Window', description:'Window assets', category:true, groupIndex:4}],
      view: 'menu',
      currentModule: null,
      currentSite: 0,
      sites: [{id:0, name:'Cellar'}, 
              {id:1, name:'Florist'}, 
              {id:2, name:'Gifts'}],
      currentContent: {heading:'Heading goes here', 
                      bodyCopy: 'The French wines in our Cellar come from a mixture of classic and lesser known Chateaux. We are always on the look out for new wines and exceptional examples of well known wine types at different price points.',
                      bodyCopyTwo: 'The French wines in our Cellar come from a mixture of classic and lesser known Chateaux. We are always on the look out for new wines and exceptional examples of well known wine types at different price points.',
                      subHeading: '<p>Single price £30 <br> £24 if you buy 6 or more</p><p><strong class="offersRed">Save 20% when you buy 6 bottles</strong></p>', 
                      color:false, 
                      ctaDetails:[{id:1, 
                                  ctaText:'Button', 
                                  ctaLink:'/wine', 
                                  ctaDescription:'Goes to all wine', 
                                  destinationPage:'All wines'}], 
                      assetPosition:'Row 1', 
                      currentPage: 'Homepage', 
                      promoID:'Promo '+year, 
                      roundel:false, 
                      roundelType:1, 
                      dataRoundel:'Save', 
                      dataRoundelAmount:'£34', 
                      dataRoundelTop:'Save', 
                      dataRoundelMiddle:'up to', 
                      dataRoundelBottom: '£34', 
                      image:'c-of-mywaitrose-banner', 
                      imageDescription:'This is the image',
                      videoThumbnail:'http://www.waitrose.com/content/dam/waitrose/cellar/content/long-term/video-thumbnail/Phillip-Schofield--Waitrose-Cellar.png',
                      videoCode:'<iframe src="//players.brightcove.net/3127020382001/default_default/index.html?videoId=3192417654001" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>',
                      currentColumnSize: 'col-xs-12' }
    }
  },
  signIn: function(){
    var email = document.getElementById('LogInEmail').value;
    var password = document.getElementById('LoginPassword').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
  },
  viewModule: function(module){
    this.setState({
      view:'board',
      currentModule:module
    });
  },
  viewMenu: function(){
    this.setState({
      view: 'menu',
      currentModule: null
    });
  },
  viewSubMenu: function(module){
    this.setState({
      view: 'subMenu',
      currentModule:module
    });
  },
  siteChange: function(newSite){
    this.setState({
      currentSite: newSite
    });
  },
  editMade: function(content){
    this.setState({
      currentContent:content
    });
  },
  addCta: function(){
    var newCta = $.extend(true, {}, this.state.currentContent.ctaDetails[0]);
    newCta.id = this.state.currentContent.ctaDetails.length + 1;
    this.state.currentContent.ctaDetails.push(newCta);
    this.setState({
      currentContent: this.state.currentContent
    })
  },
  removeCta: function(){
    this.state.currentContent.ctaDetails.pop();
    this.setState({
      currentContent: this.state.currentContent
    })
    $("#ctaCarousel").carousel(0);
  },
  resetCta: function(){
    this.state.currentContent.ctaDetails= [{id:1, ctaText:'Button', ctaLink:'/wine', ctaDescription:'Goes to all wine', destinationPage:'All wines'}];
  },
  setIframeSize: function(contentHeight){
    var frame = document.getElementById('demoFrame');
    var column = document.getElementById('demoColumn');
    var padding = 30;
    var correctWidth = 960;
    if(this.state.currentModule.width == 2){
      var correctWidth = 1440;
    }
    var frame = document.getElementById('demoFrame');
    frame.style.width =  correctWidth+"px";
    var columnWidth = column.clientWidth - padding;
    var ratio = columnWidth/correctWidth;
    var transformString = "scale("+ratio+")";
    var transformOrigin = "top left";
    frame.style.webkitTransform = transformString;
    frame.style.webkitTransformOrigin = transformOrigin;
    frame.style.MozTransform = transformString;
    frame.style.MozTransformOrigin = transformOrigin;
    frame.style.msTransform = transformString;
    frame.style.msTransformOrigin = transformOrigin;
    frame.style.OTransform = transformString;
    frame.style.OTransformOrigin = transformOrigin;
    frame.style.transform = transformString;
    frame.style.transformOrigin = transformOrigin;
    frame.style.height = (contentHeight+10) + 'px';
    column.style.height = ((contentHeight*ratio)) + 'px';
  },
  getCode: function(){
    var target = $('#demoFrame').contents().find('#wtContent').children().clone();
    console.log(this.state.currentModule);
    if(this.state.currentModule.depth == 2){
      var target = $('#demoFrame').contents().find('#wtContent').children().children().clone();
    }
    target.removeAttr('data-reactid');
    var children = $(target.find('*'));
    for(var i=0; i<children.length;i++){
      $(children[i]).removeAttr('data-reactid');
    }
    var roundel = $(target.find('#roundel'));
    if(this.state.currentContent.roundel){
      switch (this.state.currentContent.roundelType) {
        case 1:
        case 8:
        case 9:
          $(roundel).removeAttr('data-roundelamount data-roundeltop data-roundelmiddle data-roundelbottom');
          break;
        case 2:case 3:case 4:case 5:case 6:
          $(roundel).removeAttr('data-roundeltop data-roundelmiddle data-roundelbottom');
          break;
        case 10:
          $(roundel).removeAttr('data-roundel data-roundelamount');
          break;
        default:
      }
    } else {
      $(roundel).removeAttr('data-roundel data-roundelamount data-roundeltop data-roundelmiddle data-roundelbottom');
    }
    $(roundel).removeAttr('id');
    var links = $(target).find('a');
    var promoId = this.state.currentContent.promoID;
    var promoname = this.state.currentContent.ctaDetails[0].ctaDescription;
    var creative = this.state.currentModule.name;
    var position = this.state.currentContent.assetPosition;
    var currentPage = this.state.currentContent.currentPage;
    var currentSite = this.state.currentSite;
    if(this.state.currentModule.multiCta){
      this.state.currentContent.ctaDetails.forEach(function(el, i, arr){
        var gaLink = "ga('send', 'event','" + currentPage + "', 'click','"+el.destinationPage+"','"+el.ctaDescription+"')";
        links[i].setAttribute("onclick", gaLink);
        if(currentSite == 0){
          links[i].className += ' promoTracking';
          $(links[i]).attr({
            "data-promoId": promoId,
            "data-name" : el.name,
            "data-creative": creative,
            "data-position": position,
            "data-page": currentPage,
          })
        }
      });
    } else {
      var gaLink = "ga('send', 'event','" + this.state.currentContent.currentPage + "', 'click','"+this.state.currentContent.ctaDetails[0].destinationPage+"','"+this.state.currentContent.ctaDetails[0].ctaDescription+"')";
      for(var i=0; i<links.length; i++){
        links[i].setAttribute("onclick", gaLink);
        if(currentSite == 0){
          links[i].className += ' promoTracking';
          $(links[i]).attr({
            "data-promoId": promoId,
            "data-name" : promoname,
            "data-creative": creative,
            "data-position": position,
            "data-page": currentPage,
          })
        }
      }
    }
    
    var processedHTML = process($(target)[0].innerHTML);
    $('#codeModalBody').text(processedHTML)
    $('#codemodal').modal();
    $('#codemodal').on('hidden.bs.modal', function (e) {
      document.getElementById('successAlert').style.display = 'none';
    });
  },

  componentDidMount: function(){
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false})
      }
    }.bind(this));

    window.onresize = this.setIframeSize;
  },

  render: function() {
    var html = '';
    if(this.state.loggedIn){
      html = <div><Menu modules={this.state.modules}
              viewModule={this.viewModule}
              viewMenu={this.viewMenu}
              siteChange={this.siteChange}
              currentSite={this.state.currentSite}
              sites={this.state.sites}/>
        <MainSection view={this.state.view}
                     currentModule={this.state.currentModule}
                     modules={this.state.modules}
                     viewModule={this.viewModule}
                     currentContent={this.state.currentContent}
                     editMade={this.editMade}
                     getCode={this.getCode}
                     currentSite={this.state.currentSite}
                     addCta={this.addCta}
                     removeCta={this.removeCta}
                     resetCta={this.resetCta}
                     viewSubMenu={this.viewSubMenu}
                     setIframeSize={this.setIframeSize}/>
        <CodeModal finishedHTML={this.state.finishedHTML}/></div>;
    } else {
      html = <SignIn signIn={this.signIn}/>
    }
    return (
      <div className="container">
        {html}
      </div>
    );
  }


});
module.exports = ModuleMaker;

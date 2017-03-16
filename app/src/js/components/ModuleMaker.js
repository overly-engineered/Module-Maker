/** @jsx React.DOM */
'use strict';
var React = require('react'),
MainSection = require('./MainSection'),
Menu = require('./Menu'),
CodeModal = require('./CodeModal'),
SignIn = require('./SignIn'),
Firebase = require('firebase'),
Alert = require('./Alert'),
HelpModal = require('./HelpModal');

//Initialize Firebase
var config = {
  apiKey: "AIzaSyBnU-EiSCM_XnqQ42qmvEMeHHRZDtw9Bx4",
  authDomain: "specialist-shops-module-maker.firebaseapp.com",
  databaseURL: "https://specialist-shops-module-maker.firebaseio.com",
  storageBucket: "specialist-shops-module-maker.appspot.com",
  messagingSenderId: "937338399066"
};

firebase.initializeApp(config);
var firebaseDB = firebase.database();
var storage = firebase.storage();

var ModuleMaker = React.createClass({
  createInitialState: function(){
    var dateObj = new Date();
    var year = dateObj.getUTCMonth() + 1;
    return {
      modulesObj: {1:{name:'Card',width:1, description:'Card element', multiCta: false, sizeable:true, video:false, roundel:true, ctaDiff:true, tmg:true}, 
                2:{name:'Product of the week',  width:1, description:'Product of the week pod cellar homepage', multiCta: false, video:false, roundel:true, ctaDiff:true, tmg:false}, 
                3:{name:'Feature',width:1, description:'Full width feature', multiCta: false, video:false, roundel:true, ctaDiff:true, tmg:false}, 
                4:{name:'Panel',width:1, description:'Navigation Panel - Reveal Panel for TMG', multiCta: false, group:1, sizeable:true, video:false, roundel:false, ctaDiff:false, tmg:true}, 
                5:{name:'Panel reveal',width:1, description:'Panel with reveal on hover', multiCta: false, group:1, sizeable:true, video:false, roundel:false, ctaDiff:false, tmg:false},
                6:{name:'Panel border',width:1, description:'Panel with a green border when hovered on', multiCta:false, group:1, sizeable:true, video:false, roundel:false, ctaDiff:false, tmg:false},
                7:{name:'Panel Central',width:1, description:'Panel with white central section', multiCta:false, group:1, sizeable:true, video:false, roundel:false, ctaDiff:false, tmg:false},
                8:{name:'Whats Trending pod',  width:1, description:'Whats trending pod for site homepages', multiCta: false, video:false, roundel:true, ctaDiff:false, tmg:false}, 
                9:{name:'Menu Panel',  width:1, description:'Menu image panels', multiCta: false, video:false, roundel:true, ctaDiff:false, tmg:false}, 
                10:{name:'Hero',  width:2, description:'Site Hero', multiCta: false, video:false, roundel:true, ctaDiff:true, tmg:true},
                11:{name:'Cat Banner', width:1, description: 'PLP Category banner with no body copy', multiCta: false, group:2, video:false, roundel:true, ctaDiff:false, tmg:true}, 
                12:{name:'Cat Banner One Column',  width:1, description:'PLP Category banner with one column of body copy', multiCta: false, group:2, video:false, roundel:true, ctaDiff:false, tmg:false},
                13:{name:'Cat Banner Two Column',  width:1, description:'PLP Category banner with one Column of copy and one of links', multiCta:true, group:2, video:false, roundel:true, ctaDiff:false, tmg:false},
                14:{name:'Cat Banner Video',  width:1, description:'PLP Category banner with one column of copy and a video', multiCta:true, group:2, video:true, roundel:true, ctaDiff:false, tmg:false},
                15:{name:'Sitewide Strip',  width:2, description:'Sitewide Strip', multiCta:false, group:3, depth:2, video:false, roundel:false, ctaDiff:false, tmg:true},
                16:{name:'Offers Sitewide Strip',  width:2, description:'Offers Red Sitewide Strip with a link', multiCta:false, group:3, depth:2, video:false, roundel:false, ctaDiff:false, tmg:false},
                17:{name:'Window',  width:1, description:'Window image with text underneath', multicCta:false, group:4, sizeable:true, video:false, roundel:true, ctaDiff:false, tmg:false},
                18:{name:'Window Green Strip',  width:1, description:'Window with a green strip through the center', multiCta:false, group:4, sizeable:true, video:false, roundel:false, ctaDiff:false, tmg:false},
                19:{name:'Window Red Strip',  width:1, description:'Window with a red strip through the center', multiCta:false, group:4, sizeable:true, video:false, roundel:false, ctaDiff:false, tmg:false},
                20:{name:'Window Green Strip Lower',  width:1, description:'Window with a green strip through the bottom', multiCta:false, group:4, sizeable:true, video:false, roundel:false, ctaDiff:false, tmg:false},
                21:{name:'Window Red Strip Lower',  width:1, description:'Window with a red strip through the bottom', multiCta:false, group:4, sizeable:true, video:false, roundel:false, ctaDiff:false, tmg:false},
                22:{name:'Window Green two lines',  width:1, description:'Window with a green strip with two lines', multiCta:false, group:4, sizeable:true, video:false, roundel:false, ctaDiff:false, tmg:false},
                23:{name:'Window Strip',  width:1, description:'Window with white strip', multiCta:false, group:4, sizeable:true, video:false, roundel:true, ctaDiff:false, tmg:false},
                24:{name:'Article', width:1, description:'Article with image and single column of text', multiCta:false, group:5, sizeable:false, video:false, roundel:false, ctaDiff:true, tmg:true},
                25:{name:'Article Two Column',  width:1, description:'Article with image and two columns of text', multiCta:false, group:5, sizeable:false, video:false, roundel:false, ctaDiff:false, tmg:true},
                26:{name:'Article Two Column Quote',  width:1, description:'Article with image and two columns of text with a quote', multiCta:false, group:5, sizeable:false, video:false, roundel:false, ctaDiff:false, tmg:false},
                27:{name:'Full Width Banner',  width:2, description:'Site Full Width Banner which spans full width of the browser window', multiCta:false, sizeable:false, video:false, roundel:false, ctaDiff:true, tmg:false},
                28:{name:'Button row',  width:1, description:'Row of buttons', multiCta:true, sizeable:true, video:false, roundel:false, ctaDiff:true, tmg:true},
                99:{name:'Cat banners',  description:'PLP Category Banners', category: true, groupIndex: 2, tmg:true},
                100:{name:'Panels',  description:'Image Panels', category: true, groupIndex: 1, tmg:true},
                101:{name:'Sitewide Strips',  description:'Sitewide strips for various sites', category:true, groupIndex: 3, tmg:true},
                102:{name:'Windows', description:'Window assets', category:true, groupIndex:4, tmg:false},
                103:{name:'Articles',  description:'Article content', category:true, groupIndex:5, tmg:true}},
      view: 'menu',
      currentModule: null,
      currentSite: 0,
      sites: [{id:0, name:'Cellar'}, 
              {id:1, name:'Florist'}, 
              {id:2, name:'Gifts'},
              {id:3, name:'TMG'}],
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
                      ctaType: 0,
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
                      currentColumnSize: 'col-xs-12',
                      savedState: false
                    },
        alert: {alertShown:false, alertMessage: 'This is an alert', alertType:1},
        searchTerm: {term: '', site: -1, orderBy:true}
    };
  },
  getInitialState: function(){
    return this.createInitialState();
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
    var alertProxy = this.triggerAlert;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alertProxy("You've entered the wrong password. Better luck next time.", 1)
      } else {
        alertProxy('Theres a big problem. Show Jamie this message: </br>' + errorMessage, 1);
      }
    });
    this.hideAlert();
  },
  signOut: function(){
    var newState = this.createInitialState().currentContent;
    this.setState({
      currentContent: newState
    });
    firebase.auth().signOut();
  },
  passwordReset: function(){
    var email = document.getElementById('LogInEmail').value;
    var alertProxy = this.triggerAlert;
    firebase.auth().sendPasswordResetEmail(email).then(function() {

      alertProxy('Password Reset Email Sent!', 3);
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/invalid-email') {
        alertProxy(errorMessage, 2);
      } else if (errorCode == 'auth/user-not-found') {
        alertProxy(errorMessage, 2);
      }
      console.log(error);
    });
  },
  /* 

  START Utility functions

  */
  process: function(str) {
    var div = document.createElement('div');
    div.innerHTML = str.trim();
    return this.format(div, 0).innerHTML;
  },

  format: function(node, level) {

      var indentBefore = new Array(level++ + 1).join('    '),
          indentAfter  = new Array(level - 1).join('    '),
          textNode;

      for (var i = 0; i < node.children.length; i++) {

          textNode = document.createTextNode('\n' + indentBefore);
          node.insertBefore(textNode, node.children[i]);

          this.format(node.children[i], level);

          if (node.lastElementChild == node.children[i]) {
              textNode = document.createTextNode('\n' + indentAfter);
              node.appendChild(textNode);
          }
      }

      return node;
  },

  urlsToAbsolute: function(nodeList) {
      if (!nodeList.length) {
          return [];
      }
      var attrName = 'href';
      if (nodeList[0].__proto__ === HTMLImageElement.prototype 
      || nodeList[0].__proto__ === HTMLScriptElement.prototype) {
          attrName = 'src';
      }
      nodeList = [].map.call(nodeList, function (el, i) {
          var attr = el.getAttribute(attrName);
          if (!attr) {
              return;
          }
          var absURL = /^(https?|data):/i.test(attr);
          if (absURL) {
              return el;
          } else {
              return el;
          }
      });
      return nodeList;
  },

  screenShotPage: function() {
      var iframe = this.refs.mainSection.refs.moduleView.refs.moduleDemo.refs.frameContainer.refs.frame.refs.demoFrame.getDOMNode();
      var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      var content = iframeDocument.getElementById('wtContent');
      this.urlsToAbsolute(iframeDocument.images);
      this.urlsToAbsolute(iframeDocument.querySelectorAll("link[src*='layout']"));
      var screenshot = iframeDocument.documentElement.cloneNode(true);
      var b = iframeDocument.createElement('base');
      b.href = iframeDocument.location.protocol + '//' + location.host;
      var head = screenshot.querySelector('head');
      head.insertBefore(b, head.firstChild);
      screenshot.style.pointerEvents = 'none';
      screenshot.style.overflow = 'hidden';
      screenshot.style.webkitUserSelect = 'none';
      screenshot.style.mozUserSelect = 'none';
      screenshot.style.msUserSelect = 'none';
      screenshot.style.oUserSelect = 'none';
      screenshot.style.userSelect = 'none';
      var script = document.createElement('script');
      script.textContent = '(' + this.addOnPageLoad_.toString() + ')();';
      screenshot.querySelector('body').appendChild(script);
      var blob = new Blob([screenshot.outerHTML], {
          type: 'text/html'
      });
      return blob;
  },

  addOnPageLoad_: function() {
      window.addEventListener('DOMContentLoaded', function (e) {
          var scrollX = document.documentElement.dataset.scrollX || 0;
          var scrollY = document.documentElement.dataset.scrollY || 0;
          window.scrollTo(scrollX, scrollY);
      });
  },

  fuzzysearch: function(needle, haystack) {
    var hlen = haystack.length;
    var nlen = needle.length;
    if (nlen > hlen) {
      return false;
    }
    if (nlen === hlen) {
      return needle === haystack;
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
      var nch = needle.toLowerCase().charCodeAt(i);
      while (j < hlen) {
        if (haystack.toLowerCase().charCodeAt(j++) === nch) {
          continue outer;
        }
      }
      return false;
    }
    return true;
  },
  /* 


  END Utility functions


  */
  viewModule: function(module){
    var result = this.state.modulesObj[module.key];
    result.id = parseInt(module.key);
    this.setState({
      view:'module',
      currentModule:result
    });
    this.hideAlert();
  },
  viewSavedModule: function(saveItemData){
    var result = this.state.modulesObj[saveItemData.data.module];
    result.id = parseInt(saveItemData.data.module);
    saveItemData.data.state.savedState = true;
    this.setState({
      currentModule:result,
      view:'module',
      currentContent: saveItemData.data.state
    });
    this.setSearchTerm('', -1);
  },
  viewMenu: function(){
    var newState = this.createInitialState().currentContent;
    this.setState({
      currentContent: newState,
      view: 'menu'
    });
    this.setSearchTerm('', -1);
  },
  viewSubMenu: function(module){
    this.setState({
      view: 'subMenu',
      currentModule:this.state.modulesObj[module.key]
    });
  },
  siteChange: function(newSite){
    console.log(this.state.currentModule);
    if(newSite == 3 && this.state.view != 'menu' && this.state.view !='saved' && !this.state.currentModule.tmg){
      this.triggerAlert("TMG doesnt have this module yet. If feel you need it, pop over and have a chat with the design team. </br>&nbsp;</br> Or see the TMG modules below ↓↓↓ ◕‿◕", 2)
      this.viewMenu();
    } else {
      this.hideAlert();
    }
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
  hideAlert: function(){
    this.state.alert.alertShown = false;
    this.setState({
      alert: this.state.alert
    })
  },
  triggerAlert: function(message, type){
    var newAlert = {alertShown: true, alertMessage: message, alertType: type}
    this.setState({
      alert: newAlert
    })
  },
  setIframeSize: function(contentHeight){
    var frame = this.refs.mainSection.refs.moduleView.refs.moduleDemo.refs.frameContainer.refs.frame.refs.demoFrame.getDOMNode();
    var column = this.refs.mainSection.refs.moduleView.refs.demoColumn.getDOMNode();
    var padding = 30;
    var correctWidth = 960;
    if(this.state.currentModule.width == 2){
      var correctWidth = 1440;
    }
    var frame = this.refs.mainSection.refs.moduleView.refs.moduleDemo.refs.frameContainer.refs.frame.refs.demoFrame.getDOMNode();
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
    var target = $(this.refs.mainSection.refs.moduleView.refs.moduleDemo.refs.frameContainer.refs.wtContent.getDOMNode()).children().clone();
    if(this.state.currentModule.depth == 2){
      var target = $(this.refs.mainSection.refs.moduleView.refs.moduleDemo.refs.frameContainer.refs.wtContent.getDOMNode()).children().children().clone();
    }
    this.processCode(target);
    
    var processedHTML = this.process($(target)[0].innerHTML);
    if(this.state.currentModule.key == 26){
      processedHTML = '</div>' + processedHTML + '<div class="rowGrid">';
    }
    $(this.refs.codeModalChild.refs.codeModalBody.getDOMNode()).text(processedHTML)
    $(this.refs.codeModalChild.refs.codeModal.getDOMNode()).on('shown.bs.modal', function (e) {
      $('#saveRow').css({
        display: 'none'
      });
      this.refs.codeModalChild.refs.successSaveAlert.getDOMNode().style.display = 'none';
      this.refs.codeModalChild.refs.successAlert.getDOMNode().style.display = 'none';
    }.bind(this));
    $(this.refs.codeModalChild.refs.codeModal.getDOMNode()).modal();
    $(this.refs.codeModalChild.refs.codeModal.getDOMNode()).on('hidden.bs.modal', function (e) {
      this.refs.codeModalChild.refs.successSaveAlert.getDOMNode().style.display = 'none';
      this.refs.codeModalChild.refs.successAlert.getDOMNode().style.display = 'none';
    }.bind(this));
  },


  getSavedCode: function(html, state, module){
    state.savedState = true;
    this.setState({
      currentContent: state,
      currentModule: module
    }, function(){
      var row = $(html).contents().find('#wtContent').children().clone();
      //var processedHTML = process($(row)[0].innerHTML);
      this.processCode(row);
      var processedHTML = this.process($(row)[0].innerHTML);
      $(this.refs.codeModalChild.refs.codeModalBody.getDOMNode()).text(processedHTML)
      $(this.refs.codeModalChild.refs.codeModal.getDOMNode()).modal();
      $(this.refs.codeModalChild.refs.codeModal.getDOMNode()).on('hidden.bs.modal', function (e) {
        console.log(this.refs.codeModalChild.refs.successAlert.getDOMNode());
        this.refs.codeModalChild.refs.successAlert.getDOMNode().style.display = 'none';
        this.state.currentContent.savedState = false;
        this.setState({
          savedState:this.state.currentContent.savedState
        })
      }.bind(this));
    });
    

  },

  processCode:function(target){
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
  },

  //https://davidwalsh.name/promises
  getImage: function(reader, imgData){
    return new Promise(function(resolve, reject){
      reader.onloadend = function() {
        var base64data = reader.result;
        resolve(base64data);
      };
    });
  },

  saveModule: function(chosenName){

    var iframe = this.refs.mainSection.refs.moduleView.refs.moduleDemo.refs.frameContainer.refs.frame.refs.demoFrame.getDOMNode();
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var content = this.refs.mainSection.refs.moduleView.refs.moduleDemo.refs.frameContainer.refs.wtContent.getDOMNode();
    var blob = this.screenShotPage();
    var reader = new window.FileReader();
    var imgData = reader.readAsText(blob);
    var base64data;
    var dateObj = new Date();
    var saveObject = {state:this.state.currentContent, module:this.state.currentModule.id, name:chosenName, date: dateObj, site:this.state.currentSite};
    var newSaveKey = firebase.database().ref().push().key;
    this.getImage(reader, imgData).then(function(response) {
      saveObject.img = response;
      firebase.database().ref(newSaveKey).update(saveObject);
    }, function(error) {
      console.error(error);
      triggerAlert('Module saving has failed. Try again later..', 2);
    });

  },

  viewSaved: function(){
    firebase.database().ref().orderByChild('date').once('value').then(function(snapshot) {
      var data = snapshot.val();
      var orderedData = [];
      var i = 0;
      snapshot.forEach(function(child) {
        
        orderedData.push(child.val())
        i++;
        if(i === Object.keys(snapshot.val()).length){
          orderedData.reverse();
          this.setState({
            backupData: orderedData
          })
          var filteredData = this.filterData(orderedData);
          this.setState({
            view: 'saved',
            saveData: filteredData
          });
        }
      }.bind(this));

    }.bind(this));
    
  },

  orderData: function(){
    var filteredData = this.filterData(this.state.backupData.reverse());
      this.setState({
        saveData: filteredData
      });
  },

  setSearchTerm: function(newSearchTerm, site){
    var searcher = new Object();
    searcher.term = newSearchTerm;
    searcher.site = site;
    this.setState({
      searchTerm: searcher
    }, function(){
      this.setState({
        saveData: this.filterData(this.state.backupData)
      })
    });
  },

  filterData: function(data){
    var filteredData = new Object();
    for(var index in data){
      if(this.state.searchTerm.term.length > 0 || parseInt(this.state.searchTerm.site) != -1){
        if(data[index].site == parseInt(this.state.searchTerm.site) || parseInt(this.state.searchTerm.site) == -1){
          if(this.fuzzysearch(this.state.searchTerm.term, data[index].name)){
            filteredData[index] = data[index];
          }
        }
      } else {
        filteredData = data;
      }
      
    }
    for(var i = 0; i < data.length; i++){
      if(this.state.searchTerm.term.length > 0 || parseInt(this.state.searchTerm.site) != -1){
        if(data[i].site == parseInt(this.state.searchTerm.site) || parseInt(this.state.searchTerm.site) == -1){
          if(this.fuzzysearch(this.state.searchTerm.term, data[i].name)){
            filteredData[i] = data[i];
          }
        }
      } else {
        filteredData = data;
      }
    }
    return filteredData;
    
  },

  deleteSaveItem: function(key){
    if(confirm('are you sure?')){
      var ref = firebase.database().ref().child(key);
      ref.remove().then(function() {
        this.triggerAlert('Module deleted successfully.', 3);
        this.viewSaved();
      }.bind(this)).catch(function(error) {
        console.log(error);
        this.triggerAlert('Module deleting has failed. Try again later..', 1);
      }.bind(this));
    }
  },

  componentDidMount: function(){
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false})
      }
    }.bind(this));

    window.onresize = function(event){
      
      if(this.state.view != 'menu' && this.state.view != 'submenu' && this.state.view != 'saved'){
        this.setIframeSize;
      }

    }.bind(this);
  },
  render: function() {
    var html = '';
    var alertHTML = '';
    if(this.state.alert.alertShown){
      alertHTML = <Alert alert={this.state.alert} hideAlert={this.hideAlert}/>
    }
    if(this.state.loggedIn){
      html = <div>
      <Menu modulesObj={this.state.modulesObj}
              viewModule={this.viewModule}
              viewMenu={this.viewMenu}
              siteChange={this.siteChange}
              currentSite={this.state.currentSite}
              sites={this.state.sites}
              signOut={this.signOut}
              viewSaved={this.viewSaved}
              view={this.state.view}/>
        <MainSection view={this.state.view}
                     currentModule={this.state.currentModule}
                     modulesObj={this.state.modulesObj}
                     viewModule={this.viewModule}
                     currentContent={this.state.currentContent}
                     editMade={this.editMade}
                     getCode={this.getCode}
                     currentSite={this.state.currentSite}
                     addCta={this.addCta}
                     removeCta={this.removeCta}
                     resetCta={this.resetCta}
                     viewSubMenu={this.viewSubMenu}
                     setIframeSize={this.setIframeSize}
                     saveData={this.state.saveData}
                     sites={this.state.sites}
                     setSearchTerm={this.setSearchTerm}
                     viewSavedModule={this.viewSavedModule}
                     getSavedCode={this.getSavedCode}
                     ref="mainSection"
                     deleteSaveItem={this.deleteSaveItem}
                     orderData={this.orderData}/>
        <CodeModal ref="codeModalChild" saveModule={this.saveModule} state={this.state}/>
        <HelpModal />
        </div>;
    } else {
      html = <SignIn signIn={this.signIn} passwordReset={this.passwordReset}/>
    }
    return (
      <div className="container">
        {alertHTML}
        {html}
      </div>
    );
  }


});
module.exports = ModuleMaker;

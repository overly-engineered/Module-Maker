/** @jsx React.DOM */
  'use strict';
  var React = require('react');

  var ArticleQuoteImage = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },

    createBody: function() {
      return {__html: this.props.currentContent.bodyCopy};
    },
    createCite: function(){
      return {__html: this.props.currentContent.bodyCopyTwo};
    },
    createQuote: function(){
      return {__html: this.props.currentContent.subHeading};
    },
    componentWillMount: function(){
      if(!this.props.currentContent.savedState){
        this.props.currentContent.image = '848779-nyetimber-2';
        this.props.currentContent.subHeading = 'Whether toasting the summer with friends, or sipping your way through the social calendar, a bubbly accompaniement is essential.';
        this.props.currentContent.bodyCopyTwo = '<strong>Ken Mackay Master of Wine</strong><br>Wine Buyer - Champagne';
        this.props.currentContent.bodyCopy = 'Lorem ipsum Eu ullamco ea ut occaecat pariatur nostrud in aliquip voluptate id mollit consectetur ut ad non voluptate qui consequat deserunt irure labore enim fugiat sit minim voluptate consequat sunt dolor aute est consectetur proident nostrud fugiat ut sit cupidatat pariatur consectetur sunt labore laboris pariatur ex consequat consequat voluptate eiusmod commodo eiusmod est cillum nostrud culpa Excepteur nostrud quis mollit pariatur ea sint sint cupidatat minim nisi fugiat consequat qui aute in adipisicing non nisi dolore ea sit cillum dolore laborum dolor anim velit fugiat mollit dolore tempor ad proident voluptate Excepteur anim sint cillum culpa proident velit pariatur mollit eu labore enim in irure irure ea eu ex minim sunt est veniam esse ut in nulla voluptate adipisicing.';
        this.props.editMade(this.props.currentContent);
      } else {
        this.props.currentContent.savedState = false;
      }
    },
    componentDidMount: function(){
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.image.getDOMNode().clientHeight)
      }.bind(this);
    },
    componentDidUpdate: function(){
      this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
    },
    render: function() {
      
      return (
        <div className="rowGrid article">

            <div className="col-sm-4" ref="row">

              <img ref="image" src={"https://s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />

            </div>

            <div className="col-sm-8">

              <div className="article">

              <div className="article__text">
                
                <h2>{this.props.currentContent.heading}</h2>

                  <div className="article__text__col--2">

                    <blockquote>

                      <p dangerouslySetInnerHTML={this.createQuote()}/>

                      <footer>
                        <cite dangerouslySetInnerHTML={this.createCite()}/>
                      </footer>
  
                    </blockquote>

                    <p dangerouslySetInnerHTML={this.createBody()}/>

                  </div>

              </div>
                
            </div>

          </div>

        </div>
      );
    }

  });

  module.exports = ArticleQuoteImage;

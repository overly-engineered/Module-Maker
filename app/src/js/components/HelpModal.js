/** @jsx React.DOM */
'use strict';

var React = require('react');

var HelpModal = React.createClass({

  triggerHelpModal: function(){
    $(this.refs.helpModal.getDOMNode()).modal();
  },

  componentDidMount: function(){
    $(this.refs.scrollSpy.getDOMNode()).scrollspy({target: '#scrollSpyNav', offset: 156});
    this.refs.subtitles.getDOMNode().setAttribute('default','');
    this.refs.subtitlesTwo.getDOMNode().setAttribute('default','');
  },
  
  render: function() {
    return (
      <div>
        <div className="helpButton" onClick={this.triggerHelpModal}>
          <img src="/help.png"/>
        </div>
        <div className="modal fade" ref="helpModal">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Help Section</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body"  id="scrollSpy">
                <nav id="scrollSpyNav" className="navbar navbar-light bg-faded">
                  <ul className="nav nav-pills noborder">
                    <li className="nav-item mr-1"><a className="nav-link active" href="#Intro">Introduction</a></li>
                    <li className="nav-item dropdown mr-1">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">The Basics</a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#basicIntro">Intro</a>
                        <a className="dropdown-item" href="#basicone">Creating</a>
                        <a className="dropdown-item" href="#basictwo">Saving</a>
                        <a className="dropdown-item" href="#basicthree">Viewing</a>
                      </div>
                    </li>
                    <li className="nav-item mr-1"><a className="nav-link" href="#Process">Process</a></li>
                    <li className="nav-item mr-1"><a className="nav-link" href="#videos">Videos</a></li>
                    <li className="nav-item mr-1"><a className="nav-link" href="#FAQ">FAQs</a></li>
                  </ul>
                </nav>
                <div ref="scrollSpy" className="scrollspybody mt-4 helpModal">
                  <div className="helpContent">
                    <h4 id="Intro">Introduction</h4>
                    <p className="centerText">Module maker has been created as a way of providing consistent and reliable HTML for use on the specialist shops site. You can either follow the steps in 'The basics', or watch the videos at the bottom of this popup.</p>
                    <p className="centerText">These modules are designed to be copied and dropped into management centre without any modification of the code once it is complete. Not only could there be possible side affects from editing the code after getting it from ModuleMaker, there is also a significant chance of breaking the design team guidelines on resusable components.</p>
                    <p className="centerText">If you think you have found a bug or a module that does not work when dropped into management centre email either <a target="_blank" rel="noopener" href="mailto:jamie.pettman@waitrose.co.uk">Jamie</a> or <a target="_blank" rel="noopener" href="mailto:dara.djakovic@waitrose.co.uk">Dara</a></p>
                  </div>
                  <hr/>
                  <div className="helpContent Mutli">
                    <div className="helpContent">
                      <h4 id="basicIntro">The Basics</h4>
                      <p>The essential parts of ModuleMaker can be split into three categorys</p>
                      <ul>
                        <li>Creating/Editing <small>The creation of a new module</small></li>
                        <li>Saving <small>Saving a new module so it can be recalled later</small></li>
                        <li>Viewing/Editing <small>Viewing a list of recalled modules and using the one you need.</small></li>
                      </ul>
                      <p>These three sections should provide you all you need to create, recall and edit modules suitable for use on the specialist shops.</p>
                      <p>You will find that some modules are not available when creating modules for TMG. If there is a module you want for TMG get in touch with the Design team and it will be put underconsideration</p>
                    </div>
                    <div className="helpContent">
                      <h5 id="basicone">Creating Modules</h5>
                      <p>You can create a module by following the steps below. If you have any problems one of the <a href="#videos">videos</a> shows a full module being created</p>
                      <ol>
                        <li>Select the Module Type you want to use from the menu or the dropdown box. Some of the options have multiple variants so you may be shown a sub menu before the editing screen.</li>
                        <li>Once on the editing screen you will see both the module you are editing and a collection of dropdowns which is where you enter the new information for the new module.</li>
                        <li>As you update the fields on the right hand side you should see the module on the left update with the new information. It is very important you include all the necessary information for all sections especially the CTA section as the GA tracking will be compiled from this.</li>
                        <li>Once you have finished inputting your data. Click the create Module button, to see the code modal appear. From there you have the options of copying your code to be dropped straight into management centre. Or saving your module for later use.</li>
                        <li>Once you have copied the code or save the module you may edit the module. However keep in mind once you close the page your new module will dissappear if you have not saved it before hand.</li>
                      </ol>
                    </div>
                    <div className="helpContent">
                      <h5 id="basictwo">Saving Modules</h5>
                      <p>Saving modules is done throught the Code Modal which is shown after the "Create Module" button is clicked. You must enter a name to save you module.</p>
                      <p>In the interest of being able to find them quickly afterwards it is recommended that you save you module with the following naming convention.</p>
                      <blockquote>Promo2 PageName AssetName</blockquote>
                      <ul>
                        <li>
                        Promo2 <small>This is our Promo name</small>
                        </li>
                        <li>
                        PageName <small>Where the module is to reside on site</small>
                        </li>
                        <li>
                        AssetName <small>The asset name such as "Rioja Banner"</small>
                        </li>
                      </ul>
                      <p>E.g</p>
                      <blockquote>Promo3 Allwines Rioja Banner</blockquote>
                    </div>
                    <div className="helpContent">
                      <h5 id="basicthree">Viewing Saved Modules</h5>
                      <p>Save modules can be viewed on the saved modules screen accessible throught the "Saved Modules" button in the top menu.</p>
                      <p>Once there you can see a complete list of the modules that have been saved in the past. You can also save by site or by a string of text entered into the search bar at the top of the page.</p>
                      <p>You will be able to complete one of three actions for each of the saved modules dislpayed.</p>
                      <ul>
                      <li>Get code <small>Get a copy of the code for the module to use again</small></li>
                      <li>Edit <small>Open the saved module in the edit screen to make changes, from there you can get the edited code and save your new variant of the module.</small></li>
                      <li>Delete <small>Delete modules, this will delete them permenantly there is no possibility of bringing them back once deleted</small></li>
                      </ul>
                    </div>
                  </div>
                  <hr/>
                  <div className="helpContent">
                    <h4 id="Process">Process</h4>
                    <h5>Where does ModuleMaker fit in?</h5>
                    <p>ModuleMaker was designed and built to fit into the current design workflow. All requests for new assets should follow the normal process and be entered into podio. If it is a simple request then ModuleMaker can be used to create the module once a design has been returned.</p>
                    <p>ModuleMaker is also ideal for use in adding in new assets which do not need custom development, or amending simple assets that are already on site.</p>
                    <p>To help keep track of what is being changed through the use of ModuleMaker we would ask that you inform a member of the design team of anychanges you make. You may wish to implement your own internal team process and send any changes over in batches.</p>
                    <h5>Do's and Don'ts</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <h6>Do</h6>
                        <ul>
                          <li>Place code from ModuleMaker straight into management centre.</li>
                          <li>Give your Module an informative name when saving.</li>
                          <li>Select the site you are working for to ensure correct GA tagging and help with searching for saved elements.</li>
                          <li>Pay special attention to the CTA section to ensure all GA tagging and link attributes are complete.</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6>Dont</h6>
                        <ul>
                          <li>Attempt to modify one type of asset to make it another type. Starting again should be the first option.</li>
                          <li>Use imagery created for one asset type in a different asset type unless the types are in the same category.</li>
                          <li>Save more than once. To ensure that there are not unnecessary saved modules in the list.</li>
                        </ul>
                      </div>
                    </div>
                    <p><small>For more information see the FAQ entries at the bottom of the help section</small></p>

                  </div>
                  <hr/>
                  <div className="helpContent Mutli">
                    <h4 id="videos">Video help</h4>
                    <div className="row">
                      <div className="helpContent video auto">
                        <h5>Creating and saving a module</h5>
                          <video className="helpVideo" controls>
                            <source src="/videos/Createandsave.webm" type="video/webm"/>
                            <track ref="subtitles" kind="subtitles" srclang="en" src="/videos/Createandsave.vtt" default/>
                          </video>
                      </div>
                      <div className="helpContent video auto">
                        <h5>Viewing Saved Modules</h5>
                          <video className="helpVideo" controls>
                            <source src="/videos/Viewsaved.webm" type="video/webm"/>
                            <track ref="subtitlesTwo" kind="subtitles" srclang="en" src="/videos/Viewsaved.vtt" default/>
                          </video>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className="helpContent auto">
                    <h4 id="FAQ">FAQs</h4>
                    <p className="question">
                    How do I see saved modules?
                    </p>
                    <p className="answer">
                    Click the 'Saved Modules' button in the top menu. You can then use the search bar and site filters to limit the amount of results you see.
                    </p>
                    <p className="question">
                    The Module I wanted to use isnt available for TMG?
                    </p>
                    <p className="answer">
                    Some modules are not available for TMG as the site has a different set of style guides.
                    </p>
                    <p className="question">
                    Can i use this for Pet and Garden too?
                    </p>
                    <p className="answer">
                    No, due to the fact that Pet and Garden are created in different ways we cannot support it for use with either WaitrosePet or WaitroseGarden.
                    </p>
                    <p className="question">
                    Can i request a new module be added to ModuleMaker?
                    </p>
                    <p className="answer">
                    Yes you can. Get in touch with either <a target="_blank" rel="noopener" href="mailto:jamie.pettman@waitrose.co.uk">Jamie</a> or <a target="_blank" rel="noopener" href="mailto:dara.djakovic@waitrose.co.uk">Dara</a> and your request will be considered. If it is successful you should see it in ModuleMaker within a few weeks.
                    </p>
                    <p className="question">
                    I accidently deleted a module can i get it back?
                    </p>
                    <p className="answer">
                    No, once a module has been deleted there is no way of recovering it. We always aske you if you are sure before deleting any saved modules.
                    </p>
                    <p className="question">
                    The styles on site have changed will ModuleMaker need changing too?
                    </p>
                    <p className="answer">
                    As long as the changes are only in the css of the site, no change is necessary as all styling is pulled directly from the live site for use in ModuleMaker.
                    </p>

                    <p className="question">
                    I have a question that isnt answered here, what do i do?
                    </p>
                    <p className="answer">
                    Best idea is to come over and talk to either Jamie or Dara, and we will help you as best we can.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = HelpModal;
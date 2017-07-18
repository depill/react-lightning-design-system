import React, { Component, PropTypes } from 'react';

import classNames from 'classnames';

import MediaObject from './MediaObject';
import Text from './Text';
import Grid, { Row, Col } from './Grid';
import Icon from './Icon'

export class DockedComposerFooter extends Component {
  render() {
    return (
      <footer className="slds-docked-composer__footer slds-shrink-none">
        <div className="slds-col_bump-left slds-text-align_right">
          <button className="slds-button slds-button_brand">Action</button>
        </div>
      </footer>
    )
  }
}

export class DockedComposerHeader extends Component {

  render() {
    // const { rightActions, info, breadCrumbs, figure, legend } = this.props;
    // const content = this.renderWithMedia(figure);
    // const infoPart = info && (breadCrumbs || legend || rightActions) ? this.renderInfo(info) : null;

    return (
      <header className="slds-docked-composer__header slds-grid slds-shrink-none" aria-live="assertive">
        <div className="slds-media slds-media_center slds-size_1-of-1 slds-no-space">
          <div className="slds-media__figure slds-m-right_x-small">
            <Icon 
              category="standard"
              icon="call"
              size="small"
              container={false}
              />
          </div>

          <MediaObject>
              <h2 className="slds-truncate" id="modal-heading-id-1" title="Header">Header</h2>
          </MediaObject>
        </div>
        <div className="slds-col_bump-left slds-shrink-none">
          <button className="slds-button slds-button_icon slds-button_icon" title="Minimize window">
            <Icon 
              category="utility"
              icon="minimize_window"
              size="x-small"
              />
            <span className="slds-assistive-text">Minimize Composer Panel</span>
          </button>
          <button className="slds-button slds-button_icon slds-button_icon" title="Expand Composer">
            <Icon 
              category="utility"
              icon="expand_alt"
              size="x-small"
              />
            <span className="slds-assistive-text">Expand Composer Panel</span>
          </button>
          <button className="slds-button slds-button_icon slds-button_icon" title="Close">
            <Icon 
              category="utility"
              icon="close"
              size="x-small"
              />
            <span className="slds-assistive-text">Close Composer Panel</span>
          </button>
        </div>
      </header>
    );
  }
}

DockedComposerFooter.propTypes = {

};

DockedComposerHeader.propTypes = {
  minimize: PropTypes.bool,
  expand: PropTypes.bool,
  close: PropTypes.bool,

};

const DockedComposer = props =>
  <div
    className='slds-docked_container'
    {...props}
  >
    <section 
              className="slds-docked-composer slds-grid slds-grid_vertical slds-is-open" 
              role="dialog" 
              aria-labelledby="modal-heading-id-1" 
              aria-describedby="modal-content-id-1"
      >
        {props.children}

    </section>
 
  </div>;

DockedComposer.propTypes = {
  children: PropTypes.node,
};

export default DockedComposer;
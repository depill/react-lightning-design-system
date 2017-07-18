import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {
  DockedComposer, 
  DockedComposerHeader,
  DockedComposerFooter,
  Icon, Crumb, Button, ButtonGroup, DropdownButton, MenuItem, Text, Grid,
} from '../src/scripts';

storiesOf('DockedComposer', module)
  .addWithInfo('Base', 'Default Page Header', () => (
    <DockedComposer>
      <DockedComposerHeader
        minimize={false} 
        expand={false} 
        close={true}
      />
      <div class="slds-docked-composer__body" id="modal-content-id-1">
        <div class="slds-align_absolute-center">Docked Composer Panel Body
          <br /> This area consumes the feature</div>
      </div>
      <DockedComposerFooter 
      />
    </DockedComposer>
  ))
;

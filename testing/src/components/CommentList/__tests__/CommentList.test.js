import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {

});
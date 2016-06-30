import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Welcome from './Welcome';

describe('Welcome', () => {
  it('returns the correct text', () => {
    const wrapper = render(<Welcome text="Foo" />);

    // assert.equal(wrapper.find('h1').text(), 'Foo');
    expect(wrapper.find('h1').text()).to.equal('Foo');
  });
});

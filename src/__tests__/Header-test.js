import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Header from '../Header';

describe('Header comonent test', function() {
  it('should mount in a full DOM - "navbar"', function() {
    expect(mount(<Header />).find('.navbar').length).toBe(1);
  });

  it('should mount in a full DOM - "navbar - brand"', function() {
    expect(mount(<Header />).find('.navbar-brand').length).toBe(1);
  });

  it('should mount twice "a" tag when isAuth is true', function(){
    const wrapper = mount(<Header />);
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find('a').length).toBe(2);
  });

  it('should mount "span" tag when isAuth is false', function(){
    const wrapper = mount(<Header />);
    wrapper.setProps({ isAuth: false });
    expect(wrapper.find('span').length).toBe(1);
  });

  it('should not mounted "a" tag when isAuth is false', function(){
    const wrapper = mount(<Header />);
    wrapper.setProps({ isAuth: false });
    expect(wrapper.find('a').length).toBe(0);
  });

  it('should mount Glyphicon when isAuth is true', function(){
    const wrapper = mount(<Header />);
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find('Glyphicon').length).toBe(1);
  });

  it('should be selectable by class "toggle-nav" when isAuth is true', function(){
    const wrapper = mount(<Header />);
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find('.toggle-nav').length).toBe(1);
  });

  it('should be selectable by class "btn" when isAuth is true', function(){
    const wrapper = mount(<Header />);
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find('.btn').length).toBe(1);
  });

  it('should be selectable by class "pull-left" when isAuth is true', function(){
    const wrapper = mount(<Header />);
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find('.pull-left').length).toBe(1);
  });
});

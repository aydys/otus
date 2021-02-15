import React from "react";
import { shallow } from "enzyme";
import { ListPosts } from "./ListPosts";

describe('ListPosts', () => {

  const wrapper = shallow(<ListPosts />)
  it('layout dom elements (snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('exist Post component', () => {
    console.log(wrapper.debug())
    // expect(wrapper.find('Post')).toHaveLength(1);
  })
  it('exist InfoPost component', () => {

  })
})

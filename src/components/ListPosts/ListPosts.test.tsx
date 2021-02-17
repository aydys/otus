import React from "react";
import { shallow } from "enzyme";
import { ListPosts } from "./ListPosts";

describe('ListPosts', () => {
  
  const initialState = {
    posts: [
      {
        id: 1,
        title: 'Some Title'
      }
    ],
    post: {
      title: '',
      id: 1,
      body: ''
    }
  }

  const wrapper = shallow(<ListPosts />)
  it('layout dom elements (snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('initial state of component', () => {
    wrapper.setState(initialState);
    expect(wrapper.state()).toEqual(initialState);
  })

  it('exist Post component', () => {
    wrapper.setState(initialState);
    expect(wrapper.find('Post')).toHaveLength(initialState.posts.length);
  })
  it('exist InfoPost component', () => {
    expect(wrapper.find('InfoPost')).toHaveLength(1);
  })
})

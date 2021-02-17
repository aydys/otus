import React from "react";
import { shallow } from "enzyme";
import { InfoPost } from "./InfoPost";

describe('ListPosts', () => {
  
  const props = {
    post: {
      title: '',
      id: 1,
      body: ''
    }
  }

  const wrapper = shallow(<InfoPost {...props} />)
  it('layout dom elements (snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('InfoPost with props', () => {
    const nextProps = {
      ...props,
      post: {
        ...props.post,
        title: 'Some title'
      }
    }

    const wrapper = shallow(<InfoPost {...nextProps} />)

    it('render Title of Post', () => {
      expect(wrapper.find('h4').text()).toEqual(nextProps.post.title);
    })
  })  
})

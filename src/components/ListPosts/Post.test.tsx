import React from "react";
import { shallow } from "enzyme";
import { Post } from "./Post";

describe('Post', () => {

  const props = {
    post: {
      title: '',
      id: 0,
      body: ''
    },
    onClick: jest.fn()
  }

 
  it('layout dom elements (snapshot)', () => {
    const wrapper = shallow(<Post {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('Post with props', () => {
    const nextProps = {
      ...props,
      post: {
        ...props.post,
        title: 'Some title'
      }
    }

    const wrapper = shallow(<Post {...nextProps} />)

    it('render Title of Post', () => {
      expect(wrapper.find('h4').text()).toEqual(nextProps.post.title);
    })

    it('simulate click to button', () => {
      wrapper.find('button').simulate('click', {
        preventDefault: () => {}
      })

      expect(nextProps.onClick).toHaveBeenCalledTimes(1)
    })
  })  
})

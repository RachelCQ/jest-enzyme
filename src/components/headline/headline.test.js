import React from 'react'
import {shallow} from 'enzyme'
import Headline from "./index";
import {findByTestAttr} from '../../../utils/index'

const setUp = (props={}) =>{
    const component = shallow(<Headline {...props}/>)
    return component
}
describe('Headline Component',()=>{
    describe('Have props',()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                header:'Test Header',
                desc:'Test Desc'
            }
            wrapper=setUp(props)
        })
        it('should render without errors', function () {
            const compnent = findByTestAttr(wrapper,'headlineComponent')
            expect(compnent.length).toBe(1)
        });

        it('should render a H1', function () {
            const h1 = findByTestAttr(wrapper,'header')
            expect(h1.length).toBe(1)
        });
        it('should render a desc', function () {
            const desc = findByTestAttr(wrapper,'desc')
            expect(desc.length).toBe(1)
        });
    })
    describe('Have No props',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp()
        })
        it('should not render', function () {
            const componet = findByTestAttr(wrapper,'headlineComponent')
            expect(componet.length).toBe(0)
        });
    })
})


import React from 'react'
import { shallow } from 'enzyme'
import { Filters } from '../../src/components/Filters/Filters'
import { getSort } from '../../src/redux/actions'

it('debería llamar a la acción getSort y actualizar el estado', () => {
    const wrapper = shallow(<Filters />)
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance.props, 'dispatch')
    wrapper.find('#sort').simulate('change', { target: { value: 'asc' } })
    expect(spy).toHaveBeenCalledWith(getSort('asc'))
    expect(wrapper.state('sort')).toBe(true)
})

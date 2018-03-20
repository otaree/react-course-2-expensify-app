import React from 'react';
import { shallow } from 'enzyme';
import numeral from 'numeral';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpressSummary correctly with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={25} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpressSummary correctly with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={23232323232424}/>);
    expect(wrapper).toMatchSnapshot();
});
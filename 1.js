//given
  const component = shallow(<MyComponent />);
  const form = component.find('input');
  //when
  form.props().onChange({target: {
    name: 'myName',
    value: 'myValue'
  }});
  //then
  expect(component.getElements()).toMatchSnapshot();
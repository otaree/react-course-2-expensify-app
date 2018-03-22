import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = '123adc';
    const state = authReducer({}, {type: 'LOGIN', uid});
    expect(state).toEqual({
        uid
    });
});

test('should clear uid for logout', () => {
    const stateDate = {
        uid: '123abc'
    };
    const state = authReducer(stateDate, {type: 'LOGOUT'});
    expect(state).toEqual({});
});
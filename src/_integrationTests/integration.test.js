import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fetchPosts } from './../actions';

describe('fetchPosts action', () => {
    beforeEach(() => {
        // moxios install, whenever we hit axios, it updates the library so it doesn't actually go out to make the request.
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall(); // this will just restore the axios library to its former state. 
    })

    test('Store is updated correctly', () => {
        const expectedState = [{
            title: 'Example title 1',
            body: 'Some Text'
        },
        {
            title: 'Example title 2',
            body: 'Some Text'
        },
        {
            title: 'Example title 3',
            body: 'Some Text'
        }];
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })

        return store.dispatch(fetchPosts()).then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    })
})
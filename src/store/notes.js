import { createStore } from 'vuex'

export default createStore({
    state: {
        notes: [
            {'id': '2313123213', 'title': 'Nota 1'},
            {'id': '1111111111', 'title': 'Nota 2'}
        ]
    },
    mutations: {
        addNote(state, payload) {
            let uniqueID = Date.now();
            state.notes.push({id: uniqueID, title: payload})
        }
    }
})
import { createStore } from 'vuex'

export default createStore({
    state: {
        notes: [
            {'id': 2313123213, 'title': 'Nota 1'},
            {'id': 1111111111, 'title': 'Nota 2'},
            {'id': 2355444444, 'title': 'Nota 3'}
        ]
    },
    mutations: {
        addNote(state, payload) {
            let uniqueID = Date.now();
            state.notes.push({id: uniqueID, title: payload})
        },
        removeNoteById(state, payload) {
            let filtered = state.notes.filter((note) => {
                return note.id != payload
            })

            state.notes = filtered
        }
    },
    getters: {
        getAllNotes(state) {
            return state.notes;
        }
    }
})
import { createStore } from 'vuex'

export default createStore({
    state: {
        notes: [
            {'id': 1623851588300, 'title': 'Nota 1', 'completed': false},
            {'id': 1623851587300, 'title': 'Nota 2', 'completed': true},
            {'id': 1623851581300, 'title': 'Nota 3', 'color': 'pink', 'completed': false}
        ],
    },
    mutations: {
        addNote(state, payload) {
            let uniqueID = Date.now();
            state.notes.push({
                id: uniqueID,
                title: payload,
                completed: false
            })
        },
        removeNoteById(state, payload) {
            let filtered = state.notes.filter((note) => {
                return note.id != payload
            })

            state.notes = filtered
        },
        addNoteColor(state, payload) {
            if(payload.color) {
                state.notes.filter((note) => {
                    if(note.id == payload.id) {
                        note.color = payload.color
                    }
                })
            }
        }
    },
    getters: {
        getAllNotes(state) {
            return state.notes;
        },
        getCompletedNotes(state) {
            return state.notes.filter(note => note.completed == true)
        },
        getIncompletedNotes(state) {
            return state.notes.filter(note => note.completed == false)
        }
    }
})
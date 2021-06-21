import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    entries: [
        {
            message : 'Testtext - hier stehen die Aufgaben dann',
            timestamp : new Date().toLocaleString(),
            cost: 30,
            updated: false
        },
        {
            message : 'Testtext - hier stehen die Aufgaben dann',
            timestamp : new Date().toLocaleString(),
            cost: 30,
            updated: false
        }
    ]
}

const getters = {
    GetEntries () {
        return state.entries;
    },
    GetEntryCount () {
        return state.entries.length;
    },
    GetTotalInput () {
            return state.entries.reduce(function(sum, item){
                console.log(sum);
                return sum + item.cost;
            },0)
    }
}

const mutations = {
    STORE_ENTRY (state, payload) {
        state.entries.push(payload);
    },

    DELETE_ENTRY (state, index) {
        state.entries.splice(index, 1);
    },

    EDIT_ENTRY (state, index) {
        state.entries.map ( entry => {
            entry.updated=false;
        })
        state.entries[index].updated = true;
    },

    UPDATE_ENTRY (state, newentry) {
        state.entries.map ( entry => {
            if(entry.updated)
            {
                entry.message=newentry.message;
                entry.timestamp=newentry.timestamp;
                entry.updated=false  : '';
        })
        state.entries.map ( entry => {
            entry.updated=false;
        })
    }
}

const actions = {
    StoreEntry(context, payload) {
        context.commit('STORE_ENTRY', payload);
    },

    DeleteEntry(context, ind) {
        // const index = context.state.entries.findIndex( entry => entry.timestamp === timestamp ); alte Version mit timestamp
        context.commit('DELETE_ENTRY', ind);
    },

    EditEntry(context, ind) {
        context.commit('EDIT_ENTRY', ind);
    },

    UpdateEntry (context, newentry) {
        context.commit('UPDATE_ENTRY', newentry)
    }
}

const StoreEntry =  new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })

export default StoreEntry


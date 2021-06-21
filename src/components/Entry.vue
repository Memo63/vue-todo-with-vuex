<template>
    <div>
        <div class="card-body"> 
           <h5 class="card-title">TODO #{{idinfo+1}}</h5> 
            <h6 class="card-subtitle mb-2 text-dark"> hinzugefügt am: {{StoreEntry.state.entries[idinfo].timestamp}} || gepl. Aufwand {{StoreEntry.state.entries[idinfo].cost}} Min.</h6>
            <p class="card-text">{{StoreEntry.state.entries[idinfo].message}}</p> 
            <div
            v-if="!StoreEntry.state.entries[idinfo].updated"       
            >
                <button
                class="btn" 
                @click="remove(idinfo)"
                >
                Löschen
                </button>

                <button 
                class="btn" 
                @click="makeEditable(idinfo)"
                >
                Bearbeiten
                </button>
            </div>

            <div
            v-if="StoreEntry.state.entries[idinfo].updated"
            >
                <input 
                v-model="message"
                >
                Aufwand
                <input
                style="width:50px;"
                type="number"
                v-model.number="cost"
                > 
                <button
                class="btn" 
                @click="update()"
                >
                Änderungen übernehmen
                </button> 
            </div> 
        </div>
    </div>
</template>

<script>

import StoreEntry from '../store/entry'

    export default {
        name: 'Entry',

        StoreEntry,

        props: ['idinfo'],

         data() {
          return {
              StoreEntry,
              message: '',
              cost: ''
              }
        },

        methods: {
        
            remove: function(timest){
            StoreEntry.dispatch('DeleteEntry', timest);
            },

            makeEditable (id){
            this.message = StoreEntry.state.entries[id].message;
            this.cost = StoreEntry.state.entries[id].cost;
            StoreEntry.dispatch('EditEntry', id);

            },

            update(){
                const newEntry = {
                message: this.message,
                timestamp: new Date().toLocaleString(),
                cost: this.cost,
                updated: false
                }
                StoreEntry.dispatch('UpdateEntry', newEntry);
            }

        }
        
    }

    //    created() {
    //          console.log('TEST');
    //         this.$emit('updateAll', this.entries);
    //     }
    

</script>





     


<style scoped>
.card-body{
    background-color: rgb(121, 216, 245);
    width: 400px;
    text-align: center;
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    color: white;
    border-style: double;
    border-color: rgb(153, 153, 170);
    border-width: thick;
    border-radius: 12px;
}
.btn{
    background-color: rgb(143, 153, 175);
    color: white;
    border-radius: 5px;
    margin: 5px;
}

</style>

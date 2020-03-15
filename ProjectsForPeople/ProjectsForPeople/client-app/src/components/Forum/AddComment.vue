<template>
    <v-text-field :auto-grow="true" :value="Message" :Placeholder="Placeholder"  :single-line="false" :solo="false" :rounded="rounded" :outlined="true"></v-text-field>


</template>




<script lang="ts">
    import Vue from 'vue'
    interface IAddComment {
        Message: string,
        Placeholder: string
    }
    export default Vue.extend({
        name: 'AddComment',
        data(): IAddComment {
            return {
                Message: "To jest Message",
                Placeholder:"Placeholder"
            }
        }
  })</script>

import { defineStore } from "pinia";
import { reactive } from "vue";

export const usePosts = defineStore('posts', {
    state: () => ({
        posts: reactive([]),
    }),
    actions: {
        set(obj) {
            this.$state.posts.push(obj);
        },
        hasItemByTitle(title) {
            const e =  this.$state.posts.some(e => e.title == title);
            if(e) {
                return true;
            } 
            return false;
        },
        getByTitle(title) {
            const e =  this.$state.posts.find(e => e.title == title);
            if(e) {
                return e;
            } 
            return false;
        }
    }
});
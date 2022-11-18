import { reactive } from 'vue';

export const store = reactive({

    breakingBadURL: 'https://www.breakingbadapi.com/api/characters',
    bbCharacters: [],
    isApiDone: true,
});
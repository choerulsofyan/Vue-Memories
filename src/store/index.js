import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                { 
                    id: 'm1', 
                    image: 'https://pix6.agoda.net/hotelImages/5871009/-1/cc6a9504ad5eddf5c7e54f4f97b99922.jpg?s=1024x768',
                    title: 'A trip into the mountain', 
                    description: 'It was a nice trip' 
                },
                { 
                    id: 'm2', 
                    image: 'https://cdn.britannica.com/s:800x1000/65/161665-050-C4B1FA75/Waves-North-Shore-Oahu-Hawaiian-Islands.jpg',
                    title: 'A trip into the sea', 
                    description: 'It was cool' 
                },
                { 
                    id: 'm3', 
                    image: 'https://thenationpress.net/imgs/2021/02/1612549734blobid1.jpg',
                    title: 'A trip into the forest', 
                    description: 'It was beautiful'
                 }
            ]
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId)
            }
        }
    }
});

export default store;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    totalAmount : 0
}

const cartStore = createSlice({
    name : "cart",
    initialState ,
    reducers : {
        addItem : (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalAmount += newItem.price * newItem.quantity;

            if(!existingItem)
            {
                state.items.push({
                    id : newItem.id,
                    title : newItem.title,
                    price : newItem.price,
                    quantity : newItem.quantity
                })
            }
            else {
                existingItem.quantity += newItem.quantity;
            }
        },

        removeItem : (state, action) => {
            const toBeRemoved = action.payload.id;

            const removingItem = state.items.find(item => item.id === toBeRemoved);

            state.totalAmount = state.totalAmount - (removingItem.price * removingItem.quantity);

            state.items = state.items.filter(item => item.id !== toBeRemoved)
        },

        increaseQty : (state, action) => {
            const itemId = action.payload.id;

            const item = state.items.find(item => item.id === itemId)

            if(item)
            {
                item.quantity += 1;
                state.totalAmount += item.price;
            }
        },

        decreaseQty : (state, action) => {
            const itemId = action.payload.id;

            const item = state.items.find(item => item.id === itemId)

            if(item)
            {
                item.quantity -= 1;
                state.totalAmount -= item.price;
                
                if(item.quantity === 0)
                {
                    state.items = state.items.filter(item => item.id !== itemId);
                }
            }
        }
    }
});

export const {addItem, removeItem, increaseQty, decreaseQty} = cartStore.actions;

export default cartStore.reducer;
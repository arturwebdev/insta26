import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    allMessages: [],
    activeUserId: null,
    currentDialoge: [],
  },
  reducers: {
    toggleActive(state, { payload: { fromId, toId } }) {
      state.activeUserId = toId;
      state.currentDialoge = state.allMessages.filter(
        (message) =>
          (message.toId === toId && message.fromId === fromId) ||
          (message.toId === fromId && message.fromId === toId)
      );
    },
    resetActive(state) {
      state.activeUserId = null;
      state.currentDialoge = [];
    },
    addMessage(state, { payload: { fromId, body } }) {
      const newMess = {
        id: new Date().getTime().toString(),
        fromId,
        toId: state.activeUserId,
        body,
      };
      state.allMessages.push(newMess);
      state.currentDialoge.push(newMess);
    },
  },
});

export const selectMessages = (state) => state.messages;
export const { addMessage, toggleActive, resetActive } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;

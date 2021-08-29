import { sortData } from "../functions/sortData";

export const ticketReducer = (state, action) => {
  switch (action.type) {
    case "setData": {
      const { ticketData, ticketStackSize } = action.payload;
      return { ...state, ticketData, ticketStackSize };
    }
    case "setTicketStackSize": {
      const updateState = {
        ticketStackSize: state.ticketStackSize + 5,
      };

      if (updateState.ticketStackSize > state.ticketData.length) {
        updateState.ticketStackSize = state.ticketData.length;
        updateState.moreTickets = false;
      }

      return { ...state, ...updateState };
    }
    case "showTickets": {
      return {
        ...state,
        ticketProcessedData: state.ticketData,
      };
    }
    case "changeSortType": {
      const { sortType } = action.payload;

      return { ...state, sortType };
    }
    case "sortData": {
      const ticketProcessedData = sortData(
        [...state.ticketData],
        state.sortType
      );

      return { ...state, ticketProcessedData };
    }
    default:
      throw new Error("Unknown action");
  }
};

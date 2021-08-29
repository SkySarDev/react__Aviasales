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
    case "changeSortType": {
      const { sortType } = action.payload;

      return { ...state, sortType };
    }
    case "sortData": {
      const sortedData = {};

      if (state.ticketFilter) {
        sortedData.ticketProcessedData = sortData(
          [...state.ticketProcessedData],
          state.sortType
        );
      } else {
        sortedData.ticketData = sortData([...state.ticketData], state.sortType);
        sortedData.ticketProcessedData = sortedData.ticketData;
      }

      return { ...state, ...sortedData };
    }
    case "changeFilter": {
      const { ticketFilter } = action.payload;
      const filteredData = {};

      if (ticketFilter) {
        filteredData.ticketProcessedData = state.ticketData.filter((ticket) =>
          ticketFilter.includes(ticket.segments[0].stops.length)
        );
      }

      return { ...state, ticketFilter, ...filteredData };
    }
    default:
      throw new Error("Unknown action");
  }
};

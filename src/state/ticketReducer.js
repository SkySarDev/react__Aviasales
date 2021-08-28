import { sortData } from "../functions/sortData";

export const ticketReducer = (state, action) => {
  switch (action.type) {
    case "setData": {
      return { ...state, ticketData: action.payload.data };
    }
    case "showTicketStack":
      const sortedData = sortData(state.ticketData, state.sortType);
      return {
        ...state,
        ticketData: sortedData,
        ticketStack: sortedData.slice(0, 5),
      };
    case "changeSortType":
      const { sortType } = action.payload;

      return { ...state, sortType };
    default:
      throw new Error("Unknown action");
  }
};

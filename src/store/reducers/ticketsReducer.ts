import { TAction } from "./../../entities/types";
import { GET_TICKETS_PACK, TOGGLE_FILTER } from "./../constants";

import { ITicketStoreStructure } from "./../../entities/interfaces";
import { Reducer } from "redux";

const initState: ITicketStoreStructure = {
  searchId: "",
  tickets: [],
  stop: false,
  filters: [
    {
      name: "all",
      label: "Все",
      id: Math.random(),
      data: "all",
      checked: false,
    },
    {
      name: "notransfer",
      label: "Без пересадок",
      id: Math.random(),
      data: 0,
      checked: false,
    },
    {
      name: "1transfer",
      label: "1 пересадка",
      id: Math.random(),
      data: 1,
      checked: false,
    },
    {
      name: "3transfer",
      label: "2 пересадки",
      id: Math.random(),
      data: 2,
      checked: false,
    },
    {
      name: "2transfer",
      label: "3 пересадки",
      id: Math.random(),
      data: 3,
      checked: false,
    },
  ],
};

export const ticketsReduser: Reducer<ITicketStoreStructure, TAction> = (
  state = initState,
  action
): ITicketStoreStructure => {
  switch (action.type) {
    case GET_TICKETS_PACK:
      return {
        ...state,
        tickets: action.tickets,
        stop: action.stop,
      };
    case TOGGLE_FILTER:
      return {
        ...state,
        filters: state.filters.map((item) => {
          if (item.id === action.id) {
            item.checked = !item.checked;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

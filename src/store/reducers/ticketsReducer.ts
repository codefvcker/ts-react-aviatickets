import { TAction } from "./../../entities/types";
import { GET_TICKETS_PACK } from "./../constants";

import { ITicketStoreStructure } from "./../../entities/interfaces";
import { Reducer } from "redux";

const initState: ITicketStoreStructure = {
  searchId: "",
  tickets: [],
  stop: false,
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
    default:
      return state;
  }
};

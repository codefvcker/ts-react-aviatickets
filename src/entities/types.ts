import { ITicket } from "./interfaces";
import {
  GET_TICKETS_PACK,
  TOGGLE_FILTER,
  SET_FILTER_PARAMS,
} from "./../store/constants";

export type TAction = TGetTicketsPack | TToggleFilter | TSetFilterParams;

// Actions types

export type TGetTicketsPack = {
  type: typeof GET_TICKETS_PACK;
  tickets: ITicket[];
  stop: boolean;
};

export type TToggleFilter = {
  type: typeof TOGGLE_FILTER;
  id: number;
};

export type TSetFilterParams = {
  type: typeof SET_FILTER_PARAMS;
};

//

export type TSegment = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

export type TCheckbox = {
  name: string;
  label: string;
  id: number;
  checked: boolean;
  data: string | number;
};

// [

// ]

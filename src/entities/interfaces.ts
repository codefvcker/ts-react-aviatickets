import { TCheckbox } from "./types";

export interface ITicket {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    }
  ];
}

export interface ITicketStoreStructure {
  searchId: string;
  tickets: ITicket[];
  stop?: boolean;
  filters: TCheckbox[];
}

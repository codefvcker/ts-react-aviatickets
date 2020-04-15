import { TGetTicketsPack } from "./../store/constants";

export type TAction = TGetTicketsPack | any;

export type TSegment = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

import React, { useEffect } from "react";
import { Ticket } from "../../components";
import { useSelector, useDispatch } from "react-redux";

import { TAppState } from "../../store/store";
import { ITicket } from "../../entities/interfaces";
import { getTicketsPack } from "../../store/actions/ticketsActions";
import { TCheckbox } from "../../entities/types";

export const TicketContainer: React.FC = () => {
  const dispatch = useDispatch();
  const tickets = useSelector<TAppState, ITicket[]>(
    (state) => state.tickets.tickets
  );
  const filters = useSelector<TAppState, TCheckbox[]>(
    (state) => state.tickets.filters
  );

  const renderTickets = (tickets: ITicket[]) => {
    return tickets
      .slice(0, 3)
      .map((ticket) => (
        <Ticket
          key={ticket.price + ticket.carrier}
          price={ticket.price}
          carrier={ticket.carrier}
          segments={ticket.segments}
        />
      ));
  };

  console.log("from CONTYNIR", tickets);
  console.log("from CONTYNIR FILTERS", filters);

  useEffect(() => {
    dispatch(getTicketsPack());
  }, []);
  return <div>{renderTickets(tickets)}</div>;
};

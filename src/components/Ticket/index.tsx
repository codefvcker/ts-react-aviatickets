import React from "react";
import { Paper } from "@material-ui/core";
import "./Ticket.scss";
import { ITicket } from "../../entities/interfaces";
import { isCorrectTime, timeConvert } from "./utils";
import { TSegment } from "../../entities/types";

export const Ticket: React.FC<ITicket> = ({ carrier, price, segments }) => {
  // const {origin, destination, date, stops, duration} = segments[0];

  //   const renderStops = (stops: string[]) =>
  //     stops.map((stop) => <span key={stop[0]}>{stop},&nbsp;</span>);

  let dats = Date.parse(segments[0].date);

  const renderTime = (time: string, duration: number) => {
    const timestamp = Date.parse(time);
    const start = new Date(timestamp);
    const finish = new Date(timestamp + duration * 60000);

    const actualTime = `${isCorrectTime(start.getHours())}:${isCorrectTime(
      start.getMinutes()
    )} - ${isCorrectTime(finish.getHours())}:${isCorrectTime(
      finish.getMinutes()
    )}`;
    return actualTime;
  };

  const renderStops = (stops: string[]) => {
    if (!stops.length) {
      return "Без пересадок";
    } else if (stops.length === 1) {
      return `${stops.length} пересадка`;
    }

    return `${stops.length} пересадки`;
  };

  const renderTicketInfo = (segments: TSegment[]) => {
    return segments.map((segment, i) => (
      <div key={Date.now() + segments[i].duration} className="ticket__info-row">
        <div className="ticket__info-piece">
          <span>
            {segments[i].origin}-{segments[i].destination}
          </span>
          <span>{renderTime(segments[i].date, segments[i].duration)}</span>
        </div>
        <div className="ticket__info-piece">
          <span>Время в пути</span>
          <span>{timeConvert(segments[i].duration)}</span>
        </div>
        <div className="ticket__info-piece">
          <span>{renderStops(segments[i].stops)} </span>
          <span>{segments[i].stops.join(", ")}</span>
        </div>
      </div>
    ));
  };

  return (
    <Paper elevation={3} className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">{price}₽</div>
        <div className="ticket__company-logo">
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo" />
        </div>
      </div>
      <div className="ticket__info">{renderTicketInfo(segments)}</div>
    </Paper>
  );
};

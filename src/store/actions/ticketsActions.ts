import { TAction } from "./../../entities/types";
// import { ThunkAction } from "redux-thunk";
import { GET_TICKETS_PACK } from "./../constants";
import { Dispatch } from "redux";

export const getTicketsPack = () => {
  return async (dispatch: Dispatch<TAction>) => {
    try {
      const resSearchId: Response = await fetch(
        "https://front-test.beta.aviasales.ru/search"
      );
      const searchId: any = await resSearchId.json();
      const resPack = await fetch(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`
      );
      const { tickets, stop } = await resPack.json();
      console.log("iz vntr", tickets, stop);
      dispatch({
        type: GET_TICKETS_PACK,
        tickets,
        stop,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};

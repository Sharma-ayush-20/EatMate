import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { UserContextProvider } from "../../utils/UserContext";

test("", () => {
  render(
    <UserContextProvider>
      <RestaurantCard resData={MOCK_DATA} />
    </UserContextProvider>
  );
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});

import { fireEvent,render, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";
// import "@testing-library/jest-dom/extend-expect";


describe("Footer", () => {
  //1.  check jika footer di render
  it("should render Footer component",  async () => {
    const renderedComponent = await render(<Footer />);

    expect(renderedComponent).toBeDefined();
  });

  // 2. check behavior props footer/ check jika props message di render
 it("should render props message", async () => {
    const renderedFooter = await render(<Footer message="Footer Message" />);

   const propsMessage = await renderedFooter.findByTestId("props-message");

  //  console.log(propsMessage.innerHTML)

   expect(propsMessage).toHaveTextContent("Footer Message");
 });

 //3  check function button change message
 it("should change message when button clicked", async () => {
   const renderedFooter = await render(<Footer message="Footer Message" />);

  const stateMessage = await renderedFooter.findByTestId("state-message");
  expect(stateMessage).toHaveTextContent("Hello world");

  const btn = await renderedFooter.findByTestId("change-message-btn");
  // simulasi click button
  fireEvent.click(btn);

  await waitFor(() => {
    expect(stateMessage).toHaveTextContent("State Changed");
  })
 })

});



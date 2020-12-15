import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  const component = mount(
    <Root>
      <App />
    </Root>
  );

  component.find(".fetch-comments").simulate("click");

  moxios.wait(() => {
    component.update();
    expect(component.find("li").length).toEqual(2);

    done();
    component.unmount();
  });
});

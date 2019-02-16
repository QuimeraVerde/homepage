import * as React from "react";
import { shallow } from "enzyme";

import { App } from "../app";

it("renders the heading", () => {
    const result = shallow(<App />).contains(<h1>Hello from the app!</h1>);
    expect(result).toBeTruthy();
});
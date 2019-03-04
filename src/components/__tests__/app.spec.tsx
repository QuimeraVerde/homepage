import * as React from "react";
import { shallow } from "enzyme";
import { App } from "../app";
import HookMessage from "../hookMessage";

it("renders the hook message", () => {
    const result = shallow(<App />).contains(<HookMessage/>);
    expect(result).toBeTruthy();
});
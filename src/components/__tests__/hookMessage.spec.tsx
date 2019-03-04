import * as React from "react";
import { shallow } from "enzyme";
import HookMessage from "../hookMessage";
import HookMessageSuffix from "../hookMessageSuffix";

it("renders the hook message with suffix", () => {
    const hookMessage = shallow(<HookMessage />)
    expect(hookMessage.find(HookMessageSuffix).exists()).toBeTruthy();
});
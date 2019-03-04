import * as React from "react";
import { shallow } from "enzyme";
import HookMessageSuffix from "../hookMessageSuffix";
import Typist from "react-typist";

it("renders the hook message with given suffix", () => {
    const hookMessageSuffix = shallow(<HookMessageSuffix suffix="foo" update={jest.fn}/>);
    expect(hookMessageSuffix.contains(<span>foo.</span>)).toBeTruthy();
    expect(hookMessageSuffix.contains(<span>bar.</span>)).toBeFalsy();
    hookMessageSuffix.setProps({ suffix: 'bar' });
    expect(hookMessageSuffix.contains(<span>foo.</span>)).toBeFalsy();
    expect(hookMessageSuffix.contains(<span>bar.</span>)).toBeTruthy();
});

it("renders typist", () => {
    const hookMessageSuffix = shallow(<HookMessageSuffix suffix="foo" update={jest.fn}/>)
    expect(hookMessageSuffix.find(Typist).exists()).toBeTruthy()
});

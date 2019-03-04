import * as React from "react";
import Typist from "react-typist";

interface IHookMessageSuffix {
    suffix: string,
    update: () => void
}

const HookMessageSuffix = ({ suffix, update }: IHookMessageSuffix) => {
    const [typing, setTypings] = React.useState(true);
    const doneTyping = () => {
        update()
        setTypings(false)
    }

    React.useEffect(() => {
        setTypings(true)
    })

    return typing ?
            <Typist className="h1" onTypingDone={doneTyping}>
                <span>{suffix}.</span>
                <Typist.Backspace count={8} delay={750} />
            </Typist> : <></>
}

export default HookMessageSuffix
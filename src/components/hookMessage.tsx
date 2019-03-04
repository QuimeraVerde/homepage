import * as React from "react";
import { useTranslation } from 'react-i18next';
import HookMessageSuffix from "./hookMessageSuffix"

const HookMessage = ({}) => {
    const { t } = useTranslation();
    const suffixes = t(`hookMessage.suffix`) as string[]

    // Update suffix
    const [count, setCount] = React.useState(0);
    const update = () => setCount((count+1)%(suffixes.length))

    return (
        <div className="typewriter-message">
            <div className="h1">{t('hookMessage.prefix')}&nbsp;</div>
            <HookMessageSuffix suffix={suffixes[count]} update={update}/>
        </div>
    );
}

export default HookMessage
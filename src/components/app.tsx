import * as React from "react";
import { useTranslation } from 'react-i18next';
import * as BackgroundImg from "../assets/background.jpg";
import HookMessage from "./hookMessage"

export const App = ({}) => (
        <>
            <div className="hook-container">
                <HookMessage />
            </div>
            <div className="background-img">
                <div className="overlay green"></div>
                <img src={BackgroundImg} />
            </div>
        </>
);
import React from "react";

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Row({ children }) {
    return <div className={`row`}>{children}</div>;
}

export function Column({ size, children }) {
    return <div className={"col-" + size}>{children}</div>
}
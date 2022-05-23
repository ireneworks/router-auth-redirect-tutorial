import React, {useContext} from "react";
import {nameContext} from "./nameContext";

export default function Dialogue() {
    const context = useContext(nameContext);
    return (
        <>
            <p>안녕하세요, {context}님!</p>
        </>
    )
}
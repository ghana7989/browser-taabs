/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Tabs({ title }) {
    const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

    function moveHighlight(e) {
        setHighlightStyle({
            left: e.nativeEvent.layerX - 150
        })
    }
    function hideHighlight(e) {
        setHighlightStyle({
            left: e.nativeEvent.layerX - 150,
            opacity: 0
        })
    }
    const url = `/${title}`;

    return (
        <div className="tab" onMouseLeave={hideHighlight} onMouseMove={moveHighlight}>
            <div className="highlight" style={highlightStyle} />
            <NavLink to={url} activeClassName="is-active" >{title}</NavLink>
        </div>
    )
}
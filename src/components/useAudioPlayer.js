import React, { useEffect, useRef } from "react"

export default function AudioPlayer({ url }) {
  return (
    <div
      className="sounder-widget"
      data-url={url}
      style={{
        marginLeft: `6px`,
        marginRight: `6px`,
        width: `100%`,
        minWidth: `88%`,
        height: `100%`,
        minHeight: `100%`,
        flexGrow: `1`,
        display: `block`,
      }}
    />
  )
}

import React from "react"

export default function AudioPlayer({ url }) {
  return (
    <div
      className="sounder-widget"
      data-url={url}
      style={{
        marginLeft: `6px`,
        marginRight: `6px`,
        width: `96%`,
        minWidth: `96%`,
        height: `100%`,
        minHeight: `100%`,
        flexGrow: `1`,
        display: `block`,
      }}
    />
  )
}

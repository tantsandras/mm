import React, { useEffect } from "react"

export default function AudioPlayer({ url }) {
  useEffect(() => {
    var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "soun_der",
      b = "https://embed.sounder.fm/"
    if (!gi.call(d, id)) {
      js = ce.call(d, "script")
      js.id = id
      js.src = b + "embed.js"
      q = gt.call(d, "script")[0]
      q.parentNode.insertBefore(js, q)
    }
  }, [])

  return (
    <div
      class="sounder-widget"
      data-url={url}
      style={{ width: `100%`, height: `100%` }}
    />
  )
}

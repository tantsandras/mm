import React, { useEffect} from "react"

export default function AudioPlayer({ url, status }) {
  console.log(status)
  useEffect(() => {
console.log('NILLI VANILLI WAS HERE', status)
    if (status === "entered") {
    var qs,
    js, 
    q, 
    s, 
    d = document, 
    gi = d.getElementById, 
    ce = d.createElement, 
    gt = d.getElementsByTagName, 
    id = 'soun_der', 
    b = 'https://embed.sounder.fm'; 
    if (!gi.call(d, id)) { 
    js = ce.call(d, 'script'); 
    js.id = id; js.src = b + '/embed.js'; 
    q = gt.call(d, 'script')[0]; 
    q.parentNode.insertBefore(js, q);
    }
}

  }, [status])
  
  return (
    <div
      className="sounder-widget"
      data-url={url}
      style={{ border: `none`, width: `100%`, minWidth: `100%`, height: `100%`, minHeight: `100%`, flexGrow: `1`, display: `block` }}
    />
  )
};
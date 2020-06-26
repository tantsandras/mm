/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/global.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
    `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  var qs,
    js,
    q,
    s,
    d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = "soun_der",
    b = "https://embed.sounder.fm"

  if (!gi.call(d, id)) {
    js = ce.call(d, "script")
    js.id = id
    js.src = b + "/embed.js"
    q = gt.call(d, "script")[0]
    q.parentNode.insertBefore(js, q)
  }

  if (prevLocation) {
    const widgets = document.getElementsByClassName('sounder-widget')
    for (let widget of widgets) {
      widget.innerHTML = '';
    }
    window.SounderFM_Embed && window.SounderFM_Embed.init()
  }
}
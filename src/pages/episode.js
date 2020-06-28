import React from "react"
import SEO from "../components/seo"
import PageContainer from "../components/container"
import { Router } from '@reach/router'
import EpisodeComp from "../components/episodeComp"

const EpisodePage = () => {
    return (

        <Router>
            <EpisodeComp path="/episode/:serial" />
        </Router>

    )
}


export default EpisodePage

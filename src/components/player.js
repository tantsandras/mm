import React from "react"
import styled from "styled-components"

const Spinner = () => (
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="0.8"
    />
  </StyledSpinner>
)

const StyledSpinner = styled.svg`
  animation: rotate 12s linear infinite;
  margin: 0 0 0 0;
  width: 100px;
  height: 100px;

  & .path {
    stroke: white;
    stroke-linecap: round;
    animation: dash 4s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

const Player = styled.section`
  margin-top: 110px;
  margin-bottom: 6rem;
  display: table;
  margin-left: auto;
  margin-rigth: auto;
  table-layout: fixed;
  cellspacing: 0;
  cellpadding: 0;
  overflow-x: auto;
  overflow-y: auto;
`

const element = {
  textAlign: `center`,
  width: `120px`,
  height: `110px`,
  display: `table-cell`,
  overflow: `hidden`,
  verticalAlign: `middle`,
  alignItems: `center`,
  margin: `0 auto`,
  cursor: `pointer`,
  backgroundColor: `rgba(0,0,0,0)`,
  border: `none`,
  outlineWidth: `0`,
}

const ButtonWrap = styled.span`
  width: 90px;
  margin: 0 auto;
  height: 90px;
  position: relative;
  border-radius: 50%;
  background: #e62347;
  -webkit-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
  -webkit-transition: transform 0.2s ease-out;
  -moz-transition: transform 0.2s ease-out;
  -o-transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.02);
  }
`

const Play = styled.button`
  position: absolute;
  left: 33px;
  border: 0;
  background: transparent;
  box-sizing: border-box;
  width: 0;
  height: 37px;
  border-color: transparent transparent transparent #100b2b;
  transition: 100ms all ease;
  cursor: pointer;
  border-style: solid;
  border-width: 18.5px 0 18.5px 30px;

  &:hover {
    border-color: transparent transparent transparent #46617c;
  }
`

const Pause = styled(Play)`
  border-style: double;
  border-width: 0px 0px 0px 25px;
`

const FastForward = styled.button`
  background: none;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-left: 10px solid;
  margin: 6.6px;
  cursor: pointer;
  &:before {
    position: absolute;
    left: 0;
    top: -10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left: 10px solid;
  }
`

const DoubleFastForward = styled(FastForward)`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  font-style: normal;
  color: #100b2b;
  text-align: left;
  text-indent: -9999px;
  direction: ltr;
  cursor: pointer;
  transition: transform 0.2s ease;
  -webkit-transition: transform 0.2s ease-out;
  -moz-transition: transform 0.2s ease-out;
  -o-transition: transform 0.2s ease-out;
  &:before,
  &:after {
    content: "";
  }
  &:hover {
    border-color: transparent transparent transparent #46617c;
  }
`
const Rewind = styled(FastForward)`
  transform: rotate(180deg);
`

const DoubleRewind = styled(Rewind)`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  font-style: normal;
  color: #100b2b;
  text-align: left;
  text-indent: -9999px;
  direction: ltr;
  cursor: pointer;
  transition: transform 0.2s ease;
  -webkit-transition: transform 0.2s ease-out;
  -moz-transition: transform 0.2s ease-out;
  -o-transition: transform 0.2s ease-out;
  &:before,
  &:after {
    content: "";
  }
  &:hover {
    border-color: transparent transparent transparent #46617c;
  }
`

const getTime = time => {
  if (!isNaN(time)) {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  }
}

class AudioPlayer extends React.Component {
  state = {
    selectedTrack: null,
    player: "stopped",
    currentTime: null,
    duration: null,
    isHovering: false,
  }

  handleTimeUpdate = e => {
    this.setState({
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    })
  }

  componentDidMount() {
    this.player.addEventListener("timeupdate", this.handleTimeUpdate)
    let track = this.props.track

    if (track) {
      this.player.src = track
      this.player.load()
      this.setState({ player: "stopped" })
    }
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", this.handleTimeUpdate)
  }

  setIntervalHelperBackward = () => {
    this.interval = setInterval(() => {
      this.player.currentTime -= 5
    }, 300)
  }

  setIntervalHelperForward = () => {
    this.interval = setInterval(() => {
      this.player.currentTime += 5
    }, 300)
  }

  clearIntervalHelper = () => {
    clearInterval(this.interval)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track = this.props.track

      if (track) {
        this.player.src = track
        this.player.load()
        this.player.play()
        this.setState({
          player: "playing",
          selectedTrack: track,
        })
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause()
      } else if (this.state.player === "stopped") {
        this.player.pause()
        this.player.currentTime = 0
        this.setState({ selectedTrack: null })
      } else if (
        this.state.currentTime > 1 &&
        this.state.currentTime === this.state.duration
      ) {
        this.setState({ selectedTrack: null, player: "stopped" })
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play()
      }
    }
  }

  render() {
    const currentTime = getTime(this.state.currentTime)
    const duration = getTime(this.state.duration)
    return (
      <>
        {this.state.player === "playing" || this.state.player === "paused" ? (
          <div
            aria-label="Current time of audio clip and duration of audio clip."
            style={{
              textAlign: `center`,
              height: `110px`,
              paddingTop: `70px`,
              marginBottom: `-110px`,
              color: `#100b2b`,
            }}
          >
            {currentTime} {duration != null && `/ ${duration}`}
          </div>
        ) : (
          ""
        )}

        {typeof window !== "undefined" &&
        window.location.href.match(/debug=1/) ? (
          <pre style={{ maxWidth: "100vw" }}>
            {JSON.stringify(this.state, null, "  ")}
          </pre>
        ) : null}
        <Player aria-label="Audio player.">
          <div style={element}>
            <DoubleRewind
              label="Rewind"
              aria-label="Rewind"
              onMouseDown={this.setIntervalHelperBackward}
              onMouseUp={this.clearIntervalHelper}
              onTouchStart={this.setIntervalHelperBackward}
              onTouchEnd={this.clearIntervalHelper}
              onClick={() => {
                return (this.player.currentTime -= 3)
              }}
              style={{ cursor: `pointer` }}
            />
          </div>
          <div style={element}>
            {this.state.player !== "playing" ||
            (this.player.currentTime > 1 &&
              this.player.currentTime === this.player.duration) ? (
              <ButtonWrap>
                <Play
                  autocomplete="off"
                  label="Play"
                  aria-label="Play"
                  onClick={() => {
                    return this.setState({
                      player: "playing",
                      selectedTrack: this.props.track,
                    })
                  }}
                />
              </ButtonWrap>
            ) : (
              <ButtonWrap>
                <Spinner />
                <Pause
                  autocomplete="off"
                  label="Pause"
                  aria-label="Pause"
                  onClick={() => {
                    return this.setState({ player: "paused" })
                  }}
                />
              </ButtonWrap>
            )}
          </div>
          <div style={element}>
            <DoubleFastForward
              label="Fast forward"
              aria-label="Fast forward"
              onMouseDown={this.setIntervalHelperForward}
              onMouseUp={this.clearIntervalHelper}
              onTouchStart={this.setIntervalHelperForward}
              onTouchEnd={this.clearIntervalHelper}
              onClick={() => {
                this.player.currentTime += 3
              }}
              style={{ cursor: `pointer` }}
            />
          </div>

          <audio
            ref={ref => (this.player = ref)}
            preload="none"
            type="audio/mp3"
            codecs="mp3"
          />
        </Player>
      </>
    )
  }
}

export default AudioPlayer

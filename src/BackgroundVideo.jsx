import React, { setState, Component } from "react";

export default class BackgroundVideo extends React.Component {
    render() {
        return (
            <video 
            ref={ref => (this.video = ref)}
            autoPlay
            muted 
            loop
            id="background-video"
            style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                opactiy: this.state.loading ? 0 : 1,
                transition: "opacity, 2s ease-in-out"
            }}
            >
                <source
                src="https://www.dropbox.com/s/20x0oc0u26otoqe/clss-background-fade-v.mp4??raw=1p4"
                type="video/mp4" />
            </video>
        )
    }

    state = {
        loading: true
    }
    
    componentDidMount() {
        if (this.video) {
          this.video.addEventListener("loadeddata", () => {
            this.setState({ loading: false });
          });
        }
    }
    
    componentWillUnmount() {
        if (this.video) {
            this.video.removeEventListener("loadeddata", () => {
    
            })
        }
    }

}

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
                <iframe src="https://www.youtube.com/embed/T4W4LXWRyTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

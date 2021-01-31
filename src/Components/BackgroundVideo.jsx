import React, { setState, Component } from "react";

export default class BackgroundVideo extends React.Component {
    render() {
        return (
            <video 
            ref={ref => (this.video = ref)}
            autoPlay
            muted 
            loop
            style={{
                position: "fixed",
                width: "100%",
                opactiy: this.state.loading ? 0 : 1,
                transition: "opacity, 2s ease-in-out"
            }}
            >
                <source
                src="https://res.cloudinary.com/custom-led-screen-solutions/video/upload/v1612066803/CLSS/CLSS-background-2_t5b7do.mp4"
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
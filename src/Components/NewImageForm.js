import React from 'react'

export default class NewImageForm extends React.Component {

    state = {
        image: {},
    }

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            return {
                [e.target.name]: e.target.files[0]
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("image", this.state.image)
        fetch(`http://localhost:4000/posts`, {
            method: "POST",
            body: form
        })
    }
    render(){
        return (
            <div className="form">
                <form onSubmit={this.onSubmit}>
                    <label>Image Upload</label>
                    <input type="file" name="image" onChange={this.onChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
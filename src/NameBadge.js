import React from 'react'

export default class extends React.Component {

    state = {
        name: ''
    }

    render() {
        return (
            <div>

                <h1>Name Badge</h1>

                <main>
                    <section>
                        <h2>Hello</h2>
                        <h3>My name is...</h3>
                    </section>
                    <h1>{this.state.name}</h1>
                    <article>
                        Nice to meet you.
                    </article>
                </main>

                        <div>
                            <input type="text"
                                   placeholder="Name"
                                   value={this.state.name}
                                   onChange={event => this.setState({ name: event.target.value })} />
                        </div>

            </div>
        )
    }

}
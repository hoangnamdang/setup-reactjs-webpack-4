import React from 'react'

export default function App() {
   console.log("ngon roi");
    return (
        <div>
            <div className="jumbotron text-center">
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <i className="fa fa-facebook"></i>
                        <h3>Column 1</h3>
                        <p>Lorem ipsum dolor..</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 2</h3>
                        <p>Lorem ipsum dolor..</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 3</h3>
                        <p>Lorem ipsum dolor..</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>"Namaste Everyone!"</h1>

const HeadingComponent = () => {
    return (
        <div>
            {heading}
            <h2>Hi Abhishek </h2>
            <h3>How are you!</h3>
        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
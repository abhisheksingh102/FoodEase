import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props)

        // console.log("Parent constructor");
    }

    componentDidMount() {
      }

    render() {
        // console.log("Parent render");
        return (
            <div>
                <h1>About Page</h1>
                <h2>Namaste React Series</h2>
                {/* <User name={"Abhishek Singh (function)"}/> */}
                <UserClass name={"First"} location={"Noida (class)"}/>
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <h2>Namaste React Series</h2>
//             {/* <User name={"Abhishek Singh (function)"}/> */}
//             <UserClass name={"Abhishek Singh (class)"} location={"Noida (class)"}/>
//         </div>
//     );
// };

export default About;
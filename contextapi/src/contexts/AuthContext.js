import React, { createContext, useState  } from 'react';

export const AuthContext = createContext();

// class AuthContextPovider extends React.Component {
//     state = {
//         isLoggedIn: false,
//     };

//     changeAuthStatus = () => {
//         this.setState({ isLoggedIn: !this.state.isLoggedIn });
//     }
//     render() {
//         return(
//             <AuthContext.Provider value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}>
//                 { this.props.children }
//             </AuthContext.Provider>

//         )
//     }
// }

const AuthContextPovider = (props) => {
    const [isLoggedIn, setIsLoggedIn ] = useState(false);
    const changeAuthStatus = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus }}>
                { props.children }
        </AuthContext.Provider>
    );
}

export { AuthContextPovider };
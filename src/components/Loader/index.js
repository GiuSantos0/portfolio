// import React from 'react';
// import { CircularProgress } from '@material-ui/core';
import Logo from "../../assets/logo.png";

// export default function Loader(){
//     return(
//         <>
//             <img className='logoLoader'src={Logo}/> 
//             <h4>is thinking</h4>
//             <CircularProgress variant="query" className='loader'color="secondary" />
//         </>
//     )
// }

import React from 'react';
import Fadein from 'react-fade-in';
import Lottie from 'react-lottie';
import * as Load from "../../assets/loading.json";
import * as CheckLoading from "../../assets/chekedload.json";
import Routes from '../../routes';
import Header from '../Header';
import './styles.css';


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Load.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
    }

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: CheckLoading.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
    };

export default class Loading extends React.Component {
    constructor(props){
       super(props)
       this.state = {
            loading: undefined, 
            done: undefined 
        }
    }
    componentDidMount() {
        setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ loading: true }));
        setTimeout (() => {
            this.setState ({done: true});
         }, 3000); 
        }, 2000);
        }

    render(){
       return(
           
            <div>
                {!this.state.done ? (
                    <Fadein>
                            <div>
                                {!this.state.loading ? (
                                    <>
                                        <img className='logoLoader'src={Logo}/> 
                                        <h4>is thinking</h4>
                                        <Lottie options={defaultOptions} height={150} width={150} />
                                    </>
                                ) : (
                                    <>
                                        <img className='logoLoader'src={Logo}/> 
                                        <h4>is thinking</h4>
                                        <Lottie options={defaultOptions2} height={150} width={150} />
                                    </>
                                )}
                            </div>
                    </Fadein>
                        ) : (
                        <Header conteudo={<Routes/>}/>
                    )}
            </div>
        )
    }
 }

import React, { Suspense, lazy }from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loader from './components/Loader';
import Logo from "./assets/logo.png";

const Home = lazy(() => import ('./pages/Home' )); 
const AboutMe = lazy(() => import ('./pages/AboutMe' )); 
const Skills = lazy(() => import ('./pages/Skills' ));
const MyJob = lazy(() => import ('./pages/MyJob' ));

const Routes = () => (
            <BrowserRouter>
                <Switch>
                    <Suspense fallback={<Loader/>}>
                        <Route exact path="/" component={() => <Home/>}/>
                        <Route exact path="/AboutMe" component={() => <AboutMe/>}/>
                        <Route exact path="/Skills" component={() => <Skills/>}/>
                        <Route exact path="/MyJob" component={() => <MyJob/>}/>
                        {/* <Route  path="*" component={() => <h1>Page not found</h1>} /> */}
                    </Suspense>
                </Switch>
            </BrowserRouter>
    );

export default Routes;
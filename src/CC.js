import React from "react";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/homepage.page";
import { CuliconPage } from "./pages/culicon/culicon.page";
import { ProcurementPage } from "./pages/procurement/procurement.page";
import { Header } from "./components/header/header.component";
import { Footer } from "./components/footer/footer.component";
import { Nav } from "./components/nav/nav.component";

export const CC = () => (
    <div>
        <Header />
        <Switch>
            <Route path="/procurement">
                <Nav />
                <ProcurementPage />
            </Route>
            <Route path="/culicon">
                <Nav />
                <CuliconPage />
            </Route>
            <Route path="/">
                <Homepage />
            </Route>
        </Switch>

        <Switch>
            <Route exact path="/">
                <Footer />
            </Route>
            <Route path="/:anything">
                <Footer hasForm />
            </Route>
        </Switch>
    </div>
);

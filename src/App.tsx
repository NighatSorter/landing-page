// src/App.tsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Machine from "@/pages/Machine";
import DateClassification from "@/pages/DateClassification";
import PalmClassification from "@/pages/PalmClassification";
import AutoService from "@/pages/AutoService";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <AnimatedRoutes />
        </BrowserRouter>
    );
}

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <PageTransition>
                            <Home />
                        </PageTransition>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <PageTransition>
                            <Contact />
                        </PageTransition>
                    }
                />
                <Route
                    path="/machine"
                    element={
                        <PageTransition>
                            <Machine />
                        </PageTransition>
                    }
                />
                <Route
                    path="/date-classification"
                    element={
                        <PageTransition>
                            <DateClassification />
                        </PageTransition>
                    }
                />
                <Route
                    path="/palm-classification"
                    element={
                        <PageTransition>
                            <PalmClassification />
                        </PageTransition>
                    }
                />
                <Route
                    path="/auto-service"
                    element={
                        <PageTransition>
                            <AutoService />
                        </PageTransition>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

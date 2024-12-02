import React from 'react'
import { Router } from "./pages/router";
import { BrowserRouter } from "react-router-dom"


export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

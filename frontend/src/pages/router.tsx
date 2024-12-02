import { Route, Routes } from "react-router-dom";
import React from "react";
import { pagesData } from "./pagesData";

export const Router = () => {
    const pageRoutes = pagesData.map(({ path, title, element }: any) => {
      return <Route key={title} path={`/${path}`} element={element} />;
    });
    return <Routes>{pageRoutes}</Routes>;
  };
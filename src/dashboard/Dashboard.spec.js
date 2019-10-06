// Test away

import React from "react";
import { render, fireEvent } from "@testing-library/react";
//Library imports

import Dashboard from "./Dashboard";


test("Look for the Display and Control Components", () => {
    const { findByTitle } = render(<Dashboard />);

    const displayComponent = findByTitle(/Display/i)
    const controlComponent = findByTitle(/Controls/i)
});
import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { CategoriesPage } from "~/pages/categories/categories.page";
import { QuestionsPage } from "~/pages/questions/questions.page";

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

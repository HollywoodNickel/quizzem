import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { BasePage } from "~/components/global/base-page";
import { CategoriesPage } from "~/pages/categories/categories.page";
import { GameCreatePage } from "~/pages/game-create/game-create.page";
import { GamePage } from "~/pages/game/game.page";
import { HomePage } from "~/pages/home/home.page";
import { PrepareGameRound } from "~/pages/prepare-game-round/prepare-game-round";
import { QuestionsPage } from "~/pages/questions/questions.page";

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<BasePage />}>
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/game/create" element={<GameCreatePage />} />
          <Route path="/prepare-game-round" element={<PrepareGameRound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

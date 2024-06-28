import { BoardSections, Status, Task, Pane } from "../types/local";
import { BOARD_SECTIONS } from "../mock/panes";
import { getTasksByStatus } from "./tasks";

// * Pass down board sections to this function

export const initializeBoard = (tasks: Task[], panes: Pane[]) => {
  const boardSections: BoardSections = {};

  Object.keys(BOARD_SECTIONS).forEach((boardSectionKey) => {
    boardSections[boardSectionKey] = getTasksByStatus(
      tasks,
      boardSectionKey as Status
    );
  });

  return boardSections;
};

export const findBoardSectionContainer = (
  boardSections: BoardSections,
  id: string
) => {
  if (id in boardSections) {
    return id;
  }

  const container = Object.keys(boardSections).find((key) =>
    boardSections[key].find((item) => item.id === id)
  );

  return container;
};

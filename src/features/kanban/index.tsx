"use client";

import React from "react";
import { useSensor, useSensors } from "@dnd-kit/core";
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  closestCorners,
  DragEndEvent,
  DragStartEvent,
  DragOverEvent,
  DragOverlay,
  defaultDropAnimation,
} from "@dnd-kit/core";

import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";

// utils
import { getTaskById, getTasksByStatus } from "./utils/tasks";
import { initializeBoard, findBoardSectionContainer } from "./utils/board";

// types
import { BoardSections as BoardSectionsType } from "./types/local";

// mock
import { INITIAL_TASKS } from "./mock/tasks";

import { Pane } from "./components/pane";
import { Task } from "./components/task";
import { MagicPane } from "./components/magic-pane";

export default function Kanban() {
  const tasks = INITIAL_TASKS;
  const initialBoardSections = initializeBoard(INITIAL_TASKS, []); //? load tasks from mongodb
  const [boardSections, setBoardSections] =
    React.useState<BoardSectionsType>(initialBoardSections);

  const [activeTaskId, setActiveTaskId] = React.useState<null | string>(null);

  const pointerSensor = useSensor(PointerSensor);
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  const sensors = useSensors(pointerSensor, keyboardSensor);

  // handle drag start behaviour
  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveTaskId(active.id as string);
  };

  // handle drag over behaviour
  const handleDragOver = ({ active, over }: DragOverEvent) => {
    // Find the containers
    const activeContainer = findBoardSectionContainer(
      boardSections,
      active.id as string
    );
    const overContainer = findBoardSectionContainer(
      boardSections,
      over?.id as string
    );

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setBoardSections((boardSection) => {
      const activeItems = boardSection[activeContainer];
      const overItems = boardSection[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.findIndex(
        (item) => item.id === active.id
      );
      const overIndex = overItems.findIndex((item) => item.id !== over?.id);

      return {
        ...boardSection,
        [activeContainer]: [
          ...boardSection[activeContainer].filter(
            (item) => item.id !== active.id
          ),
        ],
        [overContainer]: [
          ...boardSection[overContainer].slice(0, overIndex),
          boardSections[activeContainer][activeIndex],
          ...boardSection[overContainer].slice(
            overIndex,
            boardSection[overContainer].length
          ),
        ],
      };
    });
  };

  // handle drag end behaviour
  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    const activeContainer = findBoardSectionContainer(
      boardSections,
      active.id as string
    );
    const overContainer = findBoardSectionContainer(
      boardSections,
      over?.id as string
    );

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = boardSections[activeContainer].findIndex(
      (task) => task.id === active.id
    );
    const overIndex = boardSections[overContainer].findIndex(
      (task) => task.id === over?.id
    );

    if (activeIndex !== overIndex) {
      setBoardSections((boardSection) => ({
        ...boardSection,
        [overContainer]: arrayMove(
          boardSection[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }

    setActiveTaskId(null);
  };

  const task = activeTaskId ? getTaskById(tasks, activeTaskId) : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="mt-4 grid grid-cols-5 gap-x-2 overflow-scroll grow">
        {/** AI Task Generation Pane*/}
        <MagicPane
          id="00"
          title="AI"
          tasks={[
            {
              id: "b2fe1167-4e40-4fc6-9c28-5c2632be8d5q",
              title: "Pick Up Birtday Cake",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lorem eu dolor pulvinar tempor. Nunc lobortis lobortis turpis. Donec eros odio, sagittis ac cursus eget, porta at sapien. Nunc nec odio sem. Etiam tempus augue est, condimentum porta est rhoncus at. Vivamus quam purus, mollis et rutrum ac, ornare vel libero.",
              status: "Done",
            },
          ]}
        />

        {/** User-Defined Panes */}
        {Object.keys(boardSections).map((boardSectionKey) => (
          <Pane
            id={boardSectionKey}
            title={boardSectionKey}
            tasks={boardSections[boardSectionKey]}
            key={boardSectionKey}
          />
        ))}

        {/** DND-KIT Overlay */}
        <DragOverlay dropAnimation={{ ...defaultDropAnimation }}>
          {task ? <Task task={task} /> : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}

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

export default function Kanban() {
  const tasks = INITIAL_TASKS; 
  const initialBoardSections = initializeBoard(INITIAL_TASKS); //? load tasks from mongodb
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
      <div className="mt-4 grid grid-cols-4 space-x-2 overflow-auto grow">
        {Object.keys(boardSections).map((boardSectionKey) => (
          <Pane
            id={boardSectionKey}
            title={boardSectionKey}
            tasks={boardSections[boardSectionKey]}
            key={boardSectionKey}
          />
        ))}

        {/* <Pane title="backlog" amount={tasks.length}>
          {tasks.map((task, index) => (
            <Card key={index} task={task} index={index + 0} />
          ))}
        </Pane> */}

        {/* <Pane title="progress" amount={inProgress.length}>
          {inProgress.map((task, index) => (
            <Card key={index} task={task} index={index + 100} />
          ))}
        </Pane> */}

        {/* <Pane title="done" amount={done.length}>
          {done.map((task, index) => (
            <Card key={index} task={task} index={index + 200} />
          ))}
        </Pane> */}

        {/* <Pane title="blocking" amount={tasks.length}>
          {tasks.map((task, index) => (
            <Card key={index} task={task} index={index + 300} />
          ))}
        </Pane> */}

        <DragOverlay dropAnimation={{ ...defaultDropAnimation }}>
          {task ? <Task task={task} /> : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}

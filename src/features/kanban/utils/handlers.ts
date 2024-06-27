export const handleDragStart = ({ active }: DragStartEvent) => {
  setActiveTaskId(active.id as string);
};

export const handleDragOver = ({ active, over }: DragOverEvent) => {
  // Find the containers
  const activeContainer = findBoardSectionContainer(
    boardSections,
    active.id as string
  );
  const overContainer = findBoardSectionContainer(
    boardSections,
    over?.id as string
  );

  if (!activeContainer || !overContainer || activeContainer === overContainer) {
    return;
  }

  setBoardSections((boardSection) => {
    const activeItems = boardSection[activeContainer];
    const overItems = boardSection[overContainer];

    // Find the indexes for the items
    const activeIndex = activeItems.findIndex((item) => item.id === active.id);
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

export const handleDragEnd = ({ active, over }: DragEndEvent) => {
  const activeContainer = findBoardSectionContainer(
    boardSections,
    active.id as string
  );
  const overContainer = findBoardSectionContainer(
    boardSections,
    over?.id as string
  );

  if (!activeContainer || !overContainer || activeContainer !== overContainer) {
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

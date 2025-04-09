import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { JSX, useState } from "react";

export function GameCreatePage(): JSX.Element {
  const [items, setItems] = useState<string[]>(["1", "2", "3", "4", "5"]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    setActiveId(null);
    if (over && active && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id.toString());
        const newIndex = items.indexOf(over.id.toString());

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Container items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <Sortable key={item} id={item} overlay={item === activeId}>
            Drag me {item}
          </Sortable>
        ))}

        <DragOverlay>
          {activeId ? (
            <Sortable id={activeId}>Drag me {activeId}</Sortable>
          ) : null}
        </DragOverlay>
      </Container>
    </DndContext>
  );
}

function Container(props) {
  const { children, items } = props;
  return (
    <SortableContext items={items} strategy={verticalListSortingStrategy}>
      <div className="border border-primary p-4 w-fit">{children}</div>
    </SortableContext>
  );
}

function Sortable(props) {
  const { id, children, overlay } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      {...attributes}
      className={clsx(
        "bg-base-200 w-24 border p-2 aspect-square rounded hover:cursor-pointer",
        overlay && "opacity-50"
      )}
    >
      {children}
    </div>
  );
}

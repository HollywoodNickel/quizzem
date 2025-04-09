import { RiAddLine } from "@remixicon/react";
import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  JSX,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
import { Headline, Layout } from "~/components";

export function GameCreatePage(): JSX.Element {
  const [rounds, setRounds] = useState<number>(1);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Layout>
      <Headline>Spiel erstellen</Headline>

      <div className="flex flex-col gap-4">
        {Array.from({ length: rounds }, (_, i) => (
          <GameRoundContainer key={i} index={i}>
            {i}
          </GameRoundContainer>
        ))}

        <AddButton
          ref={buttonRef}
          onClick={() => {
            setRounds((prev) => prev + 1);
            setTimeout(() => {
              buttonRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }, 0);
          }}
        />
      </div>
    </Layout>
  );
}

export function getAlternatingBgClass(index: number): string {
  const backgroundClasses = [
    "border-primary",
    "border-secondary",
    "border-accent",
  ];

  return backgroundClasses[index % backgroundClasses.length];
}

type GameRoundContainerProps = PropsWithChildren & {
  index: number;
};

function GameRoundContainer(
  props: Readonly<GameRoundContainerProps>
): JSX.Element {
  const { children, index } = props;

  return (
    <div
      className={clsx(
        "rounded-xl shadow-xl w-full bg-base-200 border",
        getAlternatingBgClass(index)
      )}
    >
      <div className="bg-base-300 rounded-t-xl w-full p-2">
        <Headline as="h4" defaultMargin={false}>
          Round {index + 1}
        </Headline>
      </div>

      <div className="p-2">{children}</div>
    </div>
  );
}

const Divider = (): JSX.Element => <div className="h-px flex-1 bg-accent" />;

type AddButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function AddButton(props: AddButtonProps): JSX.Element {
  return (
    <button
      className="btn btn-ghost flex items-center justify-center gap-8"
      {...props}
    >
      <Divider />
      <div className="flex items-center justify-center aspect-square rounded-full bg-primary w-fit">
        <RiAddLine size={24} />
      </div>
      <Divider />
    </button>
  );
}

// export function GameCreatePage(): JSX.Element {
//   const [items, setItems] = useState<string[]>(["1", "2", "3", "4", "5"]);
//   const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates,
//     })
//   );

//   function handleDragStart(event: DragStartEvent) {
//     setActiveId(event.active.id);
//   }

//   function handleDragEnd(event: DragEndEvent) {
//     const { active, over } = event;

//     setActiveId(null);
//     if (over && active && active.id !== over.id) {
//       setItems((items) => {
//         const oldIndex = items.indexOf(active.id.toString());
//         const newIndex = items.indexOf(over.id.toString());

//         return arrayMove(items, oldIndex, newIndex);
//       });
//     }
//   }

//   return (
//     <DndContext
//       sensors={sensors}
//       collisionDetection={closestCenter}
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEnd}
//     >
//       <Container items={items} strategy={verticalListSortingStrategy}>
//         {items.map((item) => (
//           <Sortable key={item} id={item} overlay={item === activeId}>
//             Drag me {item}
//           </Sortable>
//         ))}

//         <DragOverlay>
//           {activeId ? (
//             <Sortable id={activeId}>Drag me {activeId}</Sortable>
//           ) : null}
//         </DragOverlay>
//       </Container>
//     </DndContext>
//   );
// }

// function Container(props) {
//   const { children, items } = props;
//   return (
//     <SortableContext items={items} strategy={verticalListSortingStrategy}>
//       <div className="border border-primary p-4 w-fit">{children}</div>
//     </SortableContext>
//   );
// }

// function Sortable(props) {
//   const { id, children, overlay } = props;

//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({
//       id,
//     });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       {...attributes}
//       className={clsx(
//         "bg-base-200 w-24 border p-2 aspect-square rounded hover:cursor-pointer",
//         overlay && "opacity-50"
//       )}
//     >
//       {children}
//     </div>
//   );
// }

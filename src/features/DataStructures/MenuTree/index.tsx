import { menuItems } from "../data";

function MenuItem({ itemId, itemsById }: any) {
  const item = itemsById[itemId];
  if (!item.children) {
    return (
      <li>
        <a href={item.href}>{item.text}</a>
      </li>
    );
  }
  return (
    <li>
      {item.text}
      <Menu itemIds={item.children} itemsById={itemsById} />
    </li>
  );
}

function Menu({ itemIds, itemsById }: any) {
  return (
    <ul>
      {itemIds.map((id: string) => (
        <MenuItem key={id} itemId={id} itemsById={itemsById} />
      ))}
    </ul>
  );
}

export function MenuTree() {
  const itemsById = menuItems.reduce(
    (prev, item) => ({ ...prev, [item.id]: item }),
    {}
  );
  const rootIds = menuItems.filter(({ isRoot }) => isRoot).map(({ id }) => id);

  return (
    <>
      <h3>Menu Tree</h3>
      <Menu itemIds={rootIds} itemsById={itemsById} />;
    </>
  );
}

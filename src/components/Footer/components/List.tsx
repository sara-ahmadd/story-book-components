function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col justify-start items-start gap-[16px]">
      <h3 className="text-sm text-white">{title}</h3>
      <ul className="flex flex-col justify-start items-start gap-[16px]">
        {items &&
          items.map((item, index) => (
            <li
              className="text-sm font-normal capitalize text-lightGray"
              key={`${index}-${item}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default List;

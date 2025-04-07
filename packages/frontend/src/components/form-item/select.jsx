export function Select(props) {
  const { children, ...rest } = props;
  return (
    <select className="select w-full" {...rest}>
      {children}
    </select>
  );
}

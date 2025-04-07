export function LabelInput(props) {
  const { label, children } = props;

  return (
    <label className="fieldset">
      <span className="fieldset-legend">{label}</span>
      {children}
    </label>
  );
}

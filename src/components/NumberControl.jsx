export default function NumberControl({
  label,
  value,
  min,
  max,
  suffix,
  onChange,
}) {
  return (
    <label className="number-control">
      <div className="control-label-row">
        <span>{label}</span>
        <span className="muted">
          {value} {suffix}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

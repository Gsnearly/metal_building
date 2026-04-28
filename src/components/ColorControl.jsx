export default function ColorControl({ label, value, onChange }) {
  return (
    <label className="color-control">
      <span>{label}</span>

      <div className="color-control-right">
        <span>{value}</span>
        <input
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </label>
  );
}

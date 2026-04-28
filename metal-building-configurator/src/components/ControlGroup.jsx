export default function ControlGroup({ title, children }) {
  return (
    <div className="control-group">
      <h3>{title}</h3>
      <div className="control-list">{children}</div>
    </div>
  );
}

function FormCheckbox({ label, name, defaultValue, size }) {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox-primary checkbox ${size}`}
      />
    </div>
  );
}

export default FormCheckbox;

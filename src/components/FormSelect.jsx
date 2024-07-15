function FormSelect({ label, name, list, defaultValue, size }) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className={`select select-bordered font-semibold ${size}`}
      >
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;

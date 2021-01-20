import Dropdown from '../Dropdown';

const Matrix = ({ rows, handleChange, selected, errors = {}, disabled }) => {
  return (
    <>
      {rows.map(({ label, value, options }) => (
        <Dropdown
          handleChange={(e) => handleChange(e, value)}
          selected={selected[value] || undefined}
          options={options}
          label={label}
          matrix
          key={label}
          error={errors[value]}
          disabled={disabled}
        />
      ))}
    </>
  );
};

export default Matrix;

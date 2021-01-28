import Dropdown from '../Dropdown';
import * as CS from '../style';

const Matrix = ({
  rows,
  options,
  handleChange,
  selected,
  errors = {},
  disabled,
  ...props
}) => {
  return (
    <CS.Field {...props}>
      {rows.map((row) => (
        <Dropdown
          handleChange={(e, obj) => handleChange(e, obj, row)}
          selected={selected[row.value] || undefined}
          options={options}
          label={row.label}
          matrix
          key={row.label}
          error={errors[row.value]}
          disabled={disabled}
        />
      ))}
    </CS.Field>
  );
};

export default Matrix;

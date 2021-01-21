import { useState } from 'react';
import * as CS from '../style';
import Button from '../../Button';
import { BasicInput, Dropdown } from '../../Inputs';
import { dropdownData } from '../../../constants';

const { toolDropdownData } = dropdownData;

const initState = {
  task: '',
  tool: 'a digital tool',
};

const Search = ({ color = 'teal', btnText = 'Search' }) => {
  const [search, setSearch] = useState(initState);

  const handleTask = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const handleTool = (e) => {
    setSearch({ ...search, tool: e });
  };

  const handleSubmit = () => {
    console.log('Do something with the search');
  };

  return (
    <CS.Wrapper color={color}>
      <BasicInput
        label="I need to learn how to"
        value={search.task}
        handleChange={handleTask}
        color="white"
        outline
        mb="6"
        name="task"
        big
        placeholder="your task here..."
      />
      <Dropdown
        label="using"
        selected={[search.tool]}
        handleChange={handleTool}
        options={toolDropdownData}
        big
        outline
        color="white"
        mb="6"
      />
      <Button bgColor={color} handleClick={handleSubmit}>
        {btnText}
      </Button>
    </CS.Wrapper>
  );
};

export default Search;

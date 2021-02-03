import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as CS from '../style';
import Button from '../../Button';
import { BasicInput, Dropdown } from '../../Inputs';
import { dropdownData } from '../../../constants';
import { Skills } from '../../../api-calls';
import { navRoutes } from '../../../constants';

import validate from '../../../validation/schemas/search';

const { toolDropdownData } = dropdownData;

function useSearch() {
  const query = new URLSearchParams(useLocation().search);
  const [search, setSearch] = useState(() => ({
    task: query.get('task') || '',
    tool: query.get('tool') || dropdownData.A_DIGITAL_TOOL,
  }));
  return [search, setSearch];
}

const Search = ({
  color = 'teal',
  btnText = 'Search',
  withoutPaddings,
  withoutShadow,
  setResults,
}) => {
  const [search, setSearch] = useSearch();
  const [submitAttempt, setSubmitAttempt] = useState(false);
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const searchParams = new URLSearchParams();

  const handleTask = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const handleTool = (e) => {
    setSearch({ ...search, tool: e });
  };

  const handleSubmit = async () => {
    if (!setResults) {
      search.task && searchParams.append('task', search.task);
      search.tool && searchParams.append('tool', search.tool);

      return history.push({
        pathname: navRoutes.GENERAL.SEARCH,
        search: searchParams.toString(),
      });
    }

    setSubmitAttempt(true);
    const isValid = validateForm();

    if (!isValid) return;

    let searchForm;
    if (search.tool === dropdownData.A_DIGITAL_TOOL) {
      searchForm = {
        task: search.task,
        tool: '',
      };
    } else {
      searchForm = {
        task: search.task,
        tool: search.tool,
      };
    }
    const { data, error } = await Skills.SearchSkillsAndActivities(searchForm);

    if (!error) {
      if (setResults) {
        setResults(data);
      }
    }
  };

  useEffect(() => {
    // if redirected from landing page
    if (search.task && search.tool) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateForm = () => {
    try {
      validate({
        task: search.task,
        tool: search.tool,
      });
      setErrors({});
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setErrors(error.inner);
      }
      return false;
    }
  };

  useEffect(() => {
    if (submitAttempt) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.task, search.tool]);

  return (
    <CS.Wrapper
      color={color}
      withoutPaddings={withoutPaddings}
      withoutShadow={withoutShadow}
    >
      <BasicInput
        label="I need to learn how to"
        value={search.task}
        handleChange={handleTask}
        color="white"
        outline
        margins={{ mb: '6' }}
        name="task"
        big
        placeholder="your task here..."
        error={errors.task}
      />
      <Dropdown
        label="using"
        selected={[search.tool]}
        handleChange={handleTool}
        options={toolDropdownData}
        big
        outline
        color="white"
        margins={{ mb: '6' }}
        error={errors.tool}
      />
      <Button bgColor={color} handleClick={handleSubmit}>
        {btnText}
      </Button>
    </CS.Wrapper>
  );
};

export default Search;

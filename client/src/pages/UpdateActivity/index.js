import React, { useState, useEffect } from 'react';

import { updateActivity as validate } from '../../validation/schemas';
import { useHistory } from 'react-router-dom';
import AddActivity from './AddActivity';
import EditActivity from './EditActivity';

import { HQ } from '../../constants/nav-routes';

const UpdateActivity = () => {
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (name, value) => {
    setState((_state) => ({ ..._state, [name]: value }));
  };

  const getSkills = async () => {
    // const { data, error } = await Skills.getSkillsByAreas({ areas: [] });
    // const { data, error } = await Skills.SearchSkillsAndActivities({task: ''});
    // console.log({ data, error });
  };
  const {
    location: { pathname },
    push,
  } = useHistory();
  const [, , , type, activityId] = pathname.split('/');
  console.log({ type, activityId });
  useEffect(() => {
    getSkills();
    setSkills([...options]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (type === 'edit') {
      // get the activity data by its id; and setState after;
    }
  }, [type]);

  const options = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
  ];

  const handleSubmit = () => {
    try {
      setIsLoading(true);
      validate(state);
      setErrors({});
      // send the data to the backend
      // after success the request should direct the user to success page with activity id
      if (type === 'new') {
        // activityId should comes from the back
        push(HQ.SUCCESS_ADD_ACTIVITY.replace(':id', activityId));
      } else {
        push(HQ.SUCCESS_EDIT_ACTIVITY.replace(':id', activityId));
      }
    } catch (error) {
      if (error.name === 'ValidationError') {
        setErrors({ ...error.inner });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return type === 'new' ? (
    <AddActivity
      state={state}
      setState={setState}
      errors={errors}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      levels={options}
      skills={skills}
      type="new"
    />
  ) : (
    <EditActivity
      state={state}
      setState={setState}
      errors={errors}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      levels={options}
      skills={skills}
      type="edit"
      activityId={activityId}
    />
  );
};

export default UpdateActivity;

import React, { useState, useEffect } from 'react';

import { updateActivity as validate } from '../../validation/schemas';
import { useHistory, useParams } from 'react-router-dom';
import AddActivity from './AddActivity';
import EditActivity from './EditActivity';
import { Skills, Activities } from '../../api-calls';

import { HQ } from '../../constants/nav-routes';

const UpdateActivity = () => {
  const [state, setState] = useState({
    skills: [],
    title: '',
    description: '',
    completionTime: '',
    difficulty: '',
    resourceLink: '',
    resourceCreatedBy: '',
  });
  const [errors, setErrors] = useState({
    httpError: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [skillsOptions, setSkillsOptions] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getSkills = async () => {
      const { data, error } = await Skills.getSkills({ type: 'basic' });
      if (!error) {
        setSkillsOptions(
          data.map(({ id, title }) => {
            return { label: title, value: id };
          })
        );
      }
    };
    getSkills();
  }, []);

  const handleChange = (name, value) => {
    setState((_state) => ({ ..._state, [name]: value }));
  };

  const { push } = useHistory();
  useEffect(() => {
    const getActivity = async () => {
      const { error, data } = await Activities.getActivityById({ id });
      if (!error) {
        setState(data);
      }
    };
    if (id) {
      getActivity();
    }
  }, [id]);

  const createActivity = async () => {
    const { error, data } = await Activities.createActivity({
      form: {
        skills: state.skills,
        title: state.title,
        description: state.description,
        difficulty: state.difficulty,
        completionTime: state.completionTime,
        resourceLink: state.resourceLink,
        resourceCreatedBy: state.resourceCreatedBy,
      },
    });
    if (!error) {
      // activityId should comes from the back
      push(HQ.SUCCESS_ADD_ACTIVITY.replace(':id', data.id));
    } else {
      throw error;
    }
  };

  const updateActivity = async () => {
    const { error } = await Activities.updateActivity({
      id,
      form: {
        skills: state.skills,
        title: state.title,
        description: state.description,
        difficulty: state.difficulty,
        completionTime: state.completionTime,
        resourceLink: state.resourceLink,
        resourceCreatedBy: state.resourceCreatedBy,
      },
    });
    if (!error) {
      push(HQ.SUCCESS_EDIT_ACTIVITY.replace(':id', id));
    } else {
      throw error;
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      validate(state);
      if (id) {
        await updateActivity();
      } else {
        await createActivity();
      }
      setErrors({});
    } catch (error) {
      if (error.name === 'ValidationError') {
        setErrors({ ...error.inner });
      } else {
        setErrors({ httpError: error.message });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return !id ? (
    <AddActivity
      state={state}
      setState={setState}
      errors={errors}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      skills={skillsOptions}
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
      skills={skillsOptions}
      type="edit"
      activityId={id}
    />
  );
};

export default UpdateActivity;

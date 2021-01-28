import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './style';
import * as T from '../Typography';
import Icon from '../Icon';
import { Checkbox, BasicInput as Input, Textarea } from '../Inputs';
import Button from '../Button';
import theme from '../../theme';
import validate from '../../validation/schemas/updateSkill';

const SkillModal = () => {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    hideSkill: false,
    title: '',
    description: '',
    task1: '',
    task2: '',
    task3: '',
  });

  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.mobile})`,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setState((_state) => ({
      ..._state,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    try {
      validate(state);
      setErrors({});
      // send the data to the backend

      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setErrors({ ...error.inner });
      }
      return false;
    }
  };

  return (
    <>
      <Button
        bgColor="teal"
        style={{ border: 'none' }}
        handleClick={() => setVisible((_visible) => !_visible)}
      >
        Edit Skill
      </Button>
      <S.Drawer
        placement="right"
        closable={false}
        visible={visible}
        width={
          isMobile
            ? theme.constants.skillModal.width.mobile
            : theme.constants.skillModal.width.desktop
        }
        key="update-skill"
        maskStyle={{ background: `${theme.colors.white}90` }}
        drawerStyle={{
          paddingRight: isMobile ? 0 : '2.5rem',
          background: 'transparent',
          display: 'flex',
        }}
      >
        <S.ContentWrapper>
          <S.Head>
            <T.H5>Edit skill</T.H5>
            <Icon
              icon="close"
              color="black"
              onClick={() => setVisible(false)}
            />
          </S.Head>

          {/* Hide checkbox */}
          <Checkbox
            label="Hide this skill from my volunteers"
            error={null}
            checked={state.hideSkill}
            handleChange={(checked) => handleChange('hideSkill', checked)}
            disabled
          />

          {/* Title */}
          <Input
            label="Skill title"
            name="title"
            value={state.title}
            handleChange={(e) => handleChange('title', e.target.value)}
            placeholder="New skill I created"
            error={errors.title}
            disabled={state.hideSkill}
          />

          {/* Description */}
          <Textarea
            type="textarea"
            name="description"
            rows="3"
            cols="33"
            value={state.description}
            handleChange={(e) => handleChange('description', e.target.value)}
            label="How can this skill help in the real world?"
            placeholder="description..."
            error={errors.description}
            disabled={state.hideSkill}
          />

          {/* optional tasks */}
          <Input
            label="Volunteering tasks this skill can help with"
            helper="(optional)"
            placeholder="task 1"
            name="task1"
            value={state.task1}
            handleChange={(e) => handleChange('task1', e.target.value)}
            error={errors.task1}
            disabled={state.hideSkill}
          />
          <Input
            placeholder="task 2"
            name="task2"
            value={state.task2}
            handleChange={(e) => handleChange('task2', e.target.value)}
            disabled={!state.task1 || state.hideSkill}
            error={errors.task2}
          />
          <Input
            placeholder="task 3"
            name="task3"
            value={state.task3}
            handleChange={(e) => handleChange('task3', e.target.value)}
            disabled={!state.task2 || state.hideSkill}
            error={errors.task3}
          />

          {/* submit */}
          <Button mt="6" handleClick={handleSubmit}>
            Submit
          </Button>
        </S.ContentWrapper>
      </S.Drawer>
    </>
  );
};

export default SkillModal;

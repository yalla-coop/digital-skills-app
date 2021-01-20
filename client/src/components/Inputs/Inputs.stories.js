import React, { useState } from 'react';
import { Row, Col } from '../Grid';
import {
  BasicInput,
  Dropdown,
  Matrix,
  Slider,
  Checkbox,
  Radio,
  Options,
  Cards,
} from './index';

export default {
  title: 'Common Components/Input',
  argTypes: {},
};

// BASIC INPUT
const BasicExample = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Row>
      <Col w={[4, 6, 4]}>
        <BasicInput {...args} value={value} handleChange={handleChange} />
      </Col>
    </Row>
  );
};

export const basic = BasicExample.bind({});
basic.args = {
  color: '',
  label: 'Name',
  w: '100%',
  disabled: false,
  error: '',
  helper: '',
  placeholder: 'Type your name...',
  isOptional: false,
  type: 'text',
};

// DROPDOWN
const DropdownExample = (args) => {
  const [selected, setSelected] = useState(['Option 1']);

  const handleChange = (e) => {
    setSelected(e);
  };

  return (
    <Row>
      <Col w={[4, 6, 4]}>
        <Dropdown {...args} selected={selected} handleChange={handleChange} />
      </Col>
    </Row>
  );
};

export const dropdown = DropdownExample.bind({});
dropdown.args = {
  color: '',
  label: 'Dropdown',
  w: '100%',
  disabled: false,
  error: '',
  helper: '',
  options: [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
  ],
  multi: false,
  isOptional: false,
};

// GROUPED DROPDOWN
const GroupedDropdownExample = (args) => {
  const [selected, setSelected] = useState(['Option 1']);

  const handleChange = (e) => {
    setSelected(e);
  };

  return (
    <Row>
      <Col w={[4, 6, 4]}>
        <Dropdown
          {...args}
          selected={selected}
          handleChange={handleChange}
          groupedOptions
        />
      </Col>
    </Row>
  );
};

export const groupDropdown = GroupedDropdownExample.bind({});
groupDropdown.args = {
  color: '',
  label: 'Grouped Dropdown',
  w: '100%',
  disabled: false,
  error: '',
  helper: '',
  options: [
    {
      groupLabel: 'Group 1',
      options: [
        { label: 'Option 1', value: 'Option 1' },
        { label: 'Option 2', value: 'Option 2' },
      ],
    },
    {
      groupLabel: 'Group 2',
      options: [
        { label: 'Option A', value: 'Option A' },
        { label: 'Option B', value: 'Option B' },
      ],
    },
  ],
  multi: false,
  isOptional: false,
};

// MATRIX

const MatrixExample = (args) => {
  const [selected, setSelected] = useState({});

  const handleChange = (selectedOption, row) => {
    setSelected({ ...selected, [row]: selectedOption });
  };

  return (
    <Row>
      <Col w={[4, 6, 4]}>
        <Matrix {...args} selected={selected} handleChange={handleChange} />
      </Col>
    </Row>
  );
};

const dummyOptions = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' },
];

export const matrix = MatrixExample.bind({});
matrix.args = {
  rows: [
    {
      label: 'Zoom',
      value: 'zoom',
      options: dummyOptions,
    },
    {
      label: 'Microsoft Teams',
      value: 'teams',
      options: dummyOptions,
    },
    {
      label: 'Google Meet',
      value: 'meet',
      options: dummyOptions,
    },
  ],
  disabled: false,
  errors: {},
};

// SLIDER

const SliderExample = (args) => {
  const [selected, setSelected] = useState(() => {
    if (args.options.length % 2 === 0) return { ...args.options[0], key: 0 };
    const middleNum = Math.floor(args.options.length / 2);
    return { ...args.options[middleNum], key: middleNum };
  });

  const handleChange = (e) => {
    console.log(e, '------');
    setSelected({ ...args.options[e], key: e });
  };

  return (
    <Row>
      <Col w={[4, 6, 4]}>
        <Slider {...args} selected={selected} handleChange={handleChange} />
      </Col>
    </Row>
  );
};

export const slider = SliderExample.bind({});
slider.args = {
  disabled: false,
  color: '',
  label: 'How difficult was it?',
  showAnswer: true,
  options: [
    { label: 'It was super easy!', value: 'easy' },
    { label: 'It was kind of easy', value: 'modEasy' },
    { label: 'It was OK', value: 'ok' },
    { label: 'It was tricky', value: 'modHard' },
    { label: 'It was super hard!', value: 'hard' },
  ],
  error: '',
};

// CHECKBOX

const CheckboxExample = (args) => {
  const [checked, setChecked] = useState();

  const handleChange = () => setChecked(!checked);

  return (
    <Row>
      <Col w={[4, 6, 4]}>
        <Checkbox {...args} checked={checked} handleChange={handleChange} />
      </Col>
    </Row>
  );
};

export const checkbox = CheckboxExample.bind({});
checkbox.args = {
  disabled: false,
  color: '',
  label: 'Hide this skill from my volunteers',
  error: '',
};

// Radio

const RadioExample = (args) => {
  const [selected, setSelected] = useState();

  const handleChange = (val) => {
    setSelected(val.target.value);
  };

  return (
    <Row>
      <Col w={[4, 6, 4]}>
        <Radio {...args} selected={selected} handleChange={handleChange} />
      </Col>
    </Row>
  );
};

export const radio = RadioExample.bind({});
radio.args = {
  color: '',
  label: '',
  options: [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ],
  error: '',
  horizontal: false,
  disabled: false,
};

// Options

const OptionsExample = (args) => {
  const [selected, setSelected] = useState([]);

  const handleChange = (values) => {
    setSelected(values);
  };

  return (
    <Row>
      <Col w={[4, 6, 4]}>
        <Options {...args} selected={selected} handleChange={handleChange} />
      </Col>
    </Row>
  );
};

export const options = OptionsExample.bind({});
options.args = {
  color: '',
  label: '',
  options: [
    { label: 'I can send messages', value: 'sendMessages' },
    {
      label: 'Communication with volunteers ',
      value: 'communicationWithVolunteers',
    },
    {
      label:
        'I understand viruses can damage my computer and security software should be used',
      value: 'understandViruses',
    },
  ],
  error: '',
  horizontal: false,
  multi: true,
  disabled: false,
};

// CARDS

const CardsExample = (args) => {
  const [selected, setSelected] = useState({});

  const handleChange = (option) => {
    setSelected(option);
  };

  return (
    <Row>
      <Col w={[4, 6, 3]}>
        <Cards {...args} selected={selected} handleChange={handleChange} />
      </Col>
    </Row>
  );
};

export const cards = CardsExample.bind({});
cards.args = {
  options: [
    {
      title: 'I want to learn the basics',
      description:
        'Make sure you have the general skills needed to use digital for your volunteering',
      helper:
        'e.g. creating a strong password, how to use search engines, writing and editing content',
      color: 'teal',
      value: 'basics',
    },
    {
      title: 'I want to improve my skills',
      description:
        'Build on your existing skills to really make the most of digital for your volunteering tasks',
      helper: 'e.g. running a webinar, understanding GDPR, using SEO',
      color: 'purple',
      value: 'improveSkills',
    },
  ],
  error: '',
  disabled: false,
};

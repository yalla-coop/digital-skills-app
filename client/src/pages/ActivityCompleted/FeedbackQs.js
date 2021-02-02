import { useState, useEffect } from 'react';
import { Time, Slider } from '../../components/Inputs';

const feedbackData = {
  completionQuestion: {
    text: 'How long did it take you to complete?',
  },
  difficultyQuestion: {
    text: 'How difficult was it?',
    name: 'difficulty',
    options: [
      { label: 'It was easy', value: 1 },
      { label: 'It was ok', value: 2 },
      { label: 'It was a bit tricky', value: 3 },
      { label: 'It was hard', value: 4 },
    ],
  },
  confidenceQuestion: {
    text: 'Do you feel more or less confident in this activity?',
    name: 'confidenceScore',
    options: [
      { label: 'Less confident', value: 1 },
      { label: 'About the same', value: 2 },
      { label: 'More confident', value: 3 },
    ],
  },
};

const FeedbackQs = ({ step, handleFeedback, feedback, error }) => {
  const [selectedSlider, setSelectedSlider] = useState(null);

  const { completionTime } = feedback;
  const {
    completionQuestion,
    difficultyQuestion,
    confidenceQuestion,
  } = feedbackData;

  const setInitSlider = (q) => {
    if (q.options.length % 2 === 0) return { ...q.options[0], key: 0 };
    const middleNum = Math.floor(q.options.length / 2);
    return { ...q.options[middleNum], key: middleNum };
  };

  const handleSlider = (value, q) => {
    const selected = { ...feedbackData[q].options[value], key: value };
    setSelectedSlider(selected);

    return handleFeedback({
      name: feedbackData[q].name,
      value: value + 1,
      type: 'slider',
    });
  };

  useEffect(() => {
    // if (step === '2') {
    //   setSelectedSlider(setInitSlider);
    // }
    setSelectedSlider(null);
  }, [step]);

  switch (step) {
    case '1':
      return (
        <Time
          label={completionQuestion.text}
          time="minutes"
          name="completionTime"
          mb="7"
          value={completionTime}
          handleChange={handleFeedback}
          error={error}
        />
      );
    case '2':
      return (
        <Slider
          selected={selectedSlider || setInitSlider(difficultyQuestion)}
          handleChange={(e) => handleSlider(e, 'difficultyQuestion')}
          options={difficultyQuestion.options}
          error={error}
          showAnswer
          label={difficultyQuestion.text}
          big
          mb="5"
        />
      );
    case '3':
      return (
        <Slider
          selected={selectedSlider || setInitSlider(confidenceQuestion)}
          handleChange={(e) => handleSlider(e, 'confidenceQuestion')}
          options={confidenceQuestion.options}
          error={error}
          showAnswer
          label={confidenceQuestion.text}
          big
          mb="5"
        />
      );
    default:
      return null;
  }
};

export default FeedbackQs;

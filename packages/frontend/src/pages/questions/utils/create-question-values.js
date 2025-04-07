export const EQuestionType = {
  MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
  TRUE_FALSE: "TRUE_FALSE",
  FILL_IN_THE_BLANK: "FILL_IN_THE_BLANK",
  ORDERING: "ORDERING",
  ESTIMATE: "ESTIMATE",
  NUMERIC: "NUMERIC",
  IMAGE_QUESTION: "IMAGE_QUESTION",
  MUSIC_QUESTION: "MUSIC_QUESTION",
  VIDEO_QUESTION: "VIDEO_QUESTION",
};

export const createQuestionDefaultValues = {
  question: "",
  type: EQuestionType.MULTIPLE_CHOICE,
  hint: null,
  timer: null,
  answer: { choices: [{ text: "", correctAnswer: false }] },
};

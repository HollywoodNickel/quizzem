export enum EQuestionType {
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  TRUE_FALSE = "TRUE_FALSE",
  FILL_IN_THE_BLANK = "FILL_IN_THE_BLANK",
  ORDERING = "ORDERING",
  ESTIMATE = "ESTIMATE",
  NUMERIC = "NUMERIC",
  IMAGE_QUESTION = "IMAGE_QUESTION",
  MUSIC_QUESTION = "MUSIC_QUESTION",
  VIDEO_QUESTION = "VIDEO_QUESTION",
}

export type CommonCreateQuestionDto = {
  question: string;
  hint: string | null;
  timer: number | null;
};

type CompositeQuestionDto<T> = CommonCreateQuestionDto & T;

export type AnswerMultipleChoiceDto = CompositeQuestionDto<{
  type: EQuestionType.MULTIPLE_CHOICE;
  answer: AnswerMultipleChoice;
}>;

export type AnswerTrueFalseDto = CompositeQuestionDto<{
  type: EQuestionType.TRUE_FALSE;
  answer: AnswerTrueFalse;
}>;

export type AnswerOrderingDto = CompositeQuestionDto<{
  type: EQuestionType.FILL_IN_THE_BLANK | EQuestionType.ORDERING;
  answer: { correctOrder: { value: string }[] };
}>;

export type AnswerNumericDto = CompositeQuestionDto<{
  type: EQuestionType.ESTIMATE | EQuestionType.NUMERIC;
  answer: AnswerNumeric;
}>;

export type AnswerFileDto = CompositeQuestionDto<{
  type:
    | EQuestionType.IMAGE_QUESTION
    | EQuestionType.VIDEO_QUESTION
    | EQuestionType.MUSIC_QUESTION;
  answer: AnswerFile;
}>;

export type CreateQuestionDto = CommonCreateQuestionDto & {
  type:
    | EQuestionType.MULTIPLE_CHOICE
    | EQuestionType.TRUE_FALSE
    | EQuestionType.FILL_IN_THE_BLANK
    | EQuestionType.ORDERING
    | EQuestionType.ESTIMATE
    | EQuestionType.NUMERIC
    | EQuestionType.IMAGE_QUESTION
    | EQuestionType.MUSIC_QUESTION
    | EQuestionType.VIDEO_QUESTION;
  answer:
    | AnswerMultipleChoice
    | AnswerTrueFalse
    | AnswerOrdering
    | AnswerNumeric
    | AnswerFile;
};

type AnswerMultipleChoice = {
  choices: { text: string; correctAnswer: boolean }[];
};

type AnswerTrueFalse = {
  correctAnswer: boolean;
};

type AnswerOrdering = {
  correctOrder: string[];
};

type AnswerNumeric = {
  correctAnswer: number;
};

type AnswerFile = {
  file: string;
  correctAnswer: string;
};

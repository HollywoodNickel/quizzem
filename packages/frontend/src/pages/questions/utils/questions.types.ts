import { Control, FieldValues, UseFormRegister } from "react-hook-form";

export type AnswerTypeOfQuestionProps = {
  register: UseFormRegister<CreateQuestionDto>;
};

export type AnswerTypeOfQuestionWithControlProps<T extends FieldValues> =
  AnswerTypeOfQuestionProps & {
    control: Control<T>;
  };

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

export type CreateQuestionDto =
  | (CommonCreateQuestionDto & {
      type: EQuestionType.MULTIPLE_CHOICE;
      answer: AnswerMultipleChoice;
    })
  | (CommonCreateQuestionDto & {
      type: EQuestionType.TRUE_FALSE;
      answer: AnswerTrueFalse;
    })
  | (CommonCreateQuestionDto & {
      type: EQuestionType.FILL_IN_THE_BLANK | EQuestionType.ORDERING;
      answer: AnswerOrdering;
    })
  | (CommonCreateQuestionDto & {
      type: EQuestionType.ESTIMATE | EQuestionType.NUMERIC;
      answer: AnswerNumeric;
    })
  | (CommonCreateQuestionDto & {
      type:
        | EQuestionType.IMAGE_QUESTION
        | EQuestionType.VIDEO_QUESTION
        | EQuestionType.MUSIC_QUESTION;
      answer: AnswerFile;
    });

export type AnswerMultipleChoice = {
  choices: { text: string; correctAnswer: boolean }[];
};

export type AnswerTrueFalse = {
  correctAnswer: boolean;
};

export type AnswerOrdering = {
  correctOrder: { value: string }[];
};

export type AnswerNumeric = {
  correctAnswer: number;
};

export type AnswerFile = {
  file: string;
  correctAnswer: string;
};

import { AnswerFileQuestionSchema } from 'src/question/dto/answer-file-question.dto';
import { AnswerMultipleChoicesSchema } from 'src/question/dto/answer-multiple-choices.dto';
import { AnswerNumericSchema } from 'src/question/dto/answer-numeric.dto';
import { AnswerOrderingSchema } from 'src/question/dto/answer-ordering.dto';
import { AnswerTrueFalseSchema } from 'src/question/dto/answer-true-false.dto';
import { EQuestionType } from 'src/question/models/question-type.enum';
import { ZodObject } from 'zod';

export const answersSchema: Record<EQuestionType, ZodObject<any>> = {
  [EQuestionType.MULTIPLE_CHOICE]: AnswerMultipleChoicesSchema,
  [EQuestionType.TRUE_FALSE]: AnswerTrueFalseSchema,
  [EQuestionType.FILL_IN_THE_BLANK]: AnswerOrderingSchema,
  [EQuestionType.ORDERING]: AnswerOrderingSchema,
  [EQuestionType.ESTIMATE]: AnswerNumericSchema,
  [EQuestionType.NUMERIC]: AnswerNumericSchema,
  [EQuestionType.IMAGE_QUESTION]: AnswerFileQuestionSchema,
  [EQuestionType.MUSIC_QUESTION]: AnswerFileQuestionSchema,
  [EQuestionType.VIDEO_QUESTION]: AnswerFileQuestionSchema,
};

import { AnswerEstimateSchema } from 'src/question/dto/answer-estimate.dto';
import { AnswerFillInTheBlankSchema } from 'src/question/dto/answer-fill-in-the-blank.dto';
import { AnswerImageQuestionSchema } from 'src/question/dto/answer-image-question.dto';
import { AnswerMultipleChoicesSchema } from 'src/question/dto/answer-multiple-choices.dto';
import { AnswerMusicQuestionSchema } from 'src/question/dto/answer-music-question.dto';
import { AnswerNumericSchema } from 'src/question/dto/answer-numeric.dto';
import { AnswerOrderingSchema } from 'src/question/dto/answer-ordering.dto';
import { AnswerTrueFalseSchema } from 'src/question/dto/answer-true-false.dto';
import { AnswerVideoQuestionSchema } from 'src/question/dto/answer-video-question.dto';
import { EQuestionType } from 'src/question/models/question-type.enum';
import { ZodObject } from 'zod';

export const answersSchema: Record<EQuestionType, ZodObject<any>> = {
  [EQuestionType.MULTIPLE_CHOICE]: AnswerMultipleChoicesSchema,
  [EQuestionType.TRUE_FALSE]: AnswerTrueFalseSchema,
  [EQuestionType.FILL_IN_THE_BLANK]: AnswerFillInTheBlankSchema,
  [EQuestionType.ORDERING]: AnswerOrderingSchema,
  [EQuestionType.ESTIMATE]: AnswerEstimateSchema,
  [EQuestionType.NUMERIC]: AnswerNumericSchema,
  [EQuestionType.IMAGE_QUESTION]: AnswerImageQuestionSchema,
  [EQuestionType.MUSIC_QUESTION]: AnswerMusicQuestionSchema,
  [EQuestionType.VIDEO_QUESTION]: AnswerVideoQuestionSchema,
};

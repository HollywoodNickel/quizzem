import { ClassConstructor } from 'class-transformer';
import { AnswerFileQuestionDto } from 'src/question/dto/answer-file-question.dto';
import { AnswerMultipleChoicesDto } from 'src/question/dto/answer-multiple-choices.dto';
import { AnswerNumericDto } from 'src/question/dto/answer-numeric.dto';
import { AnswerOrderingDto } from 'src/question/dto/answer-ordering.dto';
import { AnswerTrueFalseDto } from 'src/question/dto/answer-true-false.dto';
import { EQuestionType } from 'src/question/models/question-type.enum';

type AnswerDtoClass = ClassConstructor<object>;

export const answersSchema: Record<EQuestionType, AnswerDtoClass> = {
  [EQuestionType.MULTIPLE_CHOICE]: AnswerMultipleChoicesDto,
  [EQuestionType.TRUE_FALSE]: AnswerTrueFalseDto,
  [EQuestionType.FILL_IN_THE_BLANK]: AnswerOrderingDto,
  [EQuestionType.ORDERING]: AnswerOrderingDto,
  [EQuestionType.ESTIMATE]: AnswerNumericDto,
  [EQuestionType.NUMERIC]: AnswerNumericDto,
  [EQuestionType.IMAGE_QUESTION]: AnswerFileQuestionDto,
  [EQuestionType.MUSIC_QUESTION]: AnswerFileQuestionDto,
  [EQuestionType.VIDEO_QUESTION]: AnswerFileQuestionDto,
};

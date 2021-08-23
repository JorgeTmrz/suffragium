enum AnswerType { yes, no, abstain }

AnswerType stringToAnswerType(str) =>
    AnswerType.values.firstWhere((e) => e.toString() == 'AnswerType.' + str);

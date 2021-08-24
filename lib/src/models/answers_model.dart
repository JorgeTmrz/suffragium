import 'dart:convert';

Answers answerFromJson(String str, id) =>
    Answers.fromJson(json.decode(str), id);

class Answers {
  Answers({this.questions, required this.answers, required this.id});

  List<Answer> answers;
  final String id;
  final String? questions;

  factory Answers.fromJson(Map<String, dynamic> json, String id) => Answers(
        answers:
            List<Answer>.from(json["users"].map((x) => Answer.fromJson(x))),
        questions: json["questions"],
        id: id,
      );
}

class Answer {
  Answer({
    required this.answer,
    required this.question,
    required this.user,
  });

  String answer;
  final String question;
  final String user;

  factory Answer.fromJson(Map<String, dynamic> json) => Answer(
        answer: json["answer"],
        question: json["question"],
        user: json["user"],
      );

  Map<String, dynamic> toJson() => {
        'answer': answer,
        'question': question,
        'user': user,
      };
}

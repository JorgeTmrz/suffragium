import 'dart:convert';

// import 'package:firebase/firestore.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

Answers answerFromJson(String str) => Answers.fromJson(json.decode(str));

class Answers {
  Answers({
    this.questions,
    required this.answers,
  });

  List<Answer> answers;
  final DocumentReference? questions;

  factory Answers.fromJson(Map<String, dynamic> json) => Answers(
        answers:
            List<Answer>.from(json["users"].map((x) => Answer.fromJson(x))),
        questions: json["questions"],
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

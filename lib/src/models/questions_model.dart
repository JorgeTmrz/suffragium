import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';

Questions questionsFromJson(String str) => Questions.fromJson(json.decode(str));

class Questions {
  Questions({
    required this.questions,
    this.room,
    this.answers,
  });

  final List<Question> questions;
  final DocumentReference? room;
  final DocumentReference? answers;

  factory Questions.fromJson(Map<String, dynamic> json) => Questions(
        questions: List<Question>.from(
            json["questions"].map((x) => Question.fromJson(x))),
        room: json["room"],
        answers: json["answers"],
      );
}

class Question {
  Question({
    required this.duration,
    required this.isEnded,
    required this.title,
  });

  final Timestamp duration;
  final bool isEnded;
  final String title;

  factory Question.fromJson(Map<String, dynamic> json) => Question(
        duration: json["duration"],
        isEnded: json["isEnded"],
        title: json["title"],
      );
}

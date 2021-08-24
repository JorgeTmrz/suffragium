import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';

Questions questionsFromJson(String str, String id) =>
    Questions.fromJson(json.decode(str), id);

class Questions {
  Questions({
    required this.questions,
    required this.id,
    this.room,
  });

  final List<Question> questions;
  final String id;
  final String? room;

  factory Questions.fromJson(Map<String, dynamic> json, String id) => Questions(
        questions: List<Question>.from(
            json["questions"].map((x) => Question.fromJson(x))),
        room: json["room"],
        id: id,
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

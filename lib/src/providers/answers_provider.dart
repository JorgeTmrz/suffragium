import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:votation_app/src/models/answers_model.dart';

class AnswerProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Stream<Answers> getAnswers(String answersId) async* {
    // var answers = await FirebaseFirestore.instance
    //     .collection('Answers')
    //     .doc(answersId.trim())
    //     .get();
    // print(answers.data());
    final data = _db
        .collection('Answers')
        .doc(answersId.trim())
        .snapshots()
        .map((snap) => Answers.fromJson(snap.data()!));

    yield* data;
    notifyListeners();
  }
}

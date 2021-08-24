import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:votation_app/src/models/answers_model.dart';

class AnswerProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Stream<Answers> getAnswers(String questionsId) async* {
    final data = _db
        .collection('Answers')
        .where('questions', isEqualTo: questionsId.trim())
        .snapshots()
        .map((snap) => snap.docs
            .map((doc) => Answers.fromJson(doc.data(), doc.reference.id))
            .first);

    yield* data;
    notifyListeners();
  }
}

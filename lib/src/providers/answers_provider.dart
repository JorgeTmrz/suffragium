import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:votation_app/src/models/answers_model.dart';

class AnswerProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Stream<Answers> getAnswers(String answersId) async* {
    print(answersId);
    final data = _db
        .collection('Answers')
        .where(FieldPath.documentId, isEqualTo: answersId.trim())
        .snapshots()
        .map((snap) => snap.docs.map((e) => Answers.fromJson(e.data())).first);

    yield* data;
    notifyListeners();
  }
}

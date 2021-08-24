import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:votation_app/src/models/questions_model.dart';

class QuestionsProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Stream<Questions> getQuestions(String questionsId) async* {
    final data = _db
        .collection('Questions')
        .doc(questionsId)
        .snapshots()
        .map((snap) => Questions.fromJson(snap.data()!));

    yield* data;
    notifyListeners();
  }
}

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:votation_app/src/models/questions_model.dart';

class QuestionsProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Stream<Questions> getQuestions(String roomId) async* {
    final data = _db
        .collection('Questions')
        .where('room', isEqualTo: roomId.trim())
        .snapshots()
        .map((snap) => snap.docs
            .map((doc) => Questions.fromJson(doc.data(), doc.reference.id))
            .first);

    yield* data;
    notifyListeners();
  }
}

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:votation_app/src/models/preguntas_model.dart';

class QuestionsProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Stream<Questions> getPreguntas() async* {
    final data = _db
      .collection('Questions')
      .doc('SqSf0kki0wRPCea7iMPA')
      .snapshots()
      .map((snap) => Questions.fromJson(snap.data()!));

    yield* data;
    notifyListeners();
  }
}

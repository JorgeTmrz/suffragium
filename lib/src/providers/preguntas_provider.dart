import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:votation_app/src/models/preguntas_model.dart';

class PreguntasProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Stream<Votaciones> getPreguntas(String field) async* {
    final data = _db
      .collection('Votaciones')
      .doc(field)
      .snapshots()
      .map((snap) => Votaciones.fromJson(snap.data()!));

    yield* data;
    notifyListeners();
  }
}
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:votation_app/src/models/preguntas_model.dart';

class PreguntasProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Stream<Votaciones> getPreguntas(String agenda) async* {
    final data = _db
        .collection('Votaciones')
        .where('agenda', isEqualTo: agenda)
        .snapshots()
        .map((snap) =>
            snap.docs.map((e) => Votaciones.fromJson(e.data())).first);

    yield* data;
    notifyListeners();
  }
}

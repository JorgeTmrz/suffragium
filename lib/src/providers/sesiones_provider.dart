import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:votation_app/src/models/sesiones_model.dart';

class SesionesProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Stream<Sesiones> getSesiones(String session) async* {

    final data = _db
      .collection('Sesiones')
      .doc(session)
      .snapshots()
      .map((snap) => Sesiones.fromJson(snap.data()!));

    yield* data;
    notifyListeners();
  }
}
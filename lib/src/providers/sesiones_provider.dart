import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:votation_app/src/models/sesiones_model.dart';

class RoomsProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Stream<Rooms> getRooms() async* {
    final data = _db
      .collection('Rooms')
      .doc('dw4D9APq4N1joShHiBjR')
      .snapshots()
      .map((snap) => Rooms.fromJson(snap.data()!));

    yield* data;
    notifyListeners();
  }
}
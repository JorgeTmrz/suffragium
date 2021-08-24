import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:votation_app/src/models/rooms_model.dart';

class RoomsProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Stream<List<Rooms>> getRooms() async* {
    final data = _db.collection('Rooms').snapshots().map((snap) => snap.docs
        .map((doc) => Rooms.fromJson(doc.data(), doc.reference.id))
        .toList());

    yield* data;
    notifyListeners();
  }
}

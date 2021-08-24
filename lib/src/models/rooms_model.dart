import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';

Rooms roomsFromJson(String str, String id) =>
    Rooms.fromJson(json.decode(str), id);

class Rooms {
  Rooms({
    required this.beginDate,
    required this.endDate,
    required this.isEnded,
    required this.title,
    required this.id,
  });

  final Timestamp beginDate;
  final Timestamp endDate;
  final bool isEnded;
  final String title;
  final String id;

  factory Rooms.fromJson(Map<String, dynamic> json, String id) => Rooms(
        beginDate: json["beginDate"],
        endDate: json["endDate"],
        isEnded: json["isEnded"],
        title: json["title"],
        id: id,
      );
}

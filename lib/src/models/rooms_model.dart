import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';

Rooms roomsFromJson(String str) => Rooms.fromJson(json.decode(str));
class Rooms {
  Rooms({
    required this.beginDate,
    required this.endDate,
    required this.isEnded,
    required this.title,
  });

  final Timestamp beginDate;
  final Timestamp endDate;
  final bool isEnded;
  final String title;

  factory Rooms.fromJson(Map<String, dynamic> json) => Rooms(
    beginDate: json["beginDate"],
    endDate: json["endDate"],
    isEnded: json["isEnded"],
    title: json["title"],
  );
}

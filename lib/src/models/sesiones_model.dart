import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';

Sesiones sesionesFromJson(String str) => Sesiones.fromJson(json.decode(str));

class Sesiones {
  Sesiones({
    required this.agendas,
    required this.asistencia,
    required this.titulo,
  });

  final List<Agenda> agendas;
  final int asistencia;
  final String titulo;

  factory Sesiones.fromJson(Map<String, dynamic> json) => Sesiones(
    agendas: List<Agenda>.from(json["agendas"].map((x) => Agenda.fromJson(x))),
    asistencia: json["asistencia"],
    titulo: json["titulo"],
  );
}

class Agenda {
  Agenda({
    required this.fecha,
    required this.titulo,
  });

  final Timestamp fecha;
  final String titulo;

  factory Agenda.fromJson(Map<String, dynamic> json) => Agenda(
    fecha: json["fecha"],
    titulo: json["titulo"],
  );
}

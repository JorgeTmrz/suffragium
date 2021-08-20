import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';

Sesiones sesionesFromJson(String str) => Sesiones.fromJson(json.decode(str));

class Sesiones {
  Sesiones({
    required this.agendas,
    required this.asistencia,
    required this.titulo,
    required this.estado,
  });

  final List<Agenda> agendas;
  final int asistencia;
  final String titulo;
  final String estado;

  factory Sesiones.fromJson(Map<String, dynamic> json) => Sesiones(
        agendas:
            List<Agenda>.from(json["agendas"].map((x) => Agenda.fromJson(x))),
        asistencia: json["asistencia"],
        titulo: json["titulo"],
        estado: json["estado"],
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

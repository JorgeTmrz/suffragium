import 'dart:convert';

Votaciones votacionesFromJson(String str) => Votaciones.fromJson(json.decode(str));

class Votaciones {
  Votaciones({
    required this.preguntas,
    required this.agenda,
    required this.estado,
    required this.limite,
  });

  final List<Pregunta> preguntas;
  final String agenda;
  final String estado;
  final int limite;

  factory Votaciones.fromJson(Map<String, dynamic> json) => Votaciones(
    preguntas: List<Pregunta>.from(json["preguntas"].map((x) => Pregunta.fromJson(x))),
    agenda: json["agenda"],
    estado: json["estado"],
    limite: json["limite-preguntas"],
  );
}

class Pregunta {
  Pregunta({
    required this.titulo,
  });

  final String titulo;

  factory Pregunta.fromJson(Map<String, dynamic> json) => Pregunta(
    titulo: json["titulo"],
  );
}

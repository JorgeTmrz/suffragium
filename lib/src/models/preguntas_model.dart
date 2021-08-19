import 'dart:convert';

Preguntas preguntasFromJson(String str) => Preguntas.fromJson(json.decode(str));

class Preguntas {
    Preguntas({
      required this.preguntas,
      required this.limite,
      required this.agenda
    });

    final List<Pregunta> preguntas;
    final int limite;
    final String agenda;

    factory Preguntas.fromJson(Map<String, dynamic> json) => Preguntas(
        preguntas: List<Pregunta>.from(json["Preguntas"].map((x) => Pregunta.fromJson(x))),
        limite: json["limite"],
        agenda: json["agenda"]
    );
}

class Pregunta {
  Pregunta({
    required this.titulo,
    required this.votos,
  });

  final String titulo;
  final int votos;

  factory Pregunta.fromJson(Map<String, dynamic> json) => Pregunta(
    titulo: json["titulo"],
    votos: json["votos"],
  );
}

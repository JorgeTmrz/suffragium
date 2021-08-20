import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/models/preguntas_model.dart';
import 'package:votation_app/src/providers/app_state_provider.dart';
import 'package:votation_app/src/providers/preguntas_provider.dart';
import 'package:votation_app/src/providers/theme_provider.dart';

class VotationList extends StatelessWidget {
  FaIcon _getQuestionStatusIcon(String status) {
    switch (status) {
      case 'Finalizado':
        return FaIcon(FontAwesomeIcons.check);
      case 'En curso':
        return FaIcon(FontAwesomeIcons.clock);
      default:
        return FaIcon(FontAwesomeIcons.times);
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Provider.of<ThemeProvider>(context);
    final appState = Provider.of<AppStateProvider>(context);

    return StreamProvider<Votaciones>(
      create: (_) =>
          PreguntasProvider().getPreguntas(appState.getcurrentSession),
      initialData: Votaciones(limite: 0, preguntas: [], agenda: "", estado: ''),
      catchError: (_, error) => throw error.toString(),
      child: Scaffold(
        appBar: AppBar(
          elevation: 0.0,
          title: Consumer<Votaciones>(
            builder: (_, question, child) => Text(question.agenda,
                style: GoogleFonts.montserrat(
                    fontSize: 20, color: theme.currentTheme.iconTheme.color)),
          ),
        ),
        body: Consumer<Votaciones>(
          builder: (_, questions, child) => Column(
            children: [
              Expanded(
                  child: ListView(
                      children: questions.preguntas
                          .map((question) => Padding(
                                padding: EdgeInsets.symmetric(
                                    horizontal: 16.0, vertical: 5.3),
                                child: ListTile(
                                  leading:
                                      _getQuestionStatusIcon(question.estado),
                                  title: Text(question.titulo,
                                      style:
                                          GoogleFonts.montserrat(fontSize: 17)),
                                  onTap: () =>
                                      Navigator.pushNamed(context, 'session'),
                                  trailing: FaIcon(
                                    FontAwesomeIcons.chevronCircleRight,
                                  ),
                                ),
                              ))
                          .toList()))
            ],
          ),
        ),
      ),
    );
  }
}

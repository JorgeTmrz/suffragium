import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/models/preguntas_model.dart';
import 'package:votation_app/src/providers/theme_provider.dart';

class VotationList extends StatelessWidget {

  @override
  Widget build(BuildContext context) {

    final theme = Provider.of<ThemeProvider>(context);

    return Scaffold(
      appBar: AppBar(
        elevation: 0.0,
        title: Consumer<Votaciones>(
          builder: (_, question, child) => Text(
              question.agenda, style: GoogleFonts.montserrat(
              fontSize: 20,
              color: theme.currentTheme.iconTheme.color 
            )
          ),
        ),
      ),
      body: Consumer<Votaciones>(
        builder: (_, questions, child) => Column(
          children: [
            Expanded(
              child: ListView(
                children: questions.preguntas.map((question) => Padding(
                  padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 5.3),
                  child: ListTile(
                    title: Text(question.titulo, style: GoogleFonts.montserrat(fontSize: 17)),
                    onTap: () => Navigator.pushNamed(context, 'session'),
                    trailing: FaIcon(
                      FontAwesomeIcons.chevronCircleRight, 
                    ),
                  ), 
                )).toList() 
              )
            )
          ],
        ),
      ),
    );
  }
}
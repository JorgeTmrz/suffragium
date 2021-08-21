import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/models/preguntas_model.dart';
import 'package:votation_app/src/providers/theme_provider.dart';
import 'package:votation_app/src/screens/screens.dart';

class VotationList extends StatelessWidget {

  @override
  Widget build(BuildContext context) {

    final theme = Provider.of<ThemeProvider>(context);

    return Scaffold(
      appBar: AppBar(
        elevation: 0.0,
        title: Text(
            "Listado de preguntas", 
            style: GoogleFonts.montserrat(
            fontSize: 20,
            color: theme.currentTheme.iconTheme.color 
          )
        ),
      ),
      body: Consumer<Questions>(
        builder: (_, questions, child) => Column(
          children: [
            Expanded(
              child: ListView(
                children: questions.questions.map((question) => Padding(
                  padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 5.3),
                  child: ListTile(
                    title: Text(question.title, style: GoogleFonts.montserrat(fontSize: 17)),
                    subtitle: Text(
                      'Tiempo restante: ${question.duration.toDate().toString().split(' ')[1]
                        .replaceRange(0, 4, '')
                        .replaceRange(4, 8, '')}'
                    ),
                    onTap: () => Navigator.of(context).push(
                      MaterialPageRoute(builder: (_) => SessionScreen(
                        timer: question.duration.toDate().toString().split(' ')[1]
                          .replaceRange(0, 4, '')
                          .replaceRange(4, 8, ''),
                        question: question.title,
                      )
                    )),
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
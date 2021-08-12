import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/providers/theme_provider.dart';
import 'package:votation_app/src/widgets/question_timer.dart';

class SessionScreen extends StatefulWidget {
  @override
  _SessionScreenState createState() => _SessionScreenState();
}

class _SessionScreenState extends State<SessionScreen> {
  @override
  Widget build(BuildContext context) {

    final theme = Provider.of<ThemeProvider>(context);

    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          elevation: 0.0,
          title: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Sesión ordinaria #1', style: GoogleFonts.montserrat(
                fontSize: 30,
                color: theme.currentTheme.iconTheme.color 
              )),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text('Fecha: 2021-8-12', style: GoogleFonts.montserrat(
                    fontSize: 18,
                    color: theme.currentTheme.iconTheme.color 
                  )),
                  Text('Moises Tabar', style: GoogleFonts.montserrat(
                    fontSize: 18,
                    color: theme.currentTheme.iconTheme.color
                  ))
                ],
              )
            ],
          ),
          automaticallyImplyLeading: false,
        ),
        body: Padding(
          padding: EdgeInsets.all(16),
          child: QuestionTimer(theme: theme),
        ),
        floatingActionButton: ElevatedButton.icon(
          onPressed: () => Navigator.pop(context),
          icon: FaIcon(FontAwesomeIcons.chevronRight, color: Colors.white), 
          label: Text(
          'Ir a la siguiente pregunta',
          style: GoogleFonts.montserrat(
            color: Colors.white,
          ),
        )
        )
      ),
    );
  }
}

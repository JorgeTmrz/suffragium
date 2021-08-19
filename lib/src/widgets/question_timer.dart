import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:votation_app/src/providers/theme_provider.dart';
import 'package:votation_app/src/widgets/question_buttons.dart';

class QuestionTimer extends StatelessWidget {
  QuestionTimer({ required this.theme }); 

  final ThemeProvider theme;

  @override
  Widget build(BuildContext context) {
  return Column(
    crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          padding: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
          width: 100,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [
                theme.currentTheme.accentColor,
                Color(0xff6989F5),
              ]
            ),
            borderRadius: BorderRadius.all(Radius.circular(20.0))
          ),
          child: Text('3:02m', style: GoogleFonts.montserrat(
            fontSize: 20,
            color: Colors.white
          )),
        ),
        SizedBox(height: 20),
        Text(
          "Pregunta",
          style: GoogleFonts.montserrat(
            fontSize: 20, 
          )
        ),
        SizedBox(height: 25),
        ChoiceButtons()
      ],
    );
  }
}
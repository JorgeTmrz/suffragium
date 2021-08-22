import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:votation_app/src/classes/chart_class.dart';

class QuestionResultBox extends StatefulWidget {
  @override
  _QuestionResultBoxState createState() => _QuestionResultBoxState();
}

class _QuestionResultBoxState extends State<QuestionResultBox> {

  @override
  Widget build(BuildContext context) {

    final _h = MediaQuery.of(context).size.height;

    return Container(
      height: _h * 0.48,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(20))
      ),
      child: Column(
        children: [
          Text("Resultados de la votación", style: GoogleFonts.montserrat(fontSize: 30)),
          Expanded(
            child: QuestionResultsClass()
          )
        ],
      ),
    );
  }
}
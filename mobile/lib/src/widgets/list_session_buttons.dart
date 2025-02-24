import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';

class ListSessionButtons extends StatelessWidget {

  final String status = "En curso";

  Widget _setSessionStatus(){
    final double _s = 40;
    final Color _c = Colors.white;

    switch(status){
      case "Aprobado":
        return FaIcon(FontAwesomeIcons.check, size: _s, color: _c,);
      case "Desaprobado":
        return Icon(Icons.close, size: _s, color: _c);
      case "En curso":
        return FaIcon(FontAwesomeIcons.clock, size: _s, color: _c);
      default: 
        return FaIcon(FontAwesomeIcons.clock, size: _s, color: _c);  
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(top: 20, left: 20, right: 20),
      child: Container(
        width: double.infinity,
        height: 100,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              Color(0xff6989F5),
              Color(0xff906EF5)
            ]
          ),
          borderRadius: BorderRadius.circular(20),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.2), 
              offset: Offset(4, 6),
              blurRadius: 10
            )
          ],
        ),
        child: Stack(
          children: [
            Positioned(
              right: -20,
              top: -20,
              child: FaIcon(FontAwesomeIcons.calendarWeek, size: 150, color: Colors.white.withOpacity(0.2))
            ),
            GestureDetector(
              onTap: () => Navigator.pushNamed(context, 'list'),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  SizedBox(height: 90, width: 40,),
                  _setSessionStatus(),
                  SizedBox(width: 20),
                  Expanded(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Agenda: Sesión Ordinaria #1', style: GoogleFonts.montserrat(fontSize: 20, color: Colors.white)),
                          Text('Fecha: 2021-8-11', style: GoogleFonts.montserrat(fontSize: 15, color: Colors.white)),
                        ],
                      )
                  ),
                  FaIcon(FontAwesomeIcons.chevronRight, color: Colors.white),
                  SizedBox(width: 40)
                ],
              ),
            )
          ],
        ), 
      ),
    );
  }
}
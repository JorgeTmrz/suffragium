import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/models/sesiones_model.dart';
import 'package:votation_app/src/widgets/list_session_buttons.dart';
import 'package:votation_app/src/widgets/list_session_header.dart';

class ListSessionScreen extends StatefulWidget {
  @override
  _ListSessionScreenState createState() => _ListSessionScreenState();
}

class _ListSessionScreenState extends State<ListSessionScreen> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        ListSessionHeader(),
        Positioned(
            top: -50,
            left: -70,
            child: FaIcon(FontAwesomeIcons.calendar,
                size: 230, color: Colors.white.withOpacity(0.30))),
        Consumer<Sesiones>(
          builder: (_, sesion, child) => Column(
            children: [
              SizedBox(
                height: 80,
                width: double.infinity,
              ),
              Text(
                'Bienvenido',
                style: GoogleFonts.montserrat(
                    fontSize: 20, color: Colors.white.withOpacity(0.7)),
              ),
              Text(sesion.titulo,
                  style: GoogleFonts.montserrat(
                      fontSize: 25, color: Colors.white)),
              SizedBox(height: 20),
              FaIcon(FontAwesomeIcons.calendar, size: 80, color: Colors.white),
            ],
          ),
        ),
        Container(
          margin: EdgeInsets.only(top: 320),
          child: ListView(
            physics: BouncingScrollPhysics(),
            children: [
              ListSessionButtons(),
            ],
          ),
        ),
      ],
    );
  }
}

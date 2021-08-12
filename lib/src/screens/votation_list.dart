import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/providers/theme_provider.dart';

class VotationList extends StatelessWidget {

  List<Widget> _buildListTiles(BuildContext context) {
    final List<Widget> questions = [];

    for(int i = 1; i <= 10; i++){
      questions.addAll([
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 5.3),
          child: ListTile(
            leading: i == 10 ? Icon(Icons.close_rounded) : FaIcon(FontAwesomeIcons.clock),
            title: Text("Pregunta #$i", style: GoogleFonts.montserrat(fontSize: 17)),
            subtitle: Text("Votos: $i/10", style: GoogleFonts.montserrat(fontSize: 16)),
            onTap: () => Navigator.pushNamed(context, 'session'),
            trailing: FaIcon(
              FontAwesomeIcons.chevronCircleRight, 
            ),
          ),
        ),
      ]);
    }

    return questions;
  }

  @override
  Widget build(BuildContext context) {

    final theme = Provider.of<ThemeProvider>(context);

    return Scaffold(
      appBar: AppBar(
        elevation: 0.0,
        title: Text(
            'Sesión ordinaria #1: Agenda', style: GoogleFonts.montserrat(
            fontSize: 20,
            color: theme.currentTheme.iconTheme.color 
          )
        ),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView(
              children: _buildListTiles(context) 
            ),
          )
        ],
      ),
    );
  }
}
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/models/sesiones_model.dart';
import 'package:votation_app/src/providers/auth_service.dart';
import 'package:votation_app/src/providers/theme_provider.dart';
import 'package:votation_app/src/widgets/question_timer.dart';

class SessionScreen extends StatefulWidget {
  @override
  _SessionScreenState createState() => _SessionScreenState();
}

class _SessionScreenState extends State<SessionScreen> {
  late AuthService _auth;

  @override
  void initState() {
    _auth = new AuthService();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Provider.of<ThemeProvider>(context);

    return SafeArea(
      child: Scaffold(
          appBar: AppBar(
            elevation: 0.0,
            automaticallyImplyLeading: false,
            title: Consumer<Sesiones>(
              builder: (_, sessions, child) => Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    sessions.titulo,
                    style: GoogleFonts.montserrat(
                        fontSize: 30,
                        color: theme.currentTheme.iconTheme.color),
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "${sessions.agendas.map((e) => e.fecha.toDate())}",
                        style: GoogleFonts.montserrat(
                            fontSize: 18,
                            color: theme.currentTheme.iconTheme.color),
                      ),
                      Text(
                        _auth.getUserDisplayName() ?? 'Moises',
                        style: GoogleFonts.montserrat(
                            fontSize: 18,
                            color: theme.currentTheme.iconTheme.color),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          body: Padding(
            padding: const EdgeInsets.all(16),
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
              ))),
    );
  }
}

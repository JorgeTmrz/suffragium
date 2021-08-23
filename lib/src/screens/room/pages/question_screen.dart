import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/classes/chart_class.dart';
import 'package:votation_app/src/models/answers_model.dart';
import 'package:votation_app/src/models/questions_model.dart';
import 'package:votation_app/src/models/rooms_model.dart';
import 'package:votation_app/src/providers/answers_provider.dart';
import 'package:votation_app/src/providers/auth_service.dart';
import 'package:votation_app/src/providers/theme_provider.dart';
import 'package:votation_app/src/screens/room/widgets/question_timer.dart';
import 'package:votation_app/src/screens/room/widgets/response_buttons.dart';

class QuestionScreen extends StatefulWidget {
  late final String timer, question;

  QuestionScreen({required this.timer, required this.question});

  @override
  _QuestionScreenState createState() => _QuestionScreenState();
}

class _QuestionScreenState extends State<QuestionScreen> {
  late AuthService _auth;

  @override
  void initState() {
    _auth = new AuthService();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Provider.of<ThemeProvider>(context);
    final _h = MediaQuery.of(context).size.height;

    return Consumer<Questions>(
      builder: (context, questions, child) => StreamProvider<Answers>(
        create: (_) => AnswerProvider().getAnswers(questions.answers!.id),
        initialData: Answers(answers: []),
        catchError: (_, error) => throw error.toString(),
        child: SafeArea(
          child: Scaffold(
            appBar: AppBar(
              elevation: 0.0,
              automaticallyImplyLeading: false,
              title: Consumer<Rooms>(
                builder: (context, room, child) => Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      room.title,
                      style: GoogleFonts.montserrat(
                          fontSize: 30,
                          color: theme.currentTheme.iconTheme.color),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          room.beginDate.toDate().toString().split(' ')[0],
                          style: GoogleFonts.montserrat(
                              fontSize: 18,
                              color: theme.currentTheme.iconTheme.color),
                        ),
                        Text(
                          _auth.getUserDisplayName() ?? '',
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
            body: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  children: [
                    QuestionTimer(
                        theme: theme,
                        questionName: widget.question,
                        questionTimer: widget.timer),
                    Consumer<Answers>(
                      builder: (context, answers, child) => ResponseButtons(
                        answers: answers,
                        answersId: questions.answers!.id,
                        question: widget.question,
                      ),
                    ),
                    Container(
                      height: _h * 0.48,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.all(Radius.circular(20)),
                      ),
                      child: Column(
                        children: [
                          Text("Resultados de la votación",
                              style: GoogleFonts.montserrat(fontSize: 30)),
                          Expanded(
                            child:
                                QuestionResultsClass(question: widget.question),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 40),
                  ],
                ),
              ),
            ),
            floatingActionButton: ElevatedButton.icon(
              onPressed: () => Navigator.pop(context),
              icon: FaIcon(FontAwesomeIcons.chevronRight, color: Colors.white),
              label: Text(
                'Ir a la siguiente pregunta',
                style: GoogleFonts.montserrat(
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

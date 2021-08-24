import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:votation_app/src/models/answer_enum.dart';
import 'package:votation_app/src/models/answers_model.dart';
import 'package:votation_app/src/providers/answers_service.dart';
import 'package:votation_app/src/providers/auth_service.dart';

class ResponseButtons extends StatefulWidget {
  const ResponseButtons(
      {required this.answers,
      required this.answersId,
      required this.question,
      required this.questionIsEnded});
  final Answers answers;
  final String answersId;
  final String question;
  final bool questionIsEnded;
  @override
  _ResponseButtonsState createState() => _ResponseButtonsState();
}

class _ResponseButtonsState extends State<ResponseButtons> {
  late bool _yes;
  late bool _no;
  late bool _abs;
  late Map<String, bool> _buttonMap;
  late String value;
  final AuthService _auth = new AuthService();
  final AnswersService _answersService = new AnswersService();

  @override
  void initState() {
    super.initState();
    _yes = false;
    _no = false;
    _abs = false;
    _buttonMap = {"Si": _yes, "No": _no, "Me abstengo": _abs};
    value = "";
  }

  _updateAnswer(AnswerType answerType) {
    Answers newAnswers = widget.answers;
    var hasAnswer = widget.answers.answers.firstWhere(
        (element) =>
            element.user == _auth.getUserEmail()! &&
            element.question == widget.question,
        orElse: () => Answer(answer: '', question: '', user: ''));
    if (hasAnswer.user != '') {
      switch (answerType) {
        case AnswerType.yes:
          newAnswers.answers
              .where((element) =>
                  element.user == hasAnswer.user &&
                  element.question == widget.question)
              .first
              .answer = 'Si';
          break;
        case AnswerType.no:
          newAnswers.answers
              .where((element) =>
                  element.user == hasAnswer.user &&
                  element.question == widget.question)
              .first
              .answer = 'No';
          break;
        case AnswerType.abstain:
          newAnswers.answers
              .where((element) =>
                  element.user == hasAnswer.user &&
                  element.question == widget.question)
              .first
              .answer = 'Me abstengo';
          break;
      }
      _answersService.updateAnswer(
          newAnswers.answers.map((e) => e.toJson()).toList(), widget.answersId);
    } else {
      Answer answer = new Answer(
          answer: '', question: widget.question, user: _auth.getUserEmail()!);
      switch (answerType) {
        case AnswerType.yes:
          answer.answer = 'Si';
          break;
        case AnswerType.no:
          answer.answer = 'No';
          break;
        case AnswerType.abstain:
          answer.answer = 'Me abstengo';
          break;
      }
      newAnswers.answers.add(answer);
      _answersService.updateAnswer(
          newAnswers.answers.map((e) => e.toJson()).toList(), widget.answersId);
    }
  }

  void _setButtonState(String key) {
    if (key == "Si") {
      _yes = true;
      _no = false;
      _abs = false;
      setState(() => value = key);
      _updateAnswer(AnswerType.yes);
    }

    if (key == "No") {
      _yes = false;
      _no = true;
      _abs = false;
      setState(() => value = key);
      _updateAnswer(AnswerType.no);
    }

    if (key == "Me abstengo") {
      _yes = false;
      _no = false;
      _abs = true;
      setState(() => value = key);
      _updateAnswer(AnswerType.abstain);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: _buttonMap.keys
                .map((key) => ElevatedButton.icon(
                      onPressed: widget.questionIsEnded
                          ? null
                          : () => _setButtonState(key),
                      icon: key == "Si"
                          ? FaIcon(FontAwesomeIcons.thumbsUp)
                          : key == "No"
                              ? FaIcon(FontAwesomeIcons.thumbsDown)
                              : key == "Me abstengo"
                                  ? FaIcon(FontAwesomeIcons.hands)
                                  : FaIcon(FontAwesomeIcons.accessibleIcon),
                      label: Text(key),
                    ))
                .toList()),
        const SizedBox(height: 30),
        Text(
          widget.questionIsEnded
              ? 'Esta pregunta ha finalizado'
              : value == ""
                  ? "No ha seleccionado ninguna opción"
                  : "Usted ha seleccionado: $value",
          style: GoogleFonts.montserrat(fontSize: 20),
        ),
        const SizedBox(height: 30),
      ],
    );
  }
}

import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/models/answer_enum.dart';
import 'package:votation_app/src/models/answers_model.dart';
import 'package:votation_app/src/models/vote_model.dart';
import 'package:votation_app/src/providers/theme_provider.dart';

class QuestionResultsClass extends StatelessWidget {
  String _getAnswerTitle(AnswerType answer) {
    switch (answer) {
      case AnswerType.yes:
        return "Si";
      case AnswerType.no:
        return "No";
      case AnswerType.abstain:
        return "Abstenerce";
    }
  }

  List<Series<Vote, String>> _createData(
      BuildContext context, List<Answer> answers) {
    final theme = Provider.of<ThemeProvider>(context).currentTheme;
    Vote positiveVotes = Vote(vote: AnswerType.yes, quantity: 0);
    Vote negativeVotes = Vote(vote: AnswerType.no, quantity: 0);
    Vote abstainVotes = Vote(vote: AnswerType.abstain, quantity: 0);

    for (var vote in answers) {
      switch (vote.answer) {
        case AnswerType.yes:
          positiveVotes.quantity++;
          break;
        case AnswerType.no:
          negativeVotes.quantity++;
          break;
        case AnswerType.abstain:
          abstainVotes.quantity++;
          break;
      }
    }

    final data = [
      positiveVotes,
      negativeVotes,
      abstainVotes,
    ];

    return [
      Series<Vote, String>(
          id: 'Votes',
          domainFn: (Vote data, _) =>
              '${_getAnswerTitle(data.vote)} : ${data.quantity}',
          measureFn: (Vote data, _) => data.quantity,
          data: data,
          colorFn: (Vote data, _) => ColorUtil.fromDartColor(theme.accentColor))
    ];
  }

  @override
  Widget build(BuildContext context) {
    final theme = Provider.of<ThemeProvider>(context);

    return Consumer<Answers>(
      builder: (context, answers, child) => BarChart(
        _createData(context, answers.answers),
        vertical: true,
        domainAxis: OrdinalAxisSpec(
          renderSpec: SmallTickRendererSpec(
            minimumPaddingBetweenLabelsPx: 0,
            labelAnchor: TickLabelAnchor.centered,
            labelStyle: TextStyleSpec(
                fontSize: 18, color: MaterialPalette.gray.shade500),
            lineStyle: LineStyleSpec(
                color: theme.customDarkTheme
                    ? MaterialPalette.white
                    : MaterialPalette.black),
          ),
        ),
      ),
    );
  }
}

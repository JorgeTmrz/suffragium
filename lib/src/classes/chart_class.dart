import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/providers/theme_provider.dart';

class QuestionResultsClass extends StatelessWidget {
  List<Series<Test, String>> _createData(BuildContext context) {
    final theme = Provider.of<ThemeProvider>(context).currentTheme;

    final data = [
      Test(vote: "Si", quantity: 10),
      Test(vote: "No", quantity: 6),
      Test(vote: "Me abstengo", quantity: 2)
    ];

    return [
      Series<Test, String>(
          id: 'Prueba',
          domainFn: (Test data, _) => '${data.vote} : ${data.quantity}',
          measureFn: (Test data, _) => data.quantity,
          data: data,
          colorFn: (Test data, _) => ColorUtil.fromDartColor(theme.accentColor))
    ];
  }

  @override
  Widget build(BuildContext context) {
    final theme = Provider.of<ThemeProvider>(context);

    return BarChart(
      _createData(context),
      vertical: true,
      domainAxis: OrdinalAxisSpec(
        renderSpec: SmallTickRendererSpec(
          minimumPaddingBetweenLabelsPx: 0,
          labelAnchor: TickLabelAnchor.centered,
          labelStyle:
              TextStyleSpec(fontSize: 18, color: MaterialPalette.gray.shade500),
          lineStyle: LineStyleSpec(
              color: theme.customDarkTheme
                  ? MaterialPalette.white
                  : MaterialPalette.black),
        ),
      ),
    );
  }
}

class Test {
  late String vote;
  late int quantity;

  Test({required this.vote, required this.quantity});
}

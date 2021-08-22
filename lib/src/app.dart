import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/providers/theme_provider.dart';
import 'package:votation_app/src/screens/screens.dart';

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final theme = Provider.of<ThemeProvider>(context);

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: 'login',
      theme: theme.currentTheme,
      routes: <String, WidgetBuilder>{
        'login': (_) => LoginScreen(),
        'signin': (_) => SignInScreen(),
        'signup': (_) => SignUpScreen(),
        'home': (_) => HomeScreen(),
        'list': (_) => QuestionsList(),
      },
    );
  }
}

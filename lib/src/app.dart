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
      theme: theme.currentTheme,
      initialRoute: 'login',
      onGenerateRoute: (settings) {
        if (settings.name == 'login') {
          return PageRouteBuilder(
              pageBuilder: (_, __, ___) => LoginScreen(),
              transitionsBuilder: (_, __, ___, child) => child);
        }
        if (settings.name == 'signin') {
          return PageRouteBuilder(
              pageBuilder: (_, __, ___) => SignInScreen(),
              transitionsBuilder: (_, __, ___, child) => child);
        }
        if (settings.name == 'signup') {
          return PageRouteBuilder(
              pageBuilder: (_, __, ___) => SignUpScreen(),
              transitionsBuilder: (_, __, ___, child) => child);
        }
        if (settings.name == 'home') {
          return PageRouteBuilder(
              pageBuilder: (_, __, ___) => HomeScreen(),
              transitionsBuilder: (_, __, ___, child) => child);
        }
        if (settings.name == 'list') {
          return PageRouteBuilder(
              pageBuilder: (_, __, ___) => QuestionsList(
                    roomId: settings.arguments as String,
                  ),
              transitionsBuilder: (_, __, ___, child) => child);
        }
        return MaterialPageRoute(builder: (_) => LoginScreen());
      },
    );
  }
}

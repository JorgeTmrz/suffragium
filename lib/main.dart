import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/app.dart';
import 'package:votation_app/src/models/preguntas_model.dart';
import 'package:votation_app/src/providers/preguntas_provider.dart';
import 'package:votation_app/src/providers/theme_provider.dart';

Future<void> main() async {

  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();

  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider<ThemeProvider>(create: (_) => ThemeProvider(1)),
        ChangeNotifierProvider(create: (_) => PreguntasProvider()),
        StreamProvider<Preguntas>(
          create: (_) => PreguntasProvider().getPreguntas('Votación: Sesión Ordinaria #1'), 
          initialData: Preguntas(limite: 0, preguntas: []),
          catchError: (_, error) => throw error.toString(),
        )
      ],
      child: App()
    ),
  );
}
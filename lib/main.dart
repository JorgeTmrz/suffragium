import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/app.dart';
import 'package:votation_app/src/models/preguntas_model.dart';
import 'package:votation_app/src/models/sesiones_model.dart';
import 'package:votation_app/src/providers/preguntas_provider.dart';
import 'package:votation_app/src/providers/sesiones_provider.dart';
import 'package:votation_app/src/providers/theme_provider.dart';

Future<void> main() async {

  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();

  // Add other providers here to avoid context error
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider<ThemeProvider>(create: (_) => ThemeProvider(1)),
        ChangeNotifierProvider(create: (_) => PreguntasProvider()),
        StreamProvider<Votaciones>(
          create: (_) => PreguntasProvider().getPreguntas('Votación: Sesión Ordinaria #1'), 
          initialData: Votaciones(limite: 0, preguntas: [], agenda: "", estado: ''),
          catchError: (_, error) => throw error.toString(),
        ),
        ChangeNotifierProvider<SesionesProvider>(create: (_) => SesionesProvider()),
        StreamProvider<Sesiones>(
          create: (_) => SesionesProvider().getSesiones('Sesion ordinaria #1'), 
          initialData: Sesiones(agendas: [], titulo: "No hay sesiones pautadas", asistencia: 0),
          catchError: (_, error) => throw error.toString(),
        )
      ],
      child: App()
    ),
  );
}
import 'package:flutter/material.dart';

class AppStateProvider with ChangeNotifier {
  AppStateProvider();

  String _currentSession = "";

  void setcurrentSession(String text) {
    _currentSession = text;
    notifyListeners();
  }

  String get getcurrentSession => _currentSession;
}

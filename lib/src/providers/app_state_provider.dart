import 'package:flutter/material.dart';
import 'package:votation_app/src/models/rooms_model.dart';

class AppStateProvider with ChangeNotifier {
  AppStateProvider();

  String _currentQuestion = "";
  Rooms? _currentRoom;

  void setCurrentQuestion(String text) {
    _currentQuestion = text;
    notifyListeners();
  }

  String get getCurrentQuestion => _currentQuestion;

  void setCurrentRoom(Rooms rooms) {
    _currentRoom = rooms;
    notifyListeners();
  }

  Rooms get getCurrentRoom => _currentRoom!;
}

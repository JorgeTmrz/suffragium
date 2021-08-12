import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class ThemeProvider with ChangeNotifier {
  bool _customDarkTheme = false;
  late ThemeData _currentTheme;

  bool get customDarkTheme => this._customDarkTheme;
  ThemeData get currentTheme => this._currentTheme;

  ThemeData _customDarkThemeOptions = ThemeData.dark().copyWith(
    backgroundColor: Colors.black,
    scaffoldBackgroundColor: Colors.black,
    accentColor: Colors.indigo.shade600,
    primaryColor: Colors.black,
    bottomNavigationBarTheme: BottomNavigationBarThemeData(
      backgroundColor: Colors.black,
      selectedIconTheme: IconThemeData(color: Colors.white),
      unselectedIconTheme: IconThemeData(color: Colors.white54),
      selectedLabelStyle: GoogleFonts.montserrat(color: Colors.white, fontSize: 15),
      unselectedLabelStyle: GoogleFonts.montserrat(color: Colors.white54, fontSize: 15),
      selectedItemColor: Colors.white
    ),
    iconTheme: IconThemeData(color: Colors.white),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ButtonStyle(
        textStyle: MaterialStateProperty.all<TextStyle>(GoogleFonts.montserrat(
          fontSize: 19,
          color: Colors.white
        )),
        backgroundColor: MaterialStateProperty.all<Color>(Color(0xff6989F5)),
        shape: MaterialStateProperty.all<OutlinedBorder>(RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(20))
        ))
      )
    )
  );

  ThemeData _customLightThemeOptions = ThemeData.light().copyWith(
    backgroundColor: Colors.white,
    scaffoldBackgroundColor: Colors.white,
    accentColor: Colors.lightBlue.shade700,
    primaryColor: Colors.white,
    bottomNavigationBarTheme: BottomNavigationBarThemeData(
      backgroundColor: Colors.white,
      selectedIconTheme: IconThemeData(color: Colors.black),
      unselectedIconTheme: IconThemeData(color: Colors.black54),
      selectedLabelStyle: GoogleFonts.montserrat(color: Colors.black, fontSize: 15),
      unselectedLabelStyle: GoogleFonts.montserrat(color: Colors.black54, fontSize: 15),
      selectedItemColor: Colors.black
    ),
    iconTheme: IconThemeData(color: Colors.black),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ButtonStyle(
        textStyle: MaterialStateProperty.all<TextStyle>(GoogleFonts.montserrat(
          fontSize: 19,
          color: Colors.white
        )),
        backgroundColor: MaterialStateProperty.all<Color>(Color(0xff6989F5)),
        shape: MaterialStateProperty.all<OutlinedBorder>(RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(20))
        ))
      )
    )
  );

  ThemeProvider(int theme) {
    switch(theme){
      case 1:
        _customDarkTheme = true;
        _currentTheme = _customDarkThemeOptions;
        break;
      case 2: 
        _customDarkTheme = false;
        _currentTheme = _customLightThemeOptions;
        break;
      default:
        _customDarkTheme = true;
        _currentTheme = ThemeData.dark();
    }
  }

  set customDarkTheme(bool isCustomThemed){
    _customDarkTheme = false;

    if(isCustomThemed) {
      _currentTheme = _customDarkThemeOptions;
    }
    else { 
      _currentTheme = _customLightThemeOptions;
    }
    notifyListeners();
  }
}
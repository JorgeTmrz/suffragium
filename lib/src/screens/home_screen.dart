import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:votation_app/src/screens/screens.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {

  late int _currentIndex;

  @override
  void initState() {
    super.initState();
    _currentIndex = 0;
  }

  void _setCurrentIndex(int index) => setState(() => _currentIndex = index);

  @override
  Widget build(BuildContext context) {

    final double _h = MediaQuery.of(context).size.height;
    
    final List<Widget> _screensToDisplay = [
      ListSessionScreen(),
      AccountScreen()
    ];

    return SafeArea(
      child: Scaffold(
        body: _screensToDisplay.elementAt(_currentIndex),
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: _currentIndex,
          onTap: _setCurrentIndex,
          elevation: 0.0,
          items: [
            BottomNavigationBarItem(icon: FaIcon(FontAwesomeIcons.calendar), label: 'Sesiones'),
            BottomNavigationBarItem(icon: FaIcon(FontAwesomeIcons.solidUserCircle), label: 'Cuenta')
          ],
          iconSize: _h * 0.038,
        ),
      ),
    );
  }
}
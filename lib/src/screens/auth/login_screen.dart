import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:votation_app/src/providers/auth_service.dart';
import 'package:votation_app/src/screens/screens.dart';

class LoginScreen extends StatelessWidget {
  LoginScreen({Key? key}) : super(key: key);
  final AuthService _auth = new AuthService();

  @override
  Widget build(BuildContext context) {
    var isLoggedIn = _auth.auth.currentUser;
    if (isLoggedIn != null) {
      return HomeScreen();
    }
    final double _h = MediaQuery.of(context).size.height;
    final double _w = MediaQuery.of(context).size.width;

    return Scaffold(
      appBar: AppBar(
        title: Padding(
          padding: EdgeInsets.only(top: 18),
          child: Align(
            alignment: Alignment.topCenter,
            child: Text(
              'Bienvenido a Sufraggium',
              style: GoogleFonts.montserrat(fontSize: 18),
            ),
          ),
        ),
      ),
      body: Column(
        children: [
          Padding(
            padding: EdgeInsets.all(_w * 0.10),
            child: SvgPicture.asset(
              'assets/voting.svg',
              width: _w / 2,
              height: _h / 2,
            ),
          ),
          Container(
            width: _w * 0.8,
            height: _h * 0.06,
            child: ElevatedButton(
                child: Text("Iniciar sesión"),
                style: ButtonStyle(
                  shape: MaterialStateProperty.all(
                    RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                  ),
                ),
                onPressed: () => Navigator.pushNamed(context, 'signin')),
          ),
          const SizedBox(height: 17),
          Container(
            width: _w * 0.8,
            height: _h * 0.06,
            child: ElevatedButton(
                child: Text("Registrarse"),
                style: ButtonStyle(
                  backgroundColor:
                      MaterialStateProperty.all(Colors.indigo.shade200),
                  shape: MaterialStateProperty.all(
                    RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                  ),
                ),
                onPressed: () => Navigator.pushNamed(context, 'signup')),
          ),
        ],
      ),
    );
  }
}

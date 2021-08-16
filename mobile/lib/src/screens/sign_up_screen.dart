import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/providers/theme_provider.dart';
import 'package:votation_app/src/widgets/text_form_fields.dart';

class SignUpScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final theme = Provider.of<ThemeProvider>(context);
    final double _h = MediaQuery.of(context).size.height;
    final double _w = MediaQuery.of(context).size.width;

    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        title: Padding(
          padding: EdgeInsets.only(top: 12),
          child: Align(
            alignment: Alignment.topCenter,
            child: Text(
              'Registrar cuenta', 
              style: GoogleFonts.montserrat(fontSize: 18),
            ),
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Padding(
              padding: EdgeInsets.all(16),
              child: SvgPicture.asset(
                'assets/vote_login.svg',
                width: _w / 2,
                height: _h / 2,
              ),
            ),
            CustomTextFormFields(
              prefixIcon: FaIcon(FontAwesomeIcons.user, color: Colors.indigo.shade400), 
              hintText: 'Ingrese su nombre de usuario', 
              isPassword: false
            ),
            CustomTextFormFields(
              prefixIcon: FaIcon(FontAwesomeIcons.user, color: Colors.indigo.shade400), 
              hintText: 'Ingrese su correo electrónico', 
              isPassword: false
            ),
            CustomTextFormFields(
              prefixIcon: FaIcon(FontAwesomeIcons.key, color: Colors.indigo.shade400,), 
              hintText: 'Ingrese su contraseña', 
              isPassword: true,
            ),
            SizedBox(height: 10),
            Container(
              width: _w * 0.8,
              height: _h * 0.06,
              child: ElevatedButton(
                child: Text("Registrarse"),
                style: ButtonStyle(
                  shape: MaterialStateProperty.all(RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30)
                    )
                  )
                ),
                onPressed: () => Navigator.pushReplacementNamed(context, 'signin')
              ),
            ),
          ],
        ),
      ),
    );
  }
}
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:votation_app/src/providers/auth_service.dart';
import 'package:votation_app/src/widgets/text_form_fields.dart';

class SignInScreen extends StatelessWidget {
  final TextEditingController _emailController = new TextEditingController();
  final TextEditingController _passwordController = new TextEditingController();
  final _formKey = GlobalKey<FormState>();
  final AuthService _auth = new AuthService();

  @override
  Widget build(BuildContext context) {
    final double _h = MediaQuery.of(context).size.height;
    final double _w = MediaQuery.of(context).size.width;

    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        title: Padding(
          padding: const EdgeInsets.only(top: 18),
          child: Align(
            alignment: Alignment.topCenter,
            child: Text(
              'Iniciar Sesión',
              style: GoogleFonts.montserrat(fontSize: 18),
            ),
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(19),
                child: SvgPicture.asset(
                  'assets/vote_login.svg',
                  width: _w / 2,
                  height: _h / 2,
                ),
              ),
              CustomTextFormFields(
                prefixIcon: FaIcon(FontAwesomeIcons.user,
                    color: Colors.indigo.shade400),
                hintText: 'Ingrese su correo electronico',
                isPassword: false,
                controller: _emailController,
                valitador: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Por favor, introduzca un correo electrónico';
                  }
                  return null;
                },
              ),
              CustomTextFormFields(
                prefixIcon: FaIcon(
                  FontAwesomeIcons.key,
                  color: Colors.indigo.shade400,
                ),
                hintText: 'Ingrese su contraseña',
                isPassword: true,
                controller: _passwordController,
                valitador: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Por favor, introduzca una contraseña';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 10),
              Container(
                width: _w * 0.8,
                height: _h * 0.06,
                child: ElevatedButton(
                    child: const Text("Iniciar sesión"),
                    style: ButtonStyle(
                      shape: MaterialStateProperty.all(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30),
                        ),
                      ),
                    ),
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        _auth.onSignIn(context, _emailController.text,
                            _passwordController.text);
                      }
                    }),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

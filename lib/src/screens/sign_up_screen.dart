import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:votation_app/src/providers/auth_service.dart';
import 'package:votation_app/src/widgets/text_form_fields.dart';

class SignUpScreen extends StatelessWidget {
  final TextEditingController _fullNameController = new TextEditingController();
  final TextEditingController _emailController = new TextEditingController();
  final TextEditingController _passwordFirstController =
      new TextEditingController();
  final TextEditingController _passwordSecondController =
      new TextEditingController();
  final _formKey = GlobalKey<FormState>();
  final AuthService _auth = new AuthService();

  @override
  Widget build(BuildContext context) {
    final double _w = MediaQuery.of(context).size.width;
    final double _h = MediaQuery.of(context).size.height;

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
        child: Form(
          key: _formKey,
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
                prefixIcon: FaIcon(
                  FontAwesomeIcons.user,
                  color: Colors.indigo.shade400,
                ),
                hintText: 'Ingrese su nombre completo',
                isPassword: false,
                controller: _fullNameController,
                valitador: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Por favor, introduzca su nombre';
                  }
                  return null;
                },
              ),
              CustomTextFormFields(
                prefixIcon: FaIcon(
                  FontAwesomeIcons.envelope,
                  color: Colors.indigo.shade400,
                ),
                hintText: 'Ingrese su correo electrónico',
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
                hintText: 'Ingrese una contraseña',
                isPassword: true,
                controller: _passwordFirstController,
                valitador: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Por favor, introduzca una contraseña';
                  } else if (value != _passwordSecondController.value.text) {
                    return 'Las contraseñas no coinciden';
                  }
                  return null;
                },
              ),
              CustomTextFormFields(
                prefixIcon: FaIcon(
                  FontAwesomeIcons.key,
                  color: Colors.indigo.shade400,
                ),
                hintText: 'Ingrese su contraseña denuevo',
                isPassword: true,
                controller: _passwordSecondController,
                valitador: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Por favor, introduzca una contraseña';
                  } else if (value != _passwordFirstController.value.text) {
                    return 'Las contraseñas no coinciden';
                  }
                  return null;
                },
              ),
              SizedBox(height: 10),
              Container(
                width: _w - 46,
                height: _h * 0.06,
                child: ElevatedButton(
                    child: Text("Registrarse"),
                    style: ButtonStyle(
                      shape: MaterialStateProperty.all(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30),
                        ),
                      ),
                    ),
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        _auth.onSignUp(
                            context,
                            _fullNameController.text,
                            _emailController.text,
                            _passwordFirstController.text);
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

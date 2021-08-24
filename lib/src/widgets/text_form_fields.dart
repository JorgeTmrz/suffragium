import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class CustomTextFormFields extends StatelessWidget {
  late final bool isPassword;
  late final String hintText;
  late final FaIcon prefixIcon;
  final TextEditingController controller;
  final String? Function(String?)? valitador;

  CustomTextFormFields({
    required this.isPassword,
    required this.hintText,
    required this.prefixIcon,
    required this.controller,
    this.valitador,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 12),
      padding: const EdgeInsets.symmetric(horizontal: 23, vertical: 5),
      width: MediaQuery.of(context).size.width * 0.9,
      decoration: BoxDecoration(
          color: Colors.indigo.shade200,
          borderRadius: BorderRadius.circular(29)),
      child: TextFormField(
        obscureText: this.isPassword,
        validator: this.valitador,
        cursorColor: Colors.indigo,
        controller: this.controller,
        keyboardType: this.isPassword
            ? TextInputType.visiblePassword
            : TextInputType.emailAddress,
        decoration: InputDecoration(
            icon: prefixIcon, hintText: hintText, border: InputBorder.none),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class CustomTextFormFields extends StatelessWidget {

  late final bool isPassword;
  late final String hintText;
  late final FaIcon prefixIcon;

  CustomTextFormFields({
    required this.isPassword, 
    required this.hintText,
    required this.prefixIcon,
  });


  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 12),
      padding: EdgeInsets.symmetric(horizontal: 23, vertical: 5),
      width: MediaQuery.of(context).size.width * 0.9,
      decoration: BoxDecoration(
        color: Colors.indigo.shade200,
        borderRadius: BorderRadius.circular(29)
      ),
      child: TextFormField(
        cursorColor: Colors.indigo,
        decoration: InputDecoration(
          icon: prefixIcon,
          hintText: hintText,
          border: InputBorder.none
        ),
      ),
    );
  }
}
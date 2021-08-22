import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';

class ResponseButtons extends StatefulWidget {
  @override
  _ResponseButtonsState createState() => _ResponseButtonsState();
}

class _ResponseButtonsState extends State<ResponseButtons> {
  late bool _yes;
  late bool _no;
  late bool _abs;
  late Map<String, bool> _buttonMap;
  late String value;

  @override
  void initState() {
    super.initState();
    _yes = false;
    _no = false;
    _abs = false;
    _buttonMap = {"Si": _yes, "No": _no, "Me abstengo": _abs};
    value = "";
  }

  void _setButtonState(String key) {
    if (key == "Si") {
      _yes = true;
      _no = false;
      _abs = false;
      setState(() => value = key);
    }

    if (key == "No") {
      _yes = false;
      _no = true;
      _abs = false;
      setState(() => value = key);
    }

    if (key == "Me abstengo") {
      _yes = false;
      _no = false;
      _abs = true;
      setState(() => value = key);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: _buttonMap.keys
                .map((key) => ElevatedButton.icon(
                      onPressed: () => _setButtonState(key),
                      icon: key == "Si"
                          ? FaIcon(FontAwesomeIcons.thumbsUp)
                          : key == "No"
                              ? FaIcon(FontAwesomeIcons.thumbsDown)
                              : key == "Me abstengo"
                                  ? FaIcon(FontAwesomeIcons.hands)
                                  : FaIcon(FontAwesomeIcons.accessibleIcon),
                      label: Text(key),
                    ))
                .toList()),
        const SizedBox(height: 30),
        Text(
          value == ""
              ? "No ha seleccionado ninguna opción"
              : "Usted ha seleccionado: $value",
          style: GoogleFonts.montserrat(fontSize: 20),
        ),
        const SizedBox(height: 30),
      ],
    );
  }
}

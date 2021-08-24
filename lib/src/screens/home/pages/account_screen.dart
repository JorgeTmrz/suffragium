import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/providers/auth_service.dart';
import 'package:votation_app/src/providers/theme_provider.dart';

class AccountScreen extends StatefulWidget {
  @override
  _AccountScreenState createState() => _AccountScreenState();
}

class _AccountScreenState extends State<AccountScreen> {
  late bool _isClicked;
  late AuthService _auth;

  @override
  void initState() {
    _isClicked = true;
    _auth = new AuthService();
    super.initState();
  }

  _isButtonClicked() => setState(() => _isClicked = !_isClicked);
  _isThemeSwitched(bool value, BuildContext context) {
    final _theme = Provider.of<ThemeProvider>(context, listen: false);
    _theme.customDarkTheme = value;
  }

  @override
  Widget build(BuildContext context) {
    final double _w = MediaQuery.of(context).size.width;
    final double _h = MediaQuery.of(context).size.height;
    final theme = Provider.of<ThemeProvider>(context);

    return Scaffold(
      appBar: AppBar(
        elevation: 0.0,
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              'Cuenta',
              style: GoogleFonts.montserrat(
                  fontSize: 25, color: theme.currentTheme.iconTheme.color),
            ),
            IconButton(
                onPressed: () {
                  _isButtonClicked();
                  _isThemeSwitched(_isClicked, context);
                },
                icon: Icon(
                  _isClicked ? Icons.light_mode : Icons.dark_mode,
                  size: _w * 0.070,
                  color: theme.currentTheme.iconTheme.color,
                ))
          ],
        ),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 55.0),
            child: Container(
              height: _h * 0.18,
              decoration: BoxDecoration(
                  image: DecorationImage(
                      image: NetworkImage(
                          "https://cdn5.vectorstock.com/i/thumb-large/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg")),
                  shape: BoxShape.circle),
            ),
          ),
          const SizedBox(height: 15),
          Text(
            _auth.getUserDisplayName() ?? '',
            overflow: TextOverflow.ellipsis,
            softWrap: true,
            maxLines: 1,
            style: GoogleFonts.montserrat(fontSize: 25, letterSpacing: 0.5),
          ),
          const SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.email_outlined, size: 35.0),
              const SizedBox(width: 8),
              Text(
                _auth.getUserEmail() ?? '',
                overflow: TextOverflow.ellipsis,
                softWrap: true,
                maxLines: 1,
                style: GoogleFonts.montserrat(fontSize: 18),
              ),
            ],
          ),
          const SizedBox(height: 30),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10),
              child: Column(
                children: [
                  ListTile(
                    title: Text('Ayuda y Soporte',
                        style: GoogleFonts.montserrat(fontSize: 16)),
                    subtitle: Text('Acerca de nosotros',
                        style: GoogleFonts.montserrat(fontSize: 20)),
                    trailing: FaIcon(FontAwesomeIcons.chevronRight, size: 20),
                  ),
                  ListTile(
                    title: Text('Ajustes de cuenta',
                        style: GoogleFonts.montserrat(fontSize: 16)),
                    subtitle: Text('Toma una nueva foto de perfil',
                        style: GoogleFonts.montserrat(fontSize: 20)),
                    trailing: FaIcon(FontAwesomeIcons.chevronRight, size: 20),
                  ),
                  ListTile(
                    title: Text('Sesión actual',
                        style: GoogleFonts.montserrat(fontSize: 16)),
                    subtitle: Text('Cerrar sesión',
                        style: GoogleFonts.montserrat(fontSize: 20)),
                    onTap: () => _auth.onSignOut(context),
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}

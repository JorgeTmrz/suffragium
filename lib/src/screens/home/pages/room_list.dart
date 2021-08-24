import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/models/rooms_model.dart';
import 'package:votation_app/src/providers/auth_service.dart';
import 'package:votation_app/src/screens/home/widgets/room_button.dart';
import 'package:votation_app/src/screens/home/widgets/room_list_header.dart';

class RoomList extends StatelessWidget {
  RoomList({Key? key}) : super(key: key);
  final AuthService _auth = new AuthService();

  @override
  Widget build(BuildContext context) {
    return Consumer<List<Rooms>>(
      builder: (context, rooms, child) => Stack(
        children: [
          RoomListHeader(),
          Positioned(
              top: -50,
              left: -70,
              child: FaIcon(FontAwesomeIcons.calendar,
                  size: 230, color: Colors.white.withOpacity(0.30))),
          Column(
            children: [
              const SizedBox(
                height: 80,
                width: double.infinity,
              ),
              Text(
                'Bienvenido',
                style: GoogleFonts.montserrat(
                    fontSize: 20, color: Colors.white.withOpacity(0.7)),
              ),
              Text(_auth.getUserDisplayName() ?? '',
                  style: GoogleFonts.montserrat(
                      fontSize: 25, color: Colors.white)),
              const SizedBox(height: 20),
              const FaIcon(FontAwesomeIcons.calendar,
                  size: 80, color: Colors.white),
            ],
          ),
          Container(
              margin: EdgeInsets.only(top: 320),
              child: ListView.builder(
                physics: BouncingScrollPhysics(),
                itemCount: rooms.length,
                itemBuilder: (context, index) => RoomButton(room: rooms[index]),
              )),
        ],
      ),
    );
  }
}

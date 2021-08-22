import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:votation_app/src/models/rooms_model.dart';
import 'package:votation_app/src/screens/home/widgets/room_button.dart';
import 'package:votation_app/src/screens/home/widgets/room_list_header.dart';

class RoomList extends StatefulWidget {
  @override
  _RoomListState createState() => _RoomListState();
}

class _RoomListState extends State<RoomList> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // TODO: Aislar este widget
        RoomListHeader(),
        Positioned(
            top: -50,
            left: -70,
            child: FaIcon(FontAwesomeIcons.calendar,
                size: 230, color: Colors.white.withOpacity(0.30))),
        Consumer<Rooms>(
          builder: (_, room, child) => Column(
            children: [
              SizedBox(
                height: 80,
                width: double.infinity,
              ),
              Text(
                'Bienvenido',
                style: GoogleFonts.montserrat(
                    fontSize: 20, color: Colors.white.withOpacity(0.7)),
              ),
              Text(room.title,
                  style: GoogleFonts.montserrat(
                      fontSize: 25, color: Colors.white)),
              SizedBox(height: 20),
              FaIcon(FontAwesomeIcons.calendar, size: 80, color: Colors.white),
            ],
          ),
        ),
        Container(
          margin: EdgeInsets.only(top: 320),
          child: ListView(
            physics: BouncingScrollPhysics(),
            children: [
              // TODO: Traer todas los rooms vinculados al usuario
              RoomButton(),
            ],
          ),
        ),
      ],
    );
  }
}

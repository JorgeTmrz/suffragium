import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:votation_app/src/models/rooms_model.dart';

class RoomButton extends StatelessWidget {
  RoomButton({required this.room});
  final Rooms room;

  Widget _getRoomStatusIcon(bool status) {
    final double _s = 40;
    final Color _c = Colors.white;

    switch (status) {
      case true:
        return FaIcon(
          FontAwesomeIcons.check,
          size: _s,
          color: _c,
        );
      default:
        return FaIcon(FontAwesomeIcons.clock, size: _s, color: _c);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(top: 20, left: 20, right: 20),
      child: Container(
        width: double.infinity,
        height: 100,
        decoration: BoxDecoration(
          gradient:
              LinearGradient(colors: [Color(0xff6989F5), Color(0xff906EF5)]),
          borderRadius: BorderRadius.circular(20),
          boxShadow: [
            BoxShadow(
                color: Colors.black.withOpacity(0.2),
                offset: Offset(4, 6),
                blurRadius: 10)
          ],
        ),
        child: Stack(
          children: [
            Positioned(
              right: -20,
              top: -20,
              child: FaIcon(
                FontAwesomeIcons.calendarWeek,
                size: 150,
                color: Colors.white.withOpacity(0.2),
              ),
            ),
            GestureDetector(
              onTap: () =>
                  Navigator.pushNamed(context, 'list', arguments: room.id),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const SizedBox(
                    height: 90,
                    width: 20,
                  ),
                  _getRoomStatusIcon(room.isEnded),
                  const SizedBox(width: 20),
                  Expanded(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Agenda: ${room.title}',
                          softWrap: true,
                          maxLines: 3,
                          overflow: TextOverflow.ellipsis,
                          textAlign: TextAlign.start,
                          style: GoogleFonts.montserrat(
                              fontSize: 20, color: Colors.white),
                        ),
                        Text(
                          "Fecha: ${room.beginDate.toDate().toString().split(' ')[0]}",
                          style: GoogleFonts.montserrat(
                              fontSize: 15, color: Colors.white),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 10),
                  FaIcon(FontAwesomeIcons.chevronRight, color: Colors.white),
                  const SizedBox(width: 20),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

import 'package:votation_app/src/models/answer_enum.dart';

class Vote {
  late AnswerType vote;
  late int quantity;

  Vote({required this.vote, required this.quantity});
}

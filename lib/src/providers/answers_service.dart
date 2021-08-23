import 'package:cloud_firestore/cloud_firestore.dart';

class AnswersService {
  CollectionReference answers =
      FirebaseFirestore.instance.collection('Answers');

  Future<void> updateAnswer(
      List<Map<String, dynamic>> jsonAnswers, String answersId) {
    return answers
        .doc(answersId.trim())
        .update({'users': jsonAnswers})
        .then((value) => print("Answer Updated"))
        .catchError((error) => print("Failed to update user: $error"));
  }

  Future<void> createAnswer(
      List<Map<String, dynamic>> jsonAnswers, String answersId) {
    return answers
        .doc(answersId.trim())
        .update({'users': jsonAnswers})
        .then((value) => print("Answer Created"))
        .catchError((error) => print("Failed to update user: $error"));
  }
}

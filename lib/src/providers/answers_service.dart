import 'package:cloud_firestore/cloud_firestore.dart';

class AnswersService {
  CollectionReference answers =
      FirebaseFirestore.instance.collection('Answers');

  Future<void> updateAnswer(
      List<Map<String, dynamic>> jsonAnswers, String answersId) {
    return answers
        .doc(answersId.trim())
        .update({'users': jsonAnswers}).catchError(
            (error) => print("Failed to update user: $error"));
  }
}

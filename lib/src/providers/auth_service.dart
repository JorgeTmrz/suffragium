import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class AuthService {
  final FirebaseAuth auth = FirebaseAuth.instance;

  String? getUserDisplayName() {
    return auth.currentUser!.displayName;
  }

  String? getUserEmail() {
    return auth.currentUser!.email;
  }

  onSignOut(BuildContext context) async {
    await auth.signOut();
    Navigator.pushReplacementNamed(context, 'login');
  }

  onSignIn(BuildContext context, String email, String password) async {
    try {
      await auth.signInWithEmailAndPassword(
        email: email,
        password: password,
      );
      if (auth.currentUser != null) {
        Navigator.pushReplacementNamed(context, 'home');
      }
    } on FirebaseAuthException catch (e) {
      if (e.code == 'user-not-found') {
        print('No user found for that email.');
      } else if (e.code == 'wrong-password') {
        print('Wrong password provided for that user.');
      }
    }
  }

  onSignUp(BuildContext context, String fullName, String email,
      String password) async {
    try {
      await auth.createUserWithEmailAndPassword(
        email: email,
        password: password,
      );
      if (auth.currentUser != null) {
        await auth.currentUser!.updateDisplayName(fullName);
        Navigator.pushReplacementNamed(context, 'home');
      }
    } on FirebaseAuthException catch (e) {
      if (e.code == 'weak-password') {
        print('The password provided is too weak.');
      } else if (e.code == 'email-already-in-use') {
        print('The account already exists for that email.');
      }
    } catch (e) {
      print(e);
    }
  }
}

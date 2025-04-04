function signIn(req, res) {
  res.json({ message: "Sign In" });
}

function signUp(req, res) {
  res.json({ message: "Sign Up" });
}
function signOut(req, res) {
  res.json({ message: "Sign Out" });
}

export const AuthService = {
  signIn,
  signUp,
  signOut,
};

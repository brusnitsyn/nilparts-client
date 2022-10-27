export default function ({ $auth, redirect }) {
  if ($auth.user.role !== 'admin') {
    return redirect('/')
  }
}

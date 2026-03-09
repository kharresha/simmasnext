import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  // 1. Inisialisasi Supabase Client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // 2. Mendapatkan informasi user dari Supabase (gunakan getUser() sebagai best practice keamanan)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const url = request.nextUrl.clone()

  // 3. Jika TIDAK ada user dan mencoba akses halaman terproteksi
  if (
    !user &&
    (url.pathname.startsWith('/admin') ||
      url.pathname.startsWith('/guru') ||
      url.pathname.startsWith('/siswa'))
  ) {
    url.pathname = '/auth/login'
    return NextResponse.redirect(url)
  }

  // 4. Jika SUDAH login dan mencoba mengakses halaman /auth (login)
  if (user && url.pathname.startsWith('/auth')) {
    // Ambil data role pengguna dari tabel profiles (sesuaikan dengan skema Anda)
    // Pastikan Anda sudah membuat tabel profiles dengan kolom role
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile?.role === 'ADMIN') {
      url.pathname = '/admin/dashboard'
    } else if (profile?.role === 'GURU') {
      url.pathname = '/guru'
    } else {
      url.pathname = '/siswa'
    }

    return NextResponse.redirect(url)
  }

  // 5. Tambahkan redirect auto dari /admin ke /admin/dashboard
  if (user && url.pathname === '/admin') {
    url.pathname = '/admin/dashboard'
    return NextResponse.redirect(url)
  }

  // Wajib mengembalikan supabaseResponse
  return supabaseResponse
}

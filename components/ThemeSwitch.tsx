'use client'

import { Moon, MoonIcon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button className='border p-2 rounded-md hover:cursor-pointer inline-flex gap-2' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <span>{theme === "dark" ? "Világos mód" : "Sötét mód"}</span>
      <MoonIcon className="block dark:hidden w-5" />
      <Sun className="hidden dark:block w-5" />
    </button>
  )
}